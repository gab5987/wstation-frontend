import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";

const Sidebar = (props: any) => {
    var page = props.page;
    return(
        <ProSidebar className='App-sidebar'>
            <Menu iconShape="square">
                <MenuItem ><a href="/home"> Dashboard</a> </MenuItem>
                <MenuItem ><a href="/about"> About</a> </MenuItem>

            {/* <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
            </SubMenu> */}
            </Menu>
        </ProSidebar>
    );
}
export default Sidebar;