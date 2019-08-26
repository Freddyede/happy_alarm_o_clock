import { HomeScreen } from './screens/HomeScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createDrawerNavigator(
    {
        Accueil: {
            screen: HomeScreen,
        },
        Inscription: {
            screen: RegisterScreen,
        },
    });

const Routes = createAppContainer(MainNavigator);

export default Routes;