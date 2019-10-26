import React from 'react';
import {
    withRouter,
    NavLink,
} from 'react-router-dom';
import { connect } from "react-redux";


import './style.scss';
import {ShopButton} from '../../components/common'

class AdminMain extends React.PureComponent{
    Logout = () => {
        window.localStorage.clear();
        window.location.reload();
    };

    generateAdminHeader = () => (
      window.localStorage.token 
      ? <ShopButton 
            width={'200px'}
            onClick={()=> this.Logout()}
        >
                Log Out
        </ShopButton> 
      : null
    );

    points = [
        { name: 'Orders', key: 'orders' },
        { name: 'Goods', key: 'goods' },
    ];

    generateCards = () => (
      this.points.map((item) => (
          <NavLink
              to={`/bk_map_19/${item.key}`}
              className="point-card"
              key={item.key}
          >
              {item.name}
          </NavLink>
      ))
    );

    render(){
        return(
            <header className={`Header `}>
                <nav className={`flexible jBetween`}>
                    {this.generateAdminHeader()}
                    { this.generateCards() }
                </nav>
            </header>
        )
    }
}


const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
});

export default connect(
    mapStateToProps,
    null
)(withRouter(AdminMain));

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';



// export default class mainAdmin extends React.PureComponent{

//     generateDashboard = () => {
//         const dashboard = ['orders', 'goods']
//         return  <List>
//             {dashboard.map((text, index) => (
//                 <ListItem button key={text}>
//                     <ListItemText primary={text} />
//                 </ListItem>
//             ))}
//         </List>
//     }
//     render(){
//         return (
//             <div >
//               <CssBaseline />
//               <AppBar position="fixed">
//                 <Toolbar>
//                   <Typography variant="h6" noWrap>
//                     Clipped drawer
//                   </Typography>
//                 </Toolbar>
//               </AppBar>
//               <Drawer
//                 variant="permanent"
//               >
//                 <div />
//                 {this.generateDashboard()}
//                 <Divider />
//               </Drawer>
//               <main >
//                 <div  />
//                 <Typography paragraph>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                   ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
//                   facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
//                   gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
//                   donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//                   adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
//                   Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
//                   imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
//                   arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
//                   donec massa sapien faucibus et molestie ac.
//                 </Typography>
//                 <Typography paragraph>
//                   Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
//                   facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
//                   tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
//                   consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
//                   vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
//                   hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
//                   tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
//                   nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
//                   accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
//                 </Typography>
//               </main>
//             </div>
//           );
//         }
        
// }

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import {ShopButton} from '../../components/common'


// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   toolbar: theme.mixins.toolbar,
// }));

// export default function ClippedDrawer() {
//     const Logout = () => {
//         window.localStorage.clear();
//         window.location.reload();
//     };

//     const generateAdminHeader = () => (
//       window.localStorage.token 
//       ? 
//         <ListItem button key={'Log Out'}>
//             <ListItemText primary={'Log Out'} onClick={()=> this.Logout()} />
//         </ListItem>
//       : null
//     );

//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             Clipped drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={`${classes.toolbar} flexable`} />
//         <List>
//           {['Order', 'Goods'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         {generateAdminHeader()}
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//           ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
//           facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
//           gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
//           donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
//           Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
//           imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
//           arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
//           donec massa sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
//           facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
//           tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
//           consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
//           vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
//           hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
//           tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
//           nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
//           accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </main>
//     </div>
//   );
// }
