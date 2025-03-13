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
  AdvCfg,
  AdvOrgSummaryInfo,
  AdvOrgSummaryResponse,
  AdvPayExportCfg,
  AdvocatePayoutResponse,
  AdvocateSummaryInfo,
  AdvocateSummaryResponse,
  AdvpsvcConditionResponse,
  BookmarkCfg,
  CampaignCfg,
  CampaignCodeResponse,
  CampaignDetailSwaggerResponse,
  CampaignStudyResponse,
  CampaignSummarySwaggerResponse,
  EvalStatsResponse,
  RuleBulkResponse,
  RuleCfg,
  ScreenerCfg,
  ScreenerSummaryResponse
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Advocacy<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns information about a specific advocate
   *
   * @tags Advpsvc:Advocates
   * @name AdvocacyAdvocatesDetail
   * @summary Gets information about a specific advocate
   * @request GET:/api/advocacy/advocates/{tildaid}
   * @secure
   */
  advocacyAdvocatesDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<AdvocateSummaryInfo, void>({
      path: `/api/advocacy/advocates/${tildaid}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of advocates
   *
   * @tags Advpsvc:Advocates
   * @name AdvocacyAdvocatesList
   * @summary Gets list of advocates
   * @request GET:/api/advocacy/advocates
   * @secure
   */
  advocacyAdvocatesList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
      /** CampaignCode */
      campaigncode?: string;
      /** OrgId */
      orgid?: string;
      /** Status */
      status?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdvocateSummaryResponse, void>({
      path: `/api/advocacy/advocates`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns detailed information about an advocate's payments
   *
   * @tags Advpsvc:Advocates
   * @name AdvocacyAdvocatesPaymentsDetail
   * @summary Gets detailed information about an advocate's payments
   * @request GET:/api/advocacy/advocates/{tildaid}/payments
   * @secure
   */
  advocacyAdvocatesPaymentsDetail = (
    tildaid: string,
    params: RequestParams = {}
  ) =>
    this.request<AdvocatePayoutResponse, void>({
      path: `/api/advocacy/advocates/${tildaid}/payments`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates the status of one or more advocates
   *
   * @tags Advpsvc:Advocates
   * @name AdvocacyAdvocatesStatusCreate
   * @summary Updates the status of one or more advocates
   * @request POST:/api/advocacy/advocates/status
   * @secure
   */
  advocacyAdvocatesStatusCreate = (data: AdvCfg, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/advocacy/advocates/status`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Deletes a draft rate plan rule created from a campaign context
   *
   * @tags Advpsvc:Rateplan
   * @name AdvocacyCampaignRatePlanRulesDelete
   * @summary Deletes a draft rate plan rule created from a campaign context
   * @request DELETE:/api/advocacy/campaignRatePlanRules/{tildaid}
   * @secure
   */
  advocacyCampaignRatePlanRulesDelete = (
    tildaid: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/advocacy/campaignRatePlanRules/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Sets/Resets bookmark for a campaign
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsBookmarksCreate
   * @summary Sets/Resets bookmark for a campaign for a user
   * @request POST:/api/advocacy/campaigns/{tildaid}/bookmarks
   * @secure
   */
  advocacyCampaignsBookmarksCreate = (
    tildaid: string,
    data: BookmarkCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/advocacy/campaigns/${tildaid}/bookmarks`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns unique code associated with this campaign for the current advocate user
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsCodeDetail
   * @summary Gets unique code associated with this campaign for the current advocate user
   * @request GET:/api/advocacy/campaigns/{tildaid}/code
   * @secure
   */
  advocacyCampaignsCodeDetail = (
    tildaid: string,
    query?: {
      /** Advocate tildaid */
      advocateid?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignCodeResponse, void>({
      path: `/api/advocacy/campaigns/${tildaid}/code`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a new campaign; Response object looks like this { "tildaid": "%s" }
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsCreate
   * @summary Creates a new campaign
   * @request POST:/api/advocacy/campaigns
   * @secure
   */
  advocacyCampaignsCreate = (data: CampaignCfg, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/advocacy/campaigns`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Deletes a campaign
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsDelete
   * @summary Deletes a campaign
   * @request DELETE:/api/advocacy/campaigns/{tildaid}
   * @secure
   */
  advocacyCampaignsDelete = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/advocacy/campaigns/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Returns details of this advocate campaign
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsDetail
   * @summary Gets details of this advocate campaign
   * @request GET:/api/advocacy/campaigns/{tildaid}
   * @secure
   */
  advocacyCampaignsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<CampaignDetailSwaggerResponse, void>({
      path: `/api/advocacy/campaigns/${tildaid}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of advocate campaigns
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsList
   * @summary Gets list of advocate campaigns
   * @request GET:/api/advocacy/campaigns
   * @secure
   */
  advocacyCampaignsList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
      /** Bookmark */
      bookmark?: boolean;
      /** ConditionIds */
      conditionid?: string[];
      /** AgeRanges */
      agerange?: string[];
      /** Gender */
      gender?: string;
      /** Distance */
      distance?: number;
      /** Latitude */
      latitude?: number;
      /** Longitude */
      longitude?: number;
      /** StudyId */
      studyid?: string;
      /** Status */
      status?: string;
      /** Inactive */
      inactive?: string;
      /** Campaign Code */
      campaigncode?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignSummarySwaggerResponse, void>({
      path: `/api/advocacy/campaigns`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates a campaign's status
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsPartialUpdate
   * @summary Updates a campaign's status
   * @request PATCH:/api/advocacy/campaigns/{tildaid}
   * @secure
   */
  advocacyCampaignsPartialUpdate = (
    tildaid: string,
    data: CampaignCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/advocacy/campaigns/${tildaid}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns list of studies associated with advocate campaigns
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsStudiesList
   * @summary Gets list of studies associated with advocate campaigns
   * @request GET:/api/advocacy/campaigns/studies
   * @secure
   */
  advocacyCampaignsStudiesList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignStudyResponse, void>({
      path: `/api/advocacy/campaigns/studies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates a campaign
   *
   * @tags Advpsvc:Campaigns
   * @name AdvocacyCampaignsUpdate
   * @summary Updates a campaign
   * @request PUT:/api/advocacy/campaigns/{tildaid}
   * @secure
   */
  advocacyCampaignsUpdate = (
    tildaid: string,
    data: CampaignCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/advocacy/campaigns/${tildaid}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns list of medical conditions that can be associated with advocate campaigns
   *
   * @tags Advpsvc:Conditions
   * @name AdvocacyConditionsList
   * @summary Gets list of medical conditions that can be associated with advocate campaigns
   * @request GET:/api/advocacy/conditions
   * @secure
   */
  advocacyConditionsList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdvpsvcConditionResponse, void>({
      path: `/api/advocacy/conditions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Exports lead payout info for this advocate as a CSV
   *
   * @tags Advpsvc:Advocates
   * @name AdvocacyMyPayoutsExportCreate
   * @summary Exports lead payout info for this advocate as a CSV
   * @request POST:/api/advocacy/myPayouts/export
   * @secure
   */
  advocacyMyPayoutsExportCreate = (
    data: AdvPayExportCfg,
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/advocacy/myPayouts/export`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns detailed information about this advocate's payments
   *
   * @tags Advpsvc:Advocates
   * @name AdvocacyMyPayoutsList
   * @summary Gets detailed information about this advocate's payments
   * @request GET:/api/advocacy/myPayouts
   * @secure
   */
  advocacyMyPayoutsList = (params: RequestParams = {}) =>
    this.request<AdvocatePayoutResponse, void>({
      path: `/api/advocacy/myPayouts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns information about a specific advocate organization
   *
   * @tags Advpsvc:AdvOrgs
   * @name AdvocacyOrganizationsDetail
   * @summary Gets information about a specific advocate organization
   * @request GET:/api/advocacy/organizations/{tildaid}
   * @secure
   */
  advocacyOrganizationsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<AdvOrgSummaryInfo, void>({
      path: `/api/advocacy/organizations/${tildaid}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of advocate organizations
   *
   * @tags Advpsvc:AdvOrgs
   * @name AdvocacyOrganizationsList
   * @summary Gets list of advocate organizations
   * @request GET:/api/advocacy/organizations
   * @secure
   */
  advocacyOrganizationsList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
      /** Status */
      status?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdvOrgSummaryResponse, void>({
      path: `/api/advocacy/organizations`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates the status of one or more advocate organizations
   *
   * @tags Advpsvc:AdvOrgs
   * @name AdvocacyOrganizationsStatusCreate
   * @summary Updates the status of one or more advocate organizations
   * @request POST:/api/advocacy/organizations/status
   * @secure
   */
  advocacyOrganizationsStatusCreate = (
    data: AdvCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/advocacy/organizations/status`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns information on rate plan evaluation timestamps
   *
   * @tags Advpsvc:Rateplan
   * @name AdvocacyRatePlanEvalList
   * @summary Gets information on rate plan evaluation timestamps
   * @request GET:/api/advocacy/ratePlanEval
   * @secure
   */
  advocacyRatePlanEvalList = (params: RequestParams = {}) =>
    this.request<EvalStatsResponse, void>({
      path: `/api/advocacy/ratePlanEval`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a new rate plan rule; Response object looks like this { "tildaid": "%s" }
   *
   * @tags Advpsvc:Rateplan
   * @name AdvocacyRatePlanRulesCreate
   * @summary Creates a new rate plan rule
   * @request POST:/api/advocacy/ratePlanRules
   * @secure
   */
  advocacyRatePlanRulesCreate = (data: RuleCfg, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/advocacy/ratePlanRules`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Deletes a rate plan rule
   *
   * @tags Advpsvc:Rateplan
   * @name AdvocacyRatePlanRulesDelete
   * @summary Deletes a rate plan rule
   * @request DELETE:/api/advocacy/ratePlanRules/{tildaid}
   * @secure
   */
  advocacyRatePlanRulesDelete = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/advocacy/ratePlanRules/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Returns list of rate plan rules
   *
   * @tags Advpsvc:Rateplan
   * @name AdvocacyRatePlanRulesList
   * @summary Gets list of rate plan rules
   * @request GET:/api/advocacy/ratePlanRules
   * @secure
   */
  advocacyRatePlanRulesList = (
    query: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
      /** Rule type */
      ruletype: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<RuleBulkResponse, void>({
      path: `/api/advocacy/ratePlanRules`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Associates a participant form with a campaign link
   *
   * @tags Advpsvc:Screeners
   * @name AdvocacyScreenersLinkParticipantFormCreate
   * @summary Associates a participant form with a campaign link
   * @request POST:/api/advocacy/screeners/linkParticipantForm
   * @secure
   */
  advocacyScreenersLinkParticipantFormCreate = (
    data: ScreenerCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/advocacy/screeners/linkParticipantForm`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns list of screeners
   *
   * @tags Advpsvc:Screeners
   * @name AdvocacyScreenersList
   * @summary Gets list of screeners
   * @request GET:/api/advocacy/screeners
   * @secure
   */
  advocacyScreenersList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
      /** campaign for which screener is being fetched */
      srccampaignid?: string;
      /** study for which screener is being fetched */
      studyid?: string;
      /** current screener id */
      currscreener?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ScreenerSummaryResponse, void>({
      path: `/api/advocacy/screeners`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns details of this advocate campaign accessed using a campaign code, for public viewing
   *
   * @tags Advpsvc:Campaigns
   * @name PublicAdvocacyCampaignsDetail
   * @summary Gets details of this advocate campaign accessed using a campaign code, for public viewing
   * @request GET:/api/public/advocacy/campaigns/{code}
   * @secure
   */
  publicAdvocacyCampaignsDetail = (code: string, params: RequestParams = {}) =>
    this.request<CampaignDetailSwaggerResponse, void>({
      path: `/api/public/advocacy/campaigns/${code}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of advocate campaigns, for public viewing
   *
   * @tags Advpsvc:Campaigns
   * @name PublicAdvocacyCampaignsList
   * @summary Gets list of advocate campaigns, for public viewing
   * @request GET:/api/public/advocacy/campaigns
   * @secure
   */
  publicAdvocacyCampaignsList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
      /** ConditionIds */
      conditionid?: string[];
      /** AgeRanges */
      agerange?: string[];
      /** Gender */
      gender?: string;
      /** Distance */
      distance?: number;
      /** Latitude */
      latitude?: number;
      /** Longitude */
      longitude?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignSummarySwaggerResponse, void>({
      path: `/api/public/advocacy/campaigns`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of medical conditions that can be associated with advocate campaigns
   *
   * @tags Advpsvc:Conditions
   * @name PublicAdvocacyConditionsList
   * @summary Gets list of medical conditions that can be associated with advocate campaigns
   * @request GET:/api/public/advocacy/conditions
   * @secure
   */
  publicAdvocacyConditionsList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdvpsvcConditionResponse, void>({
      path: `/api/public/advocacy/conditions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Associates a participant form with a campaign link
   *
   * @tags Advpsvc:Screeners
   * @name PublicAdvocacyScreenersLinkParticipantFormCreate
   * @summary Associates a participant form with a campaign link
   * @request POST:/api/public/advocacy/screeners/linkParticipantForm
   * @secure
   */
  publicAdvocacyScreenersLinkParticipantFormCreate = (
    data: ScreenerCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/public/advocacy/screeners/linkParticipantForm`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
}
