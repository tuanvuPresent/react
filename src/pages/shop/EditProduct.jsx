import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "antd";


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: 300,
        },
    },
}));

export default class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'name',
            price: 0,
            quantity: 0,
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };
    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    };
    handleChangeQuantity = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    render() {
        return (
            <div>
                <div>
                    <form className={useStyles.root} noValidate autoComplete="off">
                        <div>
                            <TextField
                                id="standard-basic"
                                label="Name Product "
                                defaultValue={'name'}
                                onChange={this.handleChangeName}
                            />
                            <TextField
                                id="standard-basic"
                                label="Price (VND)"
                                defaultValue={0}
                                onChange={this.handleChangePrice}
                            />
                            <TextField
                                id="standard-basic"
                                label="Quantity"
                                defaultValue={0}
                                onChange={this.handleChangeQuantity}
                            />
                            <TextField
                                id="date"
                                label="Date"
                                type="datetime-local"
                                className={useStyles.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div>
                                <Button
                                    onClick={() => {
                                        let data = {
                                            'name': this.state.name,
                                            'price': this.state.price,
                                            'quantity': this.state.quantity
                                        };
                                        alert(this.state.name + " " + this.state.price + "  " + this.state.quantity)
                                    }}
                                >
                                    OK
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
