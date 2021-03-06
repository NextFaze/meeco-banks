import { MapPage } from './map/map';
import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { CardsPage } from './cards/cards';

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = MapPage;
export const Tab2Root = ListMasterPage;
export const Tab3Root = SettingsPage;
export const Tab4Root = CardsPage;
