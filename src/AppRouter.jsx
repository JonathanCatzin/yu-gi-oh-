import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, CartaPage, SearchPage } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='carta/:id' element={<CartaPage />} />
				<Route path='search' element={<SearchPage />} />
			</Route>

            <Route path='*' element={<Navigate to='/' />} />
	</Routes>
  );
};
