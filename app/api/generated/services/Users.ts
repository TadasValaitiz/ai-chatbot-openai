/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Role, User, UserProfile } from '../data-contracts';
import { HttpClient, RequestParams } from '../http-client';

export class Users<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get profile of given user which includes user's association with Organizations, Sites and Studies
   *
   * @tags Auth
   * @name UsersDetail
   * @summary Get profile of a given user
   * @request GET:/api/users/{userId}
   * @secure
   */
  usersDetail = (userId: string, params: RequestParams = {}) =>
    this.request<UserProfile, void>({
      path: `/api/users/${userId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Trigger a welcome email to the Actor
   *
   * @tags Auth
   * @name UsersInviteUpdate
   * @summary Trigger a welcome email to the Actor
   * @request PUT:/api/users/invite/{actorId}
   * @secure
   */
  usersInviteUpdate = (actorId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/users/invite/${actorId}`,
      method: 'PUT',
      secure: true,
      ...params
    });
  /**
   * @description List all users matching the criteria
   *
   * @tags Auth
   * @name UsersList
   * @summary List all users matching the criteria
   * @request GET:/api/users
   * @secure
   */
  usersList = (
    query?: {
      /** Comma separated list of user tildaids */
      tildaid?: string;
      /** Comma separated list of study tildaids */
      studyList?: string;
      /** Comma separated list of site tildaids */
      siteList?: string;
      /** Comma separated list of roles */
      roleList?: string;
      /** List users who are *NOT* members of org - only if org header is passed */
      invert?: boolean;
      /** Whether to return full profile info */
      profile?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<User[], void>({
      path: `/api/users`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List roles applicable to given scope
   *
   * @tags Auth
   * @name RolesList
   * @summary List roles applicable to given scope
   * @request GET:/api/roles
   * @secure
   */
  rolesList = (
    query?: {
      /** scope for applicable roles: One of Organization, Site or Study */
      scope?: string;
      /** get user specific roles */
      userId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<Role[], void>({
      path: `/api/roles`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
