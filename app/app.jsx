import React from 'react';
import isURL from 'validator/lib/isURL';

// Material-UI
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Snackbar from 'material-ui/lib/snackbar';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';

// Theme
import MyTheme from './mytheme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

@ThemeDecorator(ThemeManager.getMuiTheme(MyTheme))
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: '',
            open: false,
            disabled: true
        };
    };
    
    componentDidMount = () => {
        this.refs.textinput._getInputNode().focus();
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
            error: '',
            disabled: !event.target.value
        });
    };
    
    handleEnterKey = () => {
        this.submit();
    };
    
    handleTouchTap = () => {
        this.submit();
    };
    
    handleRequestClose = () => {
        this.setState({open: false,});
    };
        
    submit = () => {
        if(!isURL(this.state.value)) {
            this.setState({error: "Please enter a valid URL..."});
        } else {
            $.ajax({
                type    : "POST",
                url     : "http://apis.anewhope.io/urlshortener/v1/url",
                data    : {"longUrl": this.state.value},
                dataType: "json",
                success: function(data) {
                    this.setState({value: data.id, open: true, disabled: true});
                    this.refs.textinput._getInputNode().select();
                }.bind(this),
                complete: function(xhr) {
                    if(xhr.status != 200)
                        this.setState({error: xhr.responseText});
                }.bind(this),
            });
        }
    };

    render() {return(
    <div>
        <AppBar className="mui-nav"
            title="&#181;links.li   |   Link shortener"
            showMenuIconButton={false}
            iconElementRight={
                <IconButton className="mui-icon-button"
                    iconClassName="mui-icon-github"
                    href="https://github.com/quoeradem/ulinks.li"
                    linkButton={true}
                />
            }
        />
        <div className="mui-container">
            <Paper className='mui-content'>
                <TextField className="mui-input"
                    type="url"
                    hintText="Link to shorten"
                    value={this.state.value}
                    onChange={this.handleChange}
                    errorText={this.state.error}
                    onEnterKeyDown={this.handleEnterKey}
                    ref="textinput"
                />
                <RaisedButton
                    label="shorten"
                    primary={true}
                    disabled={this.state.disabled}
                    onTouchTap={this.handleTouchTap}
                />
            </Paper>
            <Snackbar
                open={this.state.open}
                message="Press CTRL+C to copy."
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
            />
        </div>
    </div>
    )}
}

export default Main;