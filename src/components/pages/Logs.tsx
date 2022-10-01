import "./assets/Pages.scss";

import ReactTableUI from 'react-table-ui'
import { useMemo, useRef } from 'react'
import type { TableInstance, DataType } from 'react-table-ui'
import { text } from "stream/consumers";
import { table } from "console";

interface User extends DataType {
    
  }

const Logs = () => {

    const data: User[] = useMemo(
        () => [
          { id: 55, temperature: 20, humidity: 30, date: "2021-05-01 12:00:00" },
          { id: 55, temperature: 20, humidity: 30, date: "2021-05-01 12:00:00" },
          { id: 55, temperature: 20, humidity: 30, date: "2021-05-01 12:00:00" },
          { id: 55, temperature: 20, humidity: 30, date: "2021-05-01 12:00:00" },
          { id: 55, temperature: 20, humidity: 30, date: "2021-05-01 12:00:00" },
          { id: 55, temperature: 20, humidity: 30, date: "2021-05-01 12:00:00" },
          { id: 55, temperature: 20, humidity: 30, date: "2021-05-01 12:00:00" },
          { id: 55, temperature: 20, humidity: 30, date: "2021-05-01 12:00:00" },
        ],
        []
      )
      const tableInstanceRef = useRef<TableInstance<User>>(null)

  return (
    <div className="app">
        <div className="app-title">
            <h3>Logs</h3>
        </div>
        <ReactTableUI
            title='My Table'
            data={data}
            tableInstanceRef={tableInstanceRef}
            actionOptions={{
                
            }}
            styleOptions={{
                titleBar: false,
                theme: {
                    colors: {
                        background: {
                            primary: "#282c34",
                            secondary: "#343a45",
                        },
                        text: {
                            primary: "#b5b3b3",
                            secondary: "#b5b3b3",
                        },
                        border: {
                            primary: "#a3a3a3",
                        }
                    }
                },
            }}
        />
    </div>
  );
}
export default Logs;