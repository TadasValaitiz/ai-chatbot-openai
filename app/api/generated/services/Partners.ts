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
  Partner,
  PartnerMeta,
  PartnerOutput,
  PartnerPatch,
  PartnersOverview,
  SitePartnerBrief,
  SitePartnershipOverview,
  SitePartnershipsInput,
  StudyPartnersInput,
  StudyPartnersOutput,
  StudyPartnersOverview,
  StudyPartnership,
  StudyPartnershipOverview,
  StudyPartnershipSites
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Partners<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a partner
   *
   * @tags Auth
   * @name PartnersCreate
   * @summary Create a partner
   * @request POST:/api/partners
   * @secure
   */
  partnersCreate = (data: Partner, params: RequestParams = {}) =>
    this.request<Partner, void>({
      path: `/api/partners`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Currently allows deletion of a Partner which has no attachments
   *
   * @tags Auth
   * @name PartnersDelete
   * @summary Deletes a Partner
   * @request DELETE:/api/partners/{partnerId}
   * @secure
   */
  partnersDelete = (partnerId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/partners/${partnerId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get overview of a partner
   *
   * @tags Auth
   * @name PartnersDetail
   * @summary Get details of a partner
   * @request GET:/api/partners/{partnerId}
   * @secure
   */
  partnersDetail = (partnerId: string, params: RequestParams = {}) =>
    this.request<PartnerOutput, void>({
      path: `/api/partners/${partnerId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List partners
   *
   * @tags Auth
   * @name PartnersList
   * @summary List partners
   * @request GET:/api/partners
   * @secure
   */
  partnersList = (
    query?: {
      /** search key */
      searchkey?: string;
      /** search string */
      searchstr?: string;
      /** partner status */
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
    this.request<PartnersOverview, void>({
      path: `/api/partners`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Patches the Partner
   *
   * @tags Auth
   * @name PartnersPartialUpdate
   * @summary Patches the Partner
   * @request PATCH:/api/partners/{partnerId}
   * @secure
   */
  partnersPartialUpdate = (
    partnerId: string,
    data: PartnerPatch,
    params: RequestParams = {}
  ) =>
    this.request<Partner, void>({
      path: `/api/partners/${partnerId}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Associate a Site to a Partner(without a Study context)
   *
   * @tags Auth
   * @name PartnersSiteCreate
   * @summary Create a SitePartnership
   * @request POST:/api/partners/site/{siteId}
   * @secure
   */
  partnersSiteCreate = (
    siteId: string,
    data: SitePartnershipsInput,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/partners/site/${siteId}`,
      method: 'POST',
      body: data,
      secure: true,
      ...params
    });
  /**
   * @description List site partnerships(query params are not currently working)
   *
   * @tags Auth
   * @name PartnersSiteDetail
   * @summary List site partnerships
   * @request GET:/api/partners/site/{siteId}
   * @secure
   */
  partnersSiteDetail = (
    siteId: string,
    query?: {
      /** search key */
      searchkey?: string;
      /** search string */
      searchstr?: string;
      /** partner status */
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
    this.request<SitePartnerBrief[], void>({
      path: `/api/partners/site/${siteId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Removes Site-Partner associations(without a Study context)
   *
   * @tags Auth
   * @name PartnersSitePartnerDelete
   * @summary Removes SitePartnerships
   * @request DELETE:/api/partners/site/{siteId}/partner/{partnerId}
   * @secure
   */
  partnersSitePartnerDelete = (
    siteId: string,
    partnerId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/partners/site/${siteId}/partner/${partnerId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get overview of a site-partnership
   *
   * @tags Auth
   * @name PartnersSitePartnerDetail
   * @summary Get details of a site-partnership
   * @request GET:/api/partners/site/{siteId}/partner/{partnerId}
   * @secure
   */
  partnersSitePartnerDetail = (
    siteId: string,
    partnerId: string,
    params: RequestParams = {}
  ) =>
    this.request<SitePartnershipOverview, void>({
      path: `/api/partners/site/${siteId}/partner/${partnerId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates Study-Partnerships for the given Sites
   *
   * @tags Auth
   * @name PartnersStudyCreate
   * @summary Creates Study-Partnerships
   * @request POST:/api/partners/study/{studyId}
   * @secure
   */
  partnersStudyCreate = (
    studyId: string,
    data: StudyPartnersInput,
    params: RequestParams = {}
  ) =>
    this.request<StudyPartnersOutput[], void>({
      path: `/api/partners/study/${studyId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List study partnerships
   *
   * @tags Auth
   * @name PartnersStudyDetail
   * @summary List study partnerships
   * @request GET:/api/partners/study/{studyId}
   * @secure
   */
  partnersStudyDetail = (
    studyId: string,
    query?: {
      /** search key */
      searchkey?: string;
      /** search string */
      searchstr?: string;
      /** partner status */
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
    this.request<StudyPartnersOverview, void>({
      path: `/api/partners/study/${studyId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Removes a Partner from a Study
   *
   * @tags Auth
   * @name PartnersStudyPartnerDelete
   * @summary Removes a Partner from a Study
   * @request DELETE:/api/partners/study/{studyId}/partner/{partnerId}
   * @secure
   */
  partnersStudyPartnerDelete = (
    studyId: string,
    partnerId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/partners/study/${studyId}/partner/${partnerId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get overview of a study-partnership
   *
   * @tags Auth
   * @name PartnersStudyPartnerDetail
   * @summary Get details of a study-partnership
   * @request GET:/api/partners/study/{studyId}/partner/{partnerId}
   * @secure
   */
  partnersStudyPartnerDetail = (
    studyId: string,
    partnerId: string,
    params: RequestParams = {}
  ) =>
    this.request<StudyPartnershipOverview, void>({
      path: `/api/partners/study/${studyId}/partner/${partnerId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Adds Sites to StudyPartnership
   *
   * @tags Auth
   * @name PartnersStudyPartnerSitesCreate
   * @summary Adds Sites to StudyPartnership
   * @request POST:/api/partners/study/{studyId}/partner/{partnerId}/sites
   * @secure
   */
  partnersStudyPartnerSitesCreate = (
    studyId: string,
    partnerId: string,
    data: StudyPartnershipSites,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/partners/study/${studyId}/partner/${partnerId}/sites`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Removes Sites from StudyPartnership
   *
   * @tags Auth
   * @name PartnersStudyPartnerSitesDelete
   * @summary Removes Sites from StudyPartnership
   * @request DELETE:/api/partners/study/{studyId}/partner/{partnerId}/sites
   * @secure
   */
  partnersStudyPartnerSitesDelete = (
    studyId: string,
    partnerId: string,
    data: StudyPartnershipSites,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/partners/study/${studyId}/partner/${partnerId}/sites`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update a study-partnership(Currently 'status' is the only editable field)
   *
   * @tags Auth
   * @name PartnersStudyPartnerUpdate
   * @summary Update a study-partnership
   * @request PUT:/api/partners/study/{studyId}/partner/{partnerId}
   * @secure
   */
  partnersStudyPartnerUpdate = (
    studyId: string,
    partnerId: string,
    data: StudyPartnership,
    params: RequestParams = {}
  ) =>
    this.request<StudyPartnership, void>({
      path: `/api/partners/study/${studyId}/partner/${partnerId}`,
      method: 'PUT',
      body: data,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates the Partner
   *
   * @tags Auth
   * @name PartnersUpdate
   * @summary Updates the Partner
   * @request PUT:/api/partners/{partnerId}
   * @secure
   */
  partnersUpdate = (
    partnerId: string,
    data: PartnerMeta,
    params: RequestParams = {}
  ) =>
    this.request<Partner, void>({
      path: `/api/partners/${partnerId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
}
