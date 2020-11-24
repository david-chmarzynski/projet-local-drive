import React from 'react';

// IMPORT COMPONENTS
import AdminMenu from '../../AdminMenu/AdminMenu';

// IMPORT STYLED COMPONENTS
import { StyledAdminHome } from './AdminHome.styled';

const AdminHome = () => {
  return (
    <StyledAdminHome>
      <AdminMenu />
    </StyledAdminHome>
  );
};

export default AdminHome;