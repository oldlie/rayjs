import {SideBarChildModel, SideBarItemModel} from "../models/sidebar-model";
import {MainContentType} from "../models/main-content-types";
/**
 * Created by ray on 2017/3/30.
 */

export const MainSidebarData: Array<SideBarItemModel> = new Array();

// Dashboard
const dashboard: SideBarItemModel = new SideBarItemModel();
dashboard.id = "dashboard";
dashboard.icon = "fa fa-dashboard";
dashboard.text = "控制面板";
const dashboardMain: SideBarChildModel = new SideBarChildModel();
dashboardMain.id = "info";
dashboardMain.text = "主要信息";
dashboardMain.contentType = MainContentType.dashboardInfo;
dashboard.children = new Array();
dashboard.addChild(dashboardMain);
MainSidebarData.push(dashboard);

// Users
const  user: SideBarItemModel = new SideBarItemModel();
user.id = "user";
user.icon = "fa fa-users";
user.text = "用户管理";
user.children = new Array();
user.addChild({
    id: "list",
    pid: user.id,
    text: "用户列表",
    contentType: MainContentType.userList
}).addChild({
    id: "feedback",
    pid: user.id,
    text: "用户反馈",
    contentType: MainContentType.userFeedback
}).addChild({
    id: "score",
    pid: user.id,
    text: "积分兑换",
    contentType: MainContentType.userScore
});

MainSidebarData.push(user);

