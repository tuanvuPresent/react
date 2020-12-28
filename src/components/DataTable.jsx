import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const columns = [
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "company",
        label: "Company",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "city",
        label: "City",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "state",
        label: "State",
        options: {
            filter: true,
            sort: true,
        }
    },
];

const data = [
    {name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY"},
    {name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT"},
    {name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
    {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},


];

const options = {
    filterType: 'checkbox',
};
export default function SimpleTable() {
    const classes = useStyles();

    return (
        <MUIDataTable
            title={"Product List"}
            data={data}
            columns={columns}
            options={options}
            rowsSelected={()=>{
                alert('s')
            }}
        />
    );
}
