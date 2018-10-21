class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.target.value })
    }

    submitMessage() {
        const input = this.state.input;
        const message = this.state.messages.concat(input)
        this.setState({ messages: message, input: '' })
    }

    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input type='text' onChange={this.handleChange} value={this.state.input} />
                <button onClick={this.submitMessage}>Add message</button>
                <ul>{this.state.messages.map((el, i) => {
                    return <li key={i}>{el}</li>
                })}
                </ul>
            </div>
        );
    }
};