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
  CheckAuthzResponse,
  ListActorsOutput,
  Room,
  Site,
  SiteActorInput,
  SiteActorResponse,
  SiteInput,
  SiteLocation,
  SiteLocationMeta,
  SiteOutput,
  SiteStudiesOverview,
  SitesOverview
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Sites<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Create a site within given organization
   *
   * @tags Auth
   * @name SitesCreate
   * @summary Create a site within given organization
   * @request POST:/api/sites
   * @secure
   */
  sitesCreate = (data: SiteInput, params: RequestParams = {}) =>
    this.request<CheckAuthzResponse, void>({
      path: `/api/sites`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete a sites within given organization
   *
   * @tags Auth
   * @name SitesDelete
   * @summary Delete a sites within given organization
   * @request DELETE:/api/sites/{SiteId}
   * @secure
   */
  sitesDelete = (siteId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/sites/${siteId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get details of a site within given organization
   *
   * @tags Auth
   * @name SitesDetail
   * @summary Get details of a site within given organization
   * @request GET:/api/sites/{SiteId}
   * @secure
   */
  sitesDetail = (
    siteId: string,
    query?: {
      /** will return rooms, equipment, studies, and staff summaries when set */
      overview?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<SiteOutput, void>({
      path: `/api/sites/${siteId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List sites within given organization
   *
   * @tags Auth
   * @name SitesList
   * @summary List sites within given organization
   * @request GET:/api/sites
   * @secure
   */
  sitesList = (
    query?: {
      /** will return sites count when set */
      sitesSummary?: boolean;
      /** will return studiesSummary, subjectsCount and outstandingQueries when set */
      studiesSummary?: boolean;
      /** search key */
      searchkey?: string;
      /** search string */
      searchstr?: string;
      /** site status */
      status?: string;
      /** number of records to skip */
      skip?: number;
      /** number of records to display */
      limit?: number;
      /** descending order */
      desc?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<SitesOverview, void>({
      path: `/api/sites`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Add locations to a site
   *
   * @tags Auth
   * @name SitesLocationsCreate
   * @summary Add locations to a site
   * @request POST:/api/sites/{id}/locations
   * @secure
   */
  sitesLocationsCreate = (
    id: string,
    data: SiteLocationMeta,
    params: RequestParams = {}
  ) =>
    this.request<SiteLocation, void>({
      path: `/api/sites/${id}/locations`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes SiteLocation
   *
   * @tags Auth
   * @name SitesLocationsDelete
   * @summary Deletes SiteLocation
   * @request DELETE:/api/sites/{id}/locations/{locationId}
   * @secure
   */
  sitesLocationsDelete = (
    id: string,
    locationId: string,
    params: RequestParams = {}
  ) =>
    this.request<SiteLocation, void>({
      path: `/api/sites/${id}/locations/${locationId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists locations of a site
   *
   * @tags Auth
   * @name SitesLocationsDetail
   * @summary Lists locations of a site
   * @request GET:/api/sites/{id}/locations
   * @secure
   */
  sitesLocationsDetail = (
    id: string,
    query?: {
      /** search key */
      searchkey?: string;
      /** search string */
      searchstr?: string;
      /** location status */
      status?: string;
      /** number of records to skip */
      skip?: number;
      /** number of records to display */
      limit?: number;
      /** field to sort by */
      sort?: string;
      /** descending order */
      desc?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<SiteLocation[], void>({
      path: `/api/sites/${id}/locations`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get details of the SiteLocation
   *
   * @tags Auth
   * @name SitesLocationsDetail2
   * @summary Get SiteLocation
   * @request GET:/api/sites/{id}/locations/{locationId}
   * @originalName sitesLocationsDetail
   * @duplicate
   * @secure
   */
  sitesLocationsDetail2 = (
    id: string,
    locationId: string,
    params: RequestParams = {}
  ) =>
    this.request<SiteLocation, void>({
      path: `/api/sites/${id}/locations/${locationId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates SiteLocation
   *
   * @tags Auth
   * @name SitesLocationsUpdate
   * @summary Updates SiteLocation
   * @request PUT:/api/sites/{id}/locations/{locationId}
   * @secure
   */
  sitesLocationsUpdate = (
    id: string,
    locationId: string,
    data: SiteLocationMeta,
    params: RequestParams = {}
  ) =>
    this.request<SiteLocation, void>({
      path: `/api/sites/${id}/locations/${locationId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a room within the given site
   *
   * @tags Auth
   * @name SitesRoomsCreate
   * @summary Creates a room within the given site
   * @request POST:/api/sites/{SiteId}/rooms
   * @secure
   */
  sitesRoomsCreate = (siteId: string, data: Room, params: RequestParams = {}) =>
    this.request<Room, void>({
      path: `/api/sites/${siteId}/rooms`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a room within given site
   *
   * @tags Auth
   * @name SitesRoomsDelete
   * @summary Deletes a room within given site
   * @request DELETE:/api/sites/{SiteId}/rooms/{RoomId}
   * @secure
   */
  sitesRoomsDelete = (
    siteId: string,
    roomId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/sites/${siteId}/rooms/${roomId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description List rooms within the given site
   *
   * @tags Auth
   * @name SitesRoomsDetail
   * @summary List rooms within the given site
   * @request GET:/api/sites/{SiteId}/rooms
   * @secure
   */
  sitesRoomsDetail = (siteId: string, params: RequestParams = {}) =>
    this.request<SitesOverview, void>({
      path: `/api/sites/${siteId}/rooms`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get details of a room within given site
   *
   * @tags Auth
   * @name SitesRoomsDetail2
   * @summary Get details of a room within given site
   * @request GET:/api/sites/{SiteId}/rooms/{RoomId}
   * @originalName sitesRoomsDetail
   * @duplicate
   * @secure
   */
  sitesRoomsDetail2 = (
    siteId: string,
    roomId: string,
    params: RequestParams = {}
  ) =>
    this.request<Room, void>({
      path: `/api/sites/${siteId}/rooms/${roomId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates a room details within given site
   *
   * @tags Auth
   * @name SitesRoomsUpdate
   * @summary Updates a room details within given site
   * @request PUT:/api/sites/{SiteId}/rooms/{RoomId}
   * @secure
   */
  sitesRoomsUpdate = (
    siteId: string,
    roomId: string,
    data: Room,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/sites/${siteId}/rooms/${roomId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Add members to a site
   *
   * @tags Auth
   * @name SitesSitemembersCreate
   * @summary Add members to a site
   * @request POST:/api/sites/{id}/sitemembers
   * @secure
   */
  sitesSitemembersCreate = (
    id: string,
    data: SiteActorInput[],
    params: RequestParams = {}
  ) =>
    this.request<Actor[], void>({
      path: `/api/sites/${id}/sitemembers`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Remove an existing member of a site
   *
   * @tags Auth
   * @name SitesSitemembersDelete
   * @summary Remove an existing member of a site
   * @request DELETE:/api/sites/{id}/sitemembers/{mid}
   * @secure
   */
  sitesSitemembersDelete = (
    id: string,
    mid: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/sites/${id}/sitemembers/${mid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description List members of a site, potentially by role
   *
   * @tags Auth
   * @name SitesSitemembersDetail
   * @summary List members of a site
   * @request GET:/api/sites/{id}/sitemembers
   * @secure
   */
  sitesSitemembersDetail = (
    id: string,
    query?: {
      /** filter by role of members, ex: \ */
      role?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SiteActorResponse[], void>({
      path: `/api/sites/${id}/sitemembers`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List members of a site, potentially by role
   *
   * @tags Auth
   * @name SitesSitemembersOutputDetail
   * @summary List members of a site
   * @request GET:/api/sites/{id}/sitemembers/output
   * @secure
   */
  sitesSitemembersOutputDetail = (
    id: string,
    query?: {
      /** filter by role of members, ex: \ */
      role?: string;
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
      path: `/api/sites/${id}/sitemembers/output`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update an existing member of a site
   *
   * @tags Auth
   * @name SitesSitemembersUpdate
   * @summary Update an existing member of a site
   * @request PUT:/api/sites/{id}/sitemembers/{mid}
   * @secure
   */
  sitesSitemembersUpdate = (
    id: string,
    mid: string,
    data: SiteActorInput,
    params: RequestParams = {}
  ) =>
    this.request<Actor, void>({
      path: `/api/sites/${id}/sitemembers/${mid}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List studies for the given site
   *
   * @tags Auth
   * @name SitesStudiesDetail
   * @summary List studies for the given site
   * @request GET:/api/sites/{SiteId}/studies
   * @secure
   */
  sitesStudiesDetail = (
    siteId: string,
    query?: {
      /** search key */
      searchkey?: string;
      /** search string */
      searchstr?: string;
      /** study status */
      status?: string;
      /** number of records to skip */
      skip?: number;
      /** number of records to display */
      limit?: number;
      /** descending order */
      desc?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<SiteStudiesOverview, void>({
      path: `/api/sites/${siteId}/studies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates a sites SiteBase fields within given organization
   *
   * @tags Auth
   * @name SitesUpdate
   * @summary Updates a sites SiteBase fields within given organization
   * @request PUT:/api/sites/{SiteId}
   * @secure
   */
  sitesUpdate = (siteId: string, data: Site, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/sites/${siteId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
}
