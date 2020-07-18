import {
  InfoCircleOutlined,
  UploadOutlined,
  BulbOutlined,
  CalendarOutlined,
  SettingOutlined,
  TeamOutlined,
  FormOutlined,
} from '@ant-design/icons';
import {
  MANAGER_BASE_URI,
  UPLOAD_URI,
  DASHBOARD_URI,
  SCHEDULES_URI,
  EMP_SCHEDULE_URI,
  INPUT_TIMESLOT_URI,
  SETTINGS_URI,
  NOTIFY_MANAGER_URI,
  EMPLOYEES_MANAGE_URI,
} from 'constants/route';

export const SIDEBAR_ITEMS = {
  MANAGER: [
    {
      title: 'Information',
      key: 'information',
      icon: InfoCircleOutlined,
      url: MANAGER_BASE_URI,
    },
    {
      title: 'Upload Data',
      key: 'upload',
      icon: UploadOutlined,
      url: UPLOAD_URI,
    },
    {
      title: 'Dashboard',
      key: 'dashboard',
      icon: BulbOutlined,
      url: DASHBOARD_URI,
    },
    {
      title: 'Schedules',
      key: 'schedules',
      icon: CalendarOutlined,
      url: SCHEDULES_URI,
    },
    {
      title: 'Settings',
      key: 'settings',
      icon: SettingOutlined,
      url: SETTINGS_URI,
    },
    {
      title: 'Employees',
      key: 'employees',
      icon: TeamOutlined,
      url: EMPLOYEES_MANAGE_URI,
    },
  ],
  EMPLOYEE: [
    {
      title: 'Input time slots',
      key: 'input',
      icon: UploadOutlined,
      url: INPUT_TIMESLOT_URI,
    },
    {
      title: 'Schedule',
      key: 'schedule',
      icon: CalendarOutlined,
      url: EMP_SCHEDULE_URI,
    },
    {
      title: 'Notify manager',
      key: 'notify',
      icon: FormOutlined,
      url: NOTIFY_MANAGER_URI,
    },
  ],
};
