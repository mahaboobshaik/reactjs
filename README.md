# reactjs

## Creating a New Application

- Node >= 6

        npm install -g create-react-app
        create-react-app my-app

        cd my-app
        npm start

- Node 5.2.0+

        npx create-react-app my-app

        cd my-app
        npm start

## Commands 
- **npm start**

    Starts the development server.

- **npm run build**

    Bundles the app into static files for production.
- **npm test**

    Starts the test runner.

- **npm run eject**

    Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

## JSX
- it is a syntax extension to JavaScript, After compilation, JSX expressions become regular JavaScript objects

## Lifecycle Methods
- **componentDidMount**

    this hook runs after the component output has been rendered to the DOM
- **componentWillUnmount**

    This hook is called when a component is being removed from the DOM.

## Using State Correctly
-  **Do Not Modify State Directly**

        // Wrong
        this.state.comment = 'Hello';
        
        // Correct
        this.setState({comment: 'Hello'});

- **State Updates May Be Asynchronous**

    - React may batch multiple setState() calls into a single update for performance
    - you should not rely on their values for calculating the next state

            // Wrong
            this.setState({
                counter: this.state.counter + this.props.increment,
            });

            // Correct
            this.setState((prevState, props) => ({
                counter: prevState.counter + props.increment
            }));

            // Correct
            this.setState(function(prevState, props) {
                return {
                    counter: prevState.counter + props.increment
                };
            });
- **State Updates are Merged**

    When you call setState(), React merges the object you provide into the current state

    - your state may contain several independent variables

            constructor(props) {
                super(props);
                this.state = {
                posts: [],
                comments: []
                };
            }
    - Then you can update them independently with separate setState() calls

            componentDidMount() {
                fetchPosts().then(response => {
                    this.setState({
                        posts: response.posts
                    });
                });

                fetchComments().then(response => {
                    this.setState({
                        comments: response.comments
                    });
                });
            }
    - so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments

## **inline If with Logical && Operator**

- You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator

        function Mailbox(props) {
            const unreadMessages = props.unreadMessages;
            return (
                <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                    <h2>
                    You have {unreadMessages.length} unread messages.
                    </h2>
                }
                </div>
            );
        }

        const messages = ['React', 'Re: React', 'Re:Re: React'];
        ReactDOM.render(
            <Mailbox unreadMessages={messages} />,
            document.getElementById('root')
        );
- It works because in JavaScript, **true && expression** always evaluates to **expression**, and **false && expression** always evaluates to **false**.