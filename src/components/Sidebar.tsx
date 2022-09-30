import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import './sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGaugeHigh,
    faQuestion,
    faUser,
    faNewspaper,
    faTemperatureQuarter,
    faDroplet,
    faGears,
    faChartSimple
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props: any) => {
    return(
        <ProSidebar className='App-sidebar'>
            <SidebarHeader>
                <div className="App-sidebar-header">
                    <h1 className="App-sidebar-name"> W-station </h1>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FontAwesomeIcon icon={faGaugeHigh} />}>
                        <a href="/home"> Dashboard </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faNewspaper} />}>
                        <a href="/logs"> Logs </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faChartSimple} />}>
                        <a href="/about"> Graphs </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faTemperatureQuarter} />}>
                        <a href="/about"> Temperature </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faDroplet} />}>
                        <a href="/about"> Humidity </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faGears} />}>
                        <a href="/about"> Settings </a>
                    </MenuItem>

                    <MenuItem icon={<FontAwesomeIcon icon={faQuestion} />}>
                        <a href="/about"> About </a>
                    </MenuItem>
                </Menu>
            </SidebarContent>

            <SidebarFooter>
                <Menu iconShape="circle" className='exit-button'>
                    <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
                        <a href="/home"> Exit </a>
                    </MenuItem>
                </Menu>
            </SidebarFooter>

        </ProSidebar>
    );
}
export default Sidebar;