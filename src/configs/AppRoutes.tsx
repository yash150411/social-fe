import { Navigate, Route, Routes } from 'react-router';

import AppLayout from '@layout/AppLayout';
import DashboardPage from '@pages/DashboardPage';
import NotFoundPage from '@pages/NotFoundPage';
import { AppContainer } from './styles';
import CreatePostPage from '@pages/PostManagementPage';
import PostManagementPage from '@pages/PostManagementPage';
import AddEditPostPage from '@pages/PostManagementPage/AddEditPostPage';


function AppRoutes() {

  return (
    <AppContainer>
      <Routes>
        {/* <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route> */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/create" element={<PostManagementPage />}>
            {/* CRUD Routes */}
            <Route
              path="/create/add-post"
              element={<AddEditPostPage />}
            />
            <Route
              path="/create/edit-post/:id"
              element={ <AddEditPostPage />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default AppRoutes;
