import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const items = [
    {name: 'home', label: 'Home'},
    {name: 'billing', label: 'Billing'},
    {name: 'settings', label: 'Settings'},
]

function Sidebar() {
    return (
        <List>
            <ListItem button>
                <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Billing</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Settings</ListItemText>
            </ListItem>
        </List>
    )
}

function Demo() {
    return (
        <div style={{width: '10%', background: 'green', height: '100%'}}>
            <Sidebar items={items}/>
        </div>
    )
}

export default Demo
