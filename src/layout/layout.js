import Navigation from "../component/Navigation";

const Layout = ({children  ,setIsShow}) => {
    return ( 
        <div>
            <Navigation setIsShow={setIsShow} />
            {children}
        </div>
     );
}
 
export default Layout;