import axios from 'axios';

import { ApiPage, ApiResponse } from 'types/api';
import { Article } from 'types/articles';
import { ContactFormState } from 'types/contactForm';
import { Location } from 'types/locations';
import { Partner } from 'types/partners';
import { Project } from 'types/projects';
import { Service } from 'types/services';
import { TeamMember } from 'types/team';
import { Technology } from 'types/technologies';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: { Authorization: `Bearer ${process.env.API_KEY}` },
  params: { populate: 'deep', sort: 'order' },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);

    return Promise.reject(error);
  },
);

export const addContact = async (contact: ContactFormState) => {
  const { data } = await api.post('/contacts', { data: contact });

  return data;
};

export const getProjects = async (locale?: string): Promise<ApiResponse<Project[]>> => {
  const { data } = await api.get<ApiResponse<Project[]>>('/projects', { params: { locale } });

  return data;
};

export const getProject = async (id: number, locale?: string): Promise<ApiResponse<Project>> => {
  const { data } = await api.get<ApiResponse<Project>>(`/projects/${id}`, { params: { locale } });

  return data;
};

export const getTeam = async (locale?: string, limit?: number): Promise<ApiResponse<TeamMember[]>> => {
  const { data } = await api.get<ApiResponse<TeamMember[]>>('/team-members', {
    params: {
      locale,
      pagination: limit
        ? {
            limit,
          }
        : undefined,
    },
  });

  return data;
};

export const getLocations = async (locale?: string): Promise<ApiResponse<Location[]>> => {
  const { data } = await api.get<ApiResponse<Location[]>>('/locations', { params: { locale } });

  return data;
};

export const getServices = async (locale?: string): Promise<ApiResponse<Service[]>> => {
  const { data } = await api.get<ApiResponse<Service[]>>('/services', { params: { locale } });

  return data;
};

export const getPartners = async (): Promise<ApiResponse<Partner[]>> => {
  const { data } = await api.get<ApiResponse<Partner[]>>('/partners');

  return data;
};

export const getTechnologies = async (locale?: string): Promise<ApiResponse<Technology[]>> => {
  const { data } = await api.get<ApiResponse<Technology[]>>('/technologies', { params: { locale } });

  return data;
};

export const getArticles = async (locale?: string): Promise<ApiResponse<Article[]>> => {
  const { data } = await api.get<ApiResponse<Article[]>>('/articles', { params: { locale } });

  return data;
};

export const geAllArticles = async (locale?: string): Promise<ApiResponse<Article[]>> => {
  const { data } = await api.get<ApiResponse<Article[]>>('/articles', { params: { locale } });

  return data;
};

export const getArticle = async (slug: string, locale?: string): Promise<ApiResponse<Article>> => {
  const { data } = await api.get<ApiResponse<Article>>(`/articles/${slug}`, { params: { locale } });

  return data;
};

export const getHomePage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/home-page', { params: { locale } });

  return data;
};

export const getAboutPage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/about-page', { params: { locale } });

  return data;
};

export const getContactsPage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/contacts-page', { params: { locale } });

  return data;
};

export const getProjectsPage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/projects-page', { params: { locale } });

  return data;
};

export const getBlogPage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/blog-page', { params: { locale } });

  return data;
};

export const getSupportUkrainePage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/support-ukraine-page', { params: { locale } });

  return data;
};

export const getPrivacyPolicyPage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/privacy-policy-page', { params: { locale } });

  return data;
};

export const getTermsOfUsePage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/terms-of-use-page', { params: { locale } });

  return data;
};

export const getCookiesPolicyPage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/cookies-policy-page', { params: { locale } });

  return data;
};

export const getSitemapPage = async (locale?: string): Promise<ApiResponse<ApiPage>> => {
  const { data } = await api.get<ApiResponse<ApiPage>>('/sitemap-page', { params: { locale } });

  return data;
};
