import styled from 'styled-components';


export const HelpCompWrapper = styled.div`
    .desc-panel {
        padding: 15px 40px;
        height: 100%;
        font-size: 18px;
    }
`;

export const TreeSearchBox = styled.div`
    .search-input-box {
        width: 100%;
        height: 40px;
        margin-bottom: 15px;
        padding-left: 7px;
        border-radius: 10px;
    }
`;

export const TreeViewWrapper = styled.div`
    .tree-panel {
        border: 1px solid lightgrey;
        border-radius: 10px;
        .node {
            text-align: left;
            padding: 5px 20px;
            cursor: pointer;
        }
        .toggle-symbol {
            cursor: pointer;
            padding: 0 0 0 10px;
        }
        .tree-section {
            margin-top: 50px;
            padding: 30px;
        }
    }
`
