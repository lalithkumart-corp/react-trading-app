import {GsTradeTableWrapperComp} from './gsTable.style';

export default function GsTradeTableWrapper(props) {
    return <GsTradeTableWrapperComp className="gs-trade-table">{props.children}</GsTradeTableWrapperComp>
}