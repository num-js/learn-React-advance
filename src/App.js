import React, {useContext} from 'react';

const NameContext = React.createContext();
const ProContext = React.createContext();

const Coder2 = () => {
    const nameContext = useContext(NameContext);
    const proContext = useContext(ProContext);

    return (
        <>
            <div>Coder2---</div> 
            <div>
                Name: {nameContext.name}
            </div> 
            <div>
                Pro: {proContext.pro}
            </div> 
        </>
    );
}

class Coder1 extends React.Component {
    static contextType = NameContext
    static contextType = ProContext
    render() {
        return (
            <div>
                <div>Coder1---</div>
                Name: {this.context.name} <br />
                Pro: {this.context.pro}

                <br/>
                <br/>
                <Coder2 />
            </div>
        );
    }
}

const nameData = {
    name: 'Numan',
}
const proData = {
    pro: 'MERN',
}


const App = () => {
    return (
        <>
            <NameContext.Provider value={nameData}>
                <ProContext.Provider value={proData}>
                    <br />
                    <Coder1 />
                </ProContext.Provider>
            </NameContext.Provider>
        </>
    );
}

export default App;