import Home from '~/pages/Home'
import Content from '~/pages/Content';
import Teams from '~/pages/Teams';
import Explore from '~/pages/Explore';
import Support from '~/pages/Support';

//public Routes
const publicRoutes = [
    {path:'/', component: Home},
    {path:'/content', component: Content},
    {path:'/team', component: Teams},
    {path:'/explore', component: Explore},
    {path:'/support', component: Support},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };