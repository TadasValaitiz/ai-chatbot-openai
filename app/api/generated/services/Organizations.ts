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

import {
  Actor,
  ActorMeta,
  AffiliationMeta,
  ListActorsOutput,
  OrgActorResponse,
  Organization,
  OrganizationDetails,
  OrganizationMeta,
  OrganizationWithMembers,
  OrganizationWithRole,
  RecommendedSiteActorResponse,
  RecommendedSiteMembersPayload
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Organizations<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description List recommended actors based on their role and site preference within an organization
   *
   * @tags Auth
   * @name OrganizationsActorsRecommendedCreate
   * @summary List recommended actors
   * @request POST:/api/organizations/{alias}/actors/recommended
   * @secure
   */
  organizationsActorsRecommendedCreate = (
    alias: string,
    data: RecommendedSiteMembersPayload,
    params: RequestParams = {}
  ) =>
    this.request<RecommendedSiteActorResponse, void>({
      path: `/api/organizations/${alias}/actors/recommended`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Registers an Affiliation between the Organizations
   *
   * @tags Auth
   * @name OrganizationsAffiliationCreate
   * @summary Adds Affiliation between Orgs
   * @request POST:/api/organizations/{alias}/affiliation/{targetAlias}
   * @secure
   */
  organizationsAffiliationCreate = (
    alias: string,
    targetAlias: string,
    data: AffiliationMeta,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/organizations/${alias}/affiliation/${targetAlias}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Withdraws an Affiliation between the Organizations
   *
   * @tags Auth
   * @name OrganizationsAffiliationDelete
   * @summary Deletes Affiliation between Orgs
   * @request DELETE:/api/organizations/{alias}/affiliation/{targetAlias}
   * @secure
   */
  organizationsAffiliationDelete = (
    alias: string,
    targetAlias: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/organizations/${alias}/affiliation/${targetAlias}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Create a new Organization
   *
   * @tags Auth
   * @name OrganizationsCreate
   * @summary Create a new Organization
   * @request POST:/api/organizations
   * @secure
   */
  organizationsCreate = (
    data: OrganizationWithMembers,
    params: RequestParams = {}
  ) =>
    this.request<Organization, void>({
      path: `/api/organizations`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes an Organization. Works only after Sites and Members are removed
   *
   * @tags Auth
   * @name OrganizationsDelete
   * @summary Deletes an Organization
   * @request DELETE:/api/organizations/{alias}
   * @secure
   */
  organizationsDelete = (alias: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/organizations/${alias}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get details of an Organization
   *
   * @tags Auth
   * @name OrganizationsDetail
   * @summary Get details of an Organization
   * @request GET:/api/organizations/{alias}
   * @secure
   */
  organizationsDetail = (
    alias: string,
    data: OrganizationMeta,
    params: RequestParams = {}
  ) =>
    this.request<OrganizationDetails, void>({
      path: `/api/organizations/${alias}`,
      method: 'GET',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List all Organizations
   *
   * @tags Auth
   * @name OrganizationsList
   * @summary List Organizations
   * @request GET:/api/organizations
   * @secure
   */
  organizationsList = (
    query?: {
      /** Filter for organization type: e.g. SMO, CRO */
      type?: string;
      /** visible=true will filter-out organizations that the user cannot use */
      visible?: boolean;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<OrganizationWithRole[], void>({
      path: `/api/organizations`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Add members to the Organization
   *
   * @tags Auth
   * @name OrganizationsMembersCreate
   * @summary Add members to the Organization
   * @request POST:/api/organizations/{alias}/members
   * @secure
   */
  organizationsMembersCreate = (
    alias: string,
    data: ActorMeta[],
    params: RequestParams = {}
  ) =>
    this.request<Actor[], void>({
      path: `/api/organizations/${alias}/members`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Remove a member from given Organization
   *
   * @tags Auth
   * @name OrganizationsMembersDelete
   * @summary Remove a member from given Organization
   * @request DELETE:/api/organizations/{alias}/members/{memberId}
   * @secure
   */
  organizationsMembersDelete = (
    alias: string,
    memberId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/organizations/${alias}/members/${memberId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get details of an Organization
   *
   * @tags Auth
   * @name OrganizationsMembersDetail
   * @summary Get details of an Organization
   * @request GET:/api/organizations/{alias}/members
   * @secure
   */
  organizationsMembersDetail = (alias: string, params: RequestParams = {}) =>
    this.request<OrgActorResponse[], void>({
      path: `/api/organizations/${alias}/members`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get details of an Organization
   *
   * @tags Auth
   * @name OrganizationsMembersOutputDetail
   * @summary Get details of an Organization
   * @request GET:/api/organizations/{alias}/members/output
   * @secure
   */
  organizationsMembersOutputDetail = (
    alias: string,
    query?: {
      /** number of entries to skip */
      skip?: number;
      /** number of entries per page */
      limit?: number;
      /** field of actor to sort by */
      sort?: string;
      /** sort by descending or ascending */
      desc?: boolean;
      /** search key to search for in user info. ex. 'name' will search for actors with a username containing the passed searchstr value */
      searchkey?: string;
      /** search value to search for in user info. ex. 'taylor' */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListActorsOutput, void>({
      path: `/api/organizations/${alias}/members/output`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update a member of given Organization
   *
   * @tags Auth
   * @name OrganizationsMembersUpdate
   * @summary Update a member of given Organization
   * @request PUT:/api/organizations/{alias}/members/{memberId}
   * @secure
   */
  organizationsMembersUpdate = (
    alias: string,
    memberId: string,
    data: ActorMeta,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/organizations/${alias}/members/${memberId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Register a patient with given Organization
   *
   * @tags Auth
   * @name OrganizationsPatientsCreate
   * @summary Register a patient with given Organization
   * @request POST:/api/organizations/{alias}/patients/{pid}
   * @secure
   */
  organizationsPatientsCreate = (
    alias: string,
    pid: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/organizations/${alias}/patients/${pid}`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Update details of an Organization
   *
   * @tags Auth
   * @name OrganizationsUpdate
   * @summary Update details of an Organization
   * @request PUT:/api/organizations/{alias}
   * @secure
   */
  organizationsUpdate = (
    alias: string,
    data: OrganizationMeta,
    params: RequestParams = {}
  ) =>
    this.request<Organization, void>({
      path: `/api/organizations/${alias}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
}
