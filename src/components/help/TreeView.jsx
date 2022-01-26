import { useEffect, useState } from 'react';
import { HelpCompWrapper, TreeSearchBox, TreeViewWrapper } from './TreeView.style';
import {staticData} from './staticContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Autosuggest from 'react-autosuggest';
import Paper from '@mui/material/Paper';

export const TreeViewComp = () => {
    let [jsonData, setJsonData] = useState({...staticData});
    let [descContent, setDesc] = useState('');

    let [searchVal, setSearchVal] = useState('');
    let [suggestionsList, setSuggestions] = useState([]);

    useEffect(() => {
        let matches = getMatchesByTitle('', jsonData);
        setSuggestions(matches);
    }, []);


    const toggleNode = (serial, flag) => {
        let splits = serial.split('.'); // [1,1,2]
        let nodesToToggle = [];
        let prevPath = '';
        splits.map((aSplit) => {
            if(prevPath == '') prevPath = aSplit;
            else prevPath += `.${aSplit}`;
            nodesToToggle.push(prevPath);
        });

        if(nodesToToggle.length == 1) {
            jsonData[nodesToToggle[0]].isOpen = flag;
            setDesc(jsonData[nodesToToggle[0]].content);
        } else if(nodesToToggle.length == 2) {
            jsonData[nodesToToggle[0]].child[nodesToToggle[1]].isOpen = flag;
            setDesc(jsonData[nodesToToggle[0]].child[nodesToToggle[1]].content);
        } else if(nodesToToggle.length == 3) {
            jsonData[nodesToToggle[0]].child[nodesToToggle[1]].child[nodesToToggle[2]].isOpen = flag;
            setDesc(jsonData[nodesToToggle[0]].child[nodesToToggle[1]].child[nodesToToggle[2]].content);
        } else if(nodesToToggle.length == 4) {
            jsonData[nodesToToggle[0]].child[nodesToToggle[1]].child[nodesToToggle[2]].child[nodesToToggle[3]].isOpen = flag;
            setDesc(jsonData[nodesToToggle[0]].child[nodesToToggle[1]].child[nodesToToggle[2]].child[nodesToToggle[3]].content);
        }
        setJsonData({...jsonData});
    }

    const constructTree = (obj) => {
        let bucket = [];
        let childTree;
        Object.keys(obj).forEach((aNodeIndex) => {
            let aNode = obj[aNodeIndex];
            if(aNode.child) {
                childTree = constructTree(aNode.child);
                bucket.push(
                    <div className="has-child node" key={aNode.serial}>
                        <p
                            onClick={(e) => toggleNode(aNode.serial, !aNode.isOpen)}
                        > {aNode.serial} - {aNode.title} 
                            {aNode.isOpen ? 
                                <span className="toggle-symbol lt">^ </span> :
                                <span className="toggle-symbol gt">&gt;</span>
                            }
                        
                        </p>
                        <div className="child-tree" style={{display: `${aNode.isOpen?"block":"none"}` }}>
                            {childTree}
                        </div>
                    </div>
                )
            } else {
                bucket.push(
                    <div className="node" key={aNode.serial}>
                        <p>{aNode.serial} - {aNode.title}</p>
                    </div>
                )
            }
        });
        return bucket;
    }

    const getMatchesByTitle = (val, dataBucket, matchListPreserve) => {
        let matchList = [];
        if(matchListPreserve) matchList = matchListPreserve;
        if(val) val = val.toLowerCase();

        for(let objIdx in dataBucket) {
            let obj = dataBucket[objIdx];
            if(obj.title) {
                let titleLower = obj.title.toLowerCase();
                if(titleLower.indexOf(val) != -1) {
                    matchList.push({
                        serial: obj.serial,
                        title: obj.title
                    });
                }
            }
            if(obj.child)
                matchList = getMatchesByTitle(val, obj.child, matchList);
        }
        return matchList;
    }

    const onSuggestionsFetchRequested = ({value}) => {
        let matches = getMatchesByTitle(value, jsonData);
        setSuggestions(matches);
    }

    const getSuggestionValue = (suggestion) => {
        return suggestion.title;
    }

    const renderSuggestion = (suggestion) => {
        return (
            <div>
                {suggestion.serial} -- {suggestion.title}
            </div>
        )
    }

    const onChangeSearchVal = (e, {newValue}) => {
        setSearchVal(newValue);
    }

    const onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        toggleNode(suggestion.serial, true);
    }

    return (
        <HelpCompWrapper>
            <Grid container>
                <Grid item xs={7}>
                    <Grid container>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            <TreeSearchBox>
                                <Autosuggest
                                    suggestions={suggestionsList}
                                    onSuggestionsFetchRequested = {({value}) => onSuggestionsFetchRequested({value})}
                                    // onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                    getSuggestionValue={getSuggestionValue}
                                    renderSuggestion={renderSuggestion}
                                    onSuggestionSelected={(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) => onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })}
                                    inputProps={{
                                        placeholder: "Search...",
                                        value: searchVal,
                                        onChange: (e, {newValue}) => onChangeSearchVal(e, {newValue}),
                                        className: "search-input-box"
                                    }}
                                />
                            </TreeSearchBox>
                            <Box className="tree-section">
                                <TreeViewWrapper>
                                    <div className="tree-panel">
                                        {constructTree(jsonData)}
                                    </div>
                                </TreeViewWrapper>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Paper className="desc-panel">
                        <p>{descContent}</p>
                    </Paper>
                </Grid>
            </Grid>
        </HelpCompWrapper>
    )
}
