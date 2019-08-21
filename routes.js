import { HomeScreen } from './screens/HomeScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createDrawerNavigator(
    {
        Accueil: {
            screen: HomeScreen,
            path: '/'
        },
        Inscription: {
            screen: RegisterScreen,
            path: '/register'
        },
    });

const Routes = createAppContainer(MainNavigator);

export default Routes;