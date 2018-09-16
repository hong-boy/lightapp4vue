import LoginPage from '@components/login_page/login_page.vue';
import HomePage from '@components/home_page/home_page';
import MainPage from '@components/main_page/main_page';
import WikiPage from '@components/wiki_page/wiki_page';
import AboutPage from '@components/about_us_page/about_us_page';
import ShowCasePage from '@components/show_case_page/show_case_page';
import NotFoundPage from '@components/common/not_found_page';
import CaseDetail from '@components/show_case_page/case_detail';

const routes = [];

routes.push({ path: '/login', component: LoginPage });
routes.push({ path: '/', component: HomePage });
routes.push({ path: '/wiki', component: WikiPage });
routes.push({ path: '/case', component: ShowCasePage });
routes.push({ path: '/case/:id', component: CaseDetail });
routes.push({ path: '/about', component: AboutPage });
routes.push({ path: '/console', component: MainPage });
routes.push({ path: '*', component: NotFoundPage });

export default routes;
