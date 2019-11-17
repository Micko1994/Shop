import React from 'react';

import ValidatableForm, {
    FormsyText,
} from 'components/sections/ValidatableForm';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { ShopButton } from 'components/common';

export default class EditForm extends React.PureComponent{

    constructor(props){
        super(props);

        this.state = {
            isValid: false,
            formData: { ...(props.event === 'edit' ? props.data : null) }
        }
    }

    generateAdditionalFooterContent = () => (
        <div className="flexible grow jCenter aCenter login-footer">
            <ShopButton
                onClick={() => this.props.onUpdateGood()}
                variant="contained"
                disabled={!this.state.isValid}
                color="primary">
                {this.props.event === 'edit' ? 'Update' : 'Add'}
            </ShopButton>
        </div>
    );

    render(){

        return(
            <ValidatableForm
                className=" ValidatableForm "
                onChange={this.props.onEditFormChange}
                additionalFooterContent={this.generateAdditionalFooterContent()}
                checkFormValidation={(isValid) => this.setState({ isValid })}
            >
                <FormsyText
                    required
                    name="name"
                    placeholder="Name"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.name}
                />
                <FormsyText
                    required
                    name="description"
                    placeholder="description"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.description}
                />
                <FormsyText
                    required
                    name="old_price"
                    placeholder="Old Price"
                    value={this.state.formData.old_price}
                />
                <FormsyText
                    required
                    name="current_price"
                    placeholder="Current Price"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.current_price}
                />
                <FormsyText
                    required
                    name="imageUrl"
                    placeholder="Image Url"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.imageUrl}
                />
                <FormsyText
                    required
                    name="keywords"
                    placeholder="keywords"
                    validations="isExisty"
                    validationError="Please fill*"
                    value={this.state.formData.keywords}
                />
                <Select
                    value={this.state.formData.goods_type}
                    inputProps={{
                        name: 'goods_type',
                        id: 'goods_type',
                    }}
                    >
                    <MenuItem value={'shirt'}>Shirt</MenuItem>
                    <MenuItem value={'hat'}>Hat</MenuItem>
                    <MenuItem value={'handbag'}>Handbag</MenuItem>
                    <MenuItem value={'jewelry'}>Jewelry</MenuItem>
                </Select>
                <Select
                    value={this.state.formData.color}
                    inputProps={{
                        name: 'color',
                        id: 'color',
                    }}
                    >
                    <MenuItem value={'white'}>White</MenuItem>
                    <MenuItem value={'black'}>Black</MenuItem>
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'blue'}>blue</MenuItem>
                    <MenuItem value={'green'}>Green</MenuItem>
                    <MenuItem value={'grey'}>Grey</MenuItem>
                </Select>
            </ValidatableForm>
        )
    }
}