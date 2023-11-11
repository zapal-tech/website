import axios from 'axios';

import { ApiCollectionResponse, ApiPage } from 'types/api';
import { BlogPost } from 'types/blog';
import { ContactFormState } from 'types/contactForm';
import { Location } from 'types/locations';
import { Partner } from 'types/partners';
import { Project, ProjectFooter } from 'types/projects';
import { Service } from 'types/services';
import { TeamMember } from 'types/team';
import { Technology } from 'types/technologies';

import { BLOG_POSTS_PER_PAGE } from 'utils/constants';

const whereStatusPublished = { where: { _status: { equals: 'published' } } };

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.API_KEY },
  params: { sort: 'order', limit: 24 },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);

    return Promise.reject(error);
  },
);

export const addContact = async (contact: ContactFormState) => {
  const { data } = await api.post('/contact-form-leads', contact, { params: {} });

  return data;
};

export const getProjectFooter = async (locale?: string): Promise<ProjectFooter> => {
  const { data } = await api.get<ProjectFooter>('/globals/project-footer', {
    params: { locale },
  });

  return data;
};

export const getProjects = async (locale?: string): Promise<ApiCollectionResponse<Project>> => {
  const { data } = await api.get<ApiCollectionResponse<Project>>('/projects', {
    params: { locale, ...whereStatusPublished },
  });

  return data;
};

// Return 500 projects to make sure we get all of them (there are less than 500 projects)
export const getAllProjects = async (locale?: string): Promise<ApiCollectionResponse<Project>> => {
  const { data } = await api.get<ApiCollectionResponse<Project>>('/projects', {
    params: { locale, ...whereStatusPublished, limit: 500 },
  });

  return data;
};

export const getProjectById = async (id: string, locale?: string): Promise<Project> => {
  const { data } = await api.get<Project>(`/projects/${id}`, { params: { locale } });

  return data;
};

export const getProjectBySlug = async (slug: string, locale?: string): Promise<Project> => {
  const { data } = await api.get<Project>(`/projects/slug/${slug}`, { params: { locale } });

  return data;
};

export const getTeam = async (locale?: string, limit?: number): Promise<ApiCollectionResponse<TeamMember>> => {
  const { data } = await api.get<ApiCollectionResponse<TeamMember>>('/team', {
    params: { locale, ...whereStatusPublished, limit },
  });

  return data;
};

export const getLocations = async (locale?: string): Promise<ApiCollectionResponse<Location>> => {
  const { data } = await api.get<ApiCollectionResponse<Location>>('/locations', { params: { locale } });

  return data;
};

export const getServices = async (locale?: string): Promise<ApiCollectionResponse<Service>> => {
  const { data } = await api.get<ApiCollectionResponse<Service>>('/services', {
    params: { locale, ...whereStatusPublished },
  });

  return data;
};

export const getPartners = async (): Promise<ApiCollectionResponse<Partner>> => {
  const { data } = await api.get<ApiCollectionResponse<Partner>>('/partners');

  return data;
};

export const getTechnologies = async (locale?: string): Promise<ApiCollectionResponse<Technology>> => {
  const { data } = await api.get<ApiCollectionResponse<Technology>>('/technologies', {
    params: { locale, ...whereStatusPublished },
  });

  return data;
};

export const getBlogPosts = async (
  locale?: string,
  page = 1,
  limit = BLOG_POSTS_PER_PAGE,
): Promise<ApiCollectionResponse<BlogPost>> => {
  const { data } = await api.get<ApiCollectionResponse<BlogPost>>('/blog-posts', {
    params: { locale, ...whereStatusPublished, page, limit },
  });

  return data;
};

// Return 500 blog posts to make sure we get all of them (there are less than 500 blog posts)
export const getAllBlogPosts = async (locale?: string): Promise<ApiCollectionResponse<BlogPost>> => {
  const { data } = await api.get<ApiCollectionResponse<BlogPost>>('/blog-posts', {
    params: { locale, ...whereStatusPublished, limit: 500 },
  });

  return data;
};

export const getBlogPostBySlug = async (slug: string, locale?: string): Promise<BlogPost> => {
  const { data } = await api.get<BlogPost>(`/blog-posts/slug/${slug}`, { params: { locale } });

  return data;
};

export const getHomePage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/home-page', { params: { locale } });

  return data;
};

export const getAboutPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/about-page', { params: { locale } });

  return data;
};

export const getContactsPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/contacts-page', { params: { locale } });

  return data;
};

export const getProjectPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/project-page', { params: { locale } });

  return data;
};

export const getProjectsPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/projects-page', { params: { locale } });

  return data;
};

export const getBlogPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/blog-page', { params: { locale } });

  return data;
};

export const getSupportUkrainePage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/support-ukraine-page', { params: { locale } });

  return data;
};

export const getPrivacyPolicyPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/privacy-policy-page', { params: { locale } });

  return data;
};

export const getTermsOfUsePage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/terms-of-use-page', { params: { locale } });

  return data;
};

export const getCookiesPolicyPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/cookies-policy-page', { params: { locale } });

  return data;
};

export const getSitemapPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/sitemap-page', { params: { locale } });

  return data;
};

export const getScheduleMeetingPage = async (locale?: string): Promise<ApiPage> => {
  const { data } = await api.get<ApiPage>('/globals/schedule-meeting-page', { params: { locale } });

  return data;
};
