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
- Installing type script

        npm install --save-dev typescript
        tsc --init //To generate tsconfig.json

- Installing flow 

        npm install --save-dev flow-bin
        npm run flow init //To generate config

- Browserify

    -       # If you use npm
            npm install --save-dev envify uglify-js uglifyify 

            # If you use Yarn
            yarn add --dev envify uglify-js uglifyify 

         To create a production build, make sure that you add these transforms (the order matters):
         
         - The envify transform ensures the right build environment is set. Make it global (-g).
         - The uglifyify transform removes development imports. Make it global too (-g).
         - Finally, the resulting bundle is piped to uglify-js for mangling

## Commands 
- **npm start**

    Starts the development server.

- **npm run build**

    Bundles the app into static files for production.
- **npm test**

    Starts the test runner.

- **npm run eject**

    Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
## Adding Routing Module

        npm install react-router-dom --save
        
## Adding homepage for production build
- In **package.json** add homepage link, so that in production build it will change all the internal links according to production location

        "homepage": "http://localhost/reactt/build"

## Addind scss

- Install sass package

        npm install --save node-sass-chokidar

- In **package.json** add the following lines to scripts

        "scripts": {
        +    "build-css": "node-sass-chokidar src/ -o src/",</pre>
        +    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",

- Rename **.css** files to **.scc**
- run **npm run watch-css**, watcher will find every Sass file in src subdirectories, and create a corresponding CSS file next to it.
- To enable importing files without using relative paths, you can add the **--include-path** option to the command in **package.json**.

        "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
        "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",


## JSX
- it is a syntax extension to JavaScript, After compilation, JSX expressions become regular JavaScript objects

## Lifecycle Methods
- **componentWillMount**

    Invokes immediately before mounting occurs, before render()
- **componentDidMount**

    this hook runs after the component output has been rendered to the DOM. If you need to load data from a remote endpoint, this is a good place to instantiate the network request
- **componentWillUnmount**

    This hook is called when a component is being removed from the DOM.

- **shouldComponentUpdate**
    Triggered before the re-rendering process starts

        shouldComponentUpdate(nextProps, nextState) {
            if (this.props.color !== nextProps.color) {
                return true;
            }
            if (this.state.count !== nextState.count) {
                return true;
            }
            return false;
        }

- **componentWillReceiveProps**

    Invokes before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method

- **shouldComponentUpdate**

    Let React know if a component’s output is not affected by the current change in state or props.

- **componentWillUpdate**

    Invokes immediately before rendering when new props or state are being received.

- **componentDidUpdate**

    Invokes immediately after updating occurs.

- **componentDidCatch**

    Error boundaries catch errors during rendering.

## Echarts

        npm install --save echarts-for-react 

- [link](https://www.npmjs.com/package/echarts-for-react)

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

## **Lists and Keys**
- Rendering Multiple Components

    You can build collections of elements and include them in JSX using curly braces

    -
            const numbers = [1, 2, 3, 4, 5];
            const listItems = numbers.map((number) =>
                <li>{number}</li>
            );

            ReactDOM.render(
                <ul>{listItems}</ul>,
                document.getElementById('root')
            );

    - Basic List Component

            function NumberList(props) {
                const numbers = props.numbers;
                const listItems = numbers.map((number) =>
                    <li key={number.toString()}>
                    {number}
                    </li>
                );
                return (
                    <ul>{listItems}</ul>
                );
            }

            const numbers = [1, 2, 3, 4, 5];
            ReactDOM.render(
                <NumberList numbers={numbers} />,
                document.getElementById('root')
            );

        - A “key” is a special string attribute you need to include when creating lists of elements
        - Keys help React identify which items have changed, are added, or are removed


## **Conditional Rendering**
- **inline If with Logical && Operator**

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

- **Inline If-Else with Conditional Operator**

    - conditionally rendering elements inline is to use the JavaScript conditional operator **condition ? true : false**

            render() {
                const isLoggedIn = this.state.isLoggedIn;
                return (
                    <div>
                    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                    </div>
                );
            }
            -----------------------------------
            render() {
                const isLoggedIn = this.state.isLoggedIn;
                return (
                    <div>
                    {isLoggedIn ? (
                        <LogoutButton onClick={this.handleLogoutClick} />
                    ) : (
                        <LoginButton onClick={this.handleLoginClick} />
                    )}
                    </div>
                );
            }

## **Sample codes**

- active class in list

        render() {
            return (
                <elementslist>
                {
                    this.props.listData.map(function(ele, index) {
                        const className = thisVeiw.state.activeIndex === index ? 'each_element active' : 'each_element';  
                        return (<div className={className} key={'project_list'+index} onClick={() => thisVeiw.handleOnclick(index)}>
                                    <span>{ele.details}</span>
                                </div>);
                    })
                }
                </elementslist>
            );
        }

- onhover update image src

        handleMouseOver(ele) {
            if(ele === 'add')
                this.setState({imgSrcAdd: new_image});
        }

        handleMouseOut(ele) {
            if(ele === 'add')
                this.setState({imgSrcAdd: image});
        }

        <img className="add_project" onMouseOver={() => this.handleMouseOver('add')} onMouseOut={() => this.handleMouseOut('add')} src={this.state.imgSrcAdd} alt="Add Project"/>


- Routing

        import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';

        const baseRoute = ""; //"/demo/build";

        <Router>
            <routing>
                <nav className="main_navigation">
                    <NavLink exact to={`${baseRoute}/`} >Home</NavLink>
                    <NavLink to={`${baseRoute}/project`} >Project</NavLink>
                </nav>
                <Switch>
                    <Route exact path={`${baseRoute}/`} component={Home} />
                    <Route path={`${baseRoute}/project/:projectId`} component={ProjectDetails} />
                    <Route path={`${baseRoute}/project`} component={Project} />
                    <Redirect to={`${baseRoute}/`} />
                </Switch>
            </routing>
        </Router>