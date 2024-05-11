import HomePage from "./components/Home";
import BaseCard from "./components/block";
import StatComponent from "./components/stat";
import NavBar from "./components/bars/navbar";
import Sidebar from "./components/bars/sideBar";


import DropDown from "./components/form/dropdown";
import DropDownMulti from "./components/form/dropdown-multi";
import DataTable from "./components/table/table";
import {filterData as filterTableData} from "./components/table/filters"
import { addSpacesToCamelCase, capitalizeWords } from "./utils/text";

import IconSelector from './components/icons'
import { RoutingSwitch, PageWithHeader } from "./components/layout";

export {
    BaseCard,
    StatComponent,
    HomePage,
    NavBar,
    Sidebar as SideBar,
    PageWithHeader,
    RoutingSwitch,

    DropDown,
    DropDownMulti,

    DataTable,
    filterTableData,

    addSpacesToCamelCase,
    capitalizeWords,

    IconSelector

};


export * from './contexts';
export * from './utils';
