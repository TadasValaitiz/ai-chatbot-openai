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
  ActionCfg,
  ActionResponse,
  ActivityCreateCfg,
  ActivityDetail,
  ActivitySummary,
  ActivityUpdateCfg,
  AllowedObjList,
  BCVAEyeTestCfg,
  BCVAEyeTestInfo,
  BranchCreateUpdateCfg,
  BranchResponse,
  ControlCreateCfg,
  ControlDetail,
  ControlSummary,
  ControlUpdateCfg,
  DocOverlayCreateUpdateCfg,
  DocOverlayPatchCfg,
  DocOverlaySummaryInfo,
  DocUploadCreateUpdateCfg,
  DocUploadPatchCfg,
  DocUploadSummaryInfo,
  FormCreateCfg,
  FormCreateResponse,
  FormDetail,
  FormInstanceCfg,
  FormInstanceEligibilityResponse,
  FormInstanceMappedDataResponse,
  FormInstanceResponse,
  FormInstanceSaveCfg,
  FormSummary,
  FormUpdateCfg,
  GraphNodeActionCfg,
  GraphNodeActionResponse,
  ListActivityResponse,
  ListControlResponse,
  ListDataMappingDataNamesResponse,
  ListDataMappingFieldsResponse,
  ListDataMappingObjTypesResponse,
  ListDocOverlaysResponse,
  ListDocUploadsResponse,
  ListFormResponse,
  ListGraphNodeResponse,
  ListMediaResponse,
  ListProtocolVisitResponse,
  ListQuestionsResponse,
  ListResponseSets,
  ListSnellenChartsResponse,
  ListStatementsResponse,
  ListTableResponse,
  ListTasksResponse,
  ListTodosResponse,
  ListTrainingResponse,
  ListTriggerResponse,
  ListVariablesResponse,
  ListWorkflowResponse,
  MediaCreateCfg,
  MediaDetail,
  MediaSummary,
  MediaUpdateCfg,
  QuestionCreateUpdateCfg,
  QuestionDetailedResponse,
  QuestionPatchCfg,
  RefractionData,
  RefractionDataInfo,
  ResponseSetDetailInfo,
  ResponseSetInfo,
  SnellenChart,
  SnellenChartCfg,
  SnellenChartSummary,
  StatementCfg,
  StatementPatchCfg,
  StatementSummary,
  TableCreateCfg,
  TableDetail,
  TableSummary,
  TableUpdateCfg,
  TaskCreateUpdateCfg,
  TaskPatchCfg,
  TaskSummaryInfo,
  TildaIdResponse,
  TodoCreateCfg,
  TodoSummaryInfo,
  TodoUpdateCfg,
  TrainingCreateCfg,
  TrainingDetail,
  TrainingSummary,
  TrainingUpdateCfg,
  TriggerCreateCfg,
  TriggerDetail,
  TriggerSummary,
  TriggerUpdateCfg,
  VariableCfg,
  VisitCreateCfg,
  VisitCreateResponse,
  VisitDetail,
  VisitSummary,
  VisitUpdateCfg,
  WorkflowCreateCfg,
  WorkflowDetail,
  WorkflowSummary,
  WorkflowUpdateCfg
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Studio<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Create Action
   *
   * @tags Action
   * @name StudioActionCreate
   * @summary Create Action
   * @request POST:/api/studio/action
   * @secure
   */
  studioActionCreate = (data: ActionCfg, params: RequestParams = {}) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/action`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Action
   *
   * @tags Action
   * @name StudioActionDelete
   * @summary Deletes a Action
   * @request DELETE:/api/studio/action/{id}
   * @secure
   */
  studioActionDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/action/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Action details
   *
   * @tags ActionV2
   * @name StudioActionDetail
   * @summary Gets a specific Action details
   * @request GET:/api/studio/action/{id}
   * @secure
   */
  studioActionDetail = (id: string, params: RequestParams = {}) =>
    this.request<ActionResponse, void>({
      path: `/api/studio/action/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create Activity
   *
   * @tags Activity
   * @name StudioActivitiesCreate
   * @summary Create Activity
   * @request POST:/api/studio/activities
   * @secure
   */
  studioActivitiesCreate = (
    data: ActivityCreateCfg,
    params: RequestParams = {}
  ) =>
    this.request<FormCreateResponse, void>({
      path: `/api/studio/activities`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Activity
   *
   * @tags Activity
   * @name StudioActivitiesDelete
   * @summary Deletes a Activity
   * @request DELETE:/api/studio/activities/{id}
   * @secure
   */
  studioActivitiesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/activities/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Activity details
   *
   * @tags Activity
   * @name StudioActivitiesDetail
   * @summary Gets a specific Activity details
   * @request GET:/api/studio/activities/{id}
   * @secure
   */
  studioActivitiesDetail = (
    id: string,
    query?: {
      /** branchid of branch whose children nodes are to be returned */
      branchid?: string;
      /** tildaid of obj whose detailed info needs to be returned */
      objid?: string;
      /** tildaid of protocol */
      protocolid?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<ActivityDetail, void>({
      path: `/api/studio/activities/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists Activities
   *
   * @tags Activity
   * @name StudioActivitiesList
   * @summary Lists Activities
   * @request GET:/api/studio/activities
   * @secure
   */
  studioActivitiesList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** state of the Activity */
      state?: string;
      /** tildaid of protocol */
      protocolid?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListActivityResponse, void>({
      path: `/api/studio/activities`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Activity
   *
   * @tags Activity
   * @name StudioActivitiesPartialUpdate
   * @summary Update Activity
   * @request PATCH:/api/studio/activities/{id}
   * @secure
   */
  studioActivitiesPartialUpdate = (
    id: string,
    data: ActivityUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/activities/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific Activity summary
   *
   * @tags Activity
   * @name StudioActivitiesSummaryDetail
   * @summary Gets a specific Activity summary
   * @request GET:/api/studio/activities/{id}/summary
   * @secure
   */
  studioActivitiesSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<ActivitySummary, void>({
      path: `/api/studio/activities/${id}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of obj types that are allowed to be added to a graph of given obj type
   *
   * @tags Graph
   * @name StudioAllowedObjListList
   * @summary Returns list of obj types that are allowed to be added to a graph of given obj type
   * @request GET:/api/studio/allowedObjList
   * @secure
   */
  studioAllowedObjListList = (
    query: {
      /** object type of the graph */
      objtype: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AllowedObjList, void>({
      path: `/api/studio/allowedObjList`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets BCVA eye test object information
   *
   * @tags Bcva
   * @name StudioBcvaEyeTestDetail
   * @summary Gets BCVA eye test object information
   * @request GET:/api/studio/bcva/eyeTest/{id}
   * @secure
   */
  studioBcvaEyeTestDetail = (id: string, params: RequestParams = {}) =>
    this.request<BCVAEyeTestInfo, void>({
      path: `/api/studio/bcva/eyeTest/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update eye test configuration
   *
   * @tags bcva
   * @name StudioBcvaEyeTestUpdate
   * @summary Update eye test configuration
   * @request PUT:/api/studio/bcva/eyeTest/{id}
   * @secure
   */
  studioBcvaEyeTestUpdate = (
    id: string,
    data: BCVAEyeTestCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/bcva/eyeTest/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets BCVA refraction data
   *
   * @tags Bcva
   * @name StudioBcvaRefractionDataDetail
   * @summary Gets BCVA refraction data
   * @request GET:/api/studio/bcva/refractionData/{id}
   * @secure
   */
  studioBcvaRefractionDataDetail = (id: string, params: RequestParams = {}) =>
    this.request<RefractionDataInfo, void>({
      path: `/api/studio/bcva/refractionData/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update refraction data configuration
   *
   * @tags bcva
   * @name StudioBcvaRefractionDataUpdate
   * @summary Update refraction data configuration
   * @request PUT:/api/studio/bcva/refractionData/{id}
   * @secure
   */
  studioBcvaRefractionDataUpdate = (
    id: string,
    data: RefractionData,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/bcva/refractionData/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create Control
   *
   * @tags Control
   * @name StudioControlsCreate
   * @summary Create Control
   * @request POST:/api/studio/controls
   * @secure
   */
  studioControlsCreate = (data: ControlCreateCfg, params: RequestParams = {}) =>
    this.request<FormCreateResponse, void>({
      path: `/api/studio/controls`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Control
   *
   * @tags Control
   * @name StudioControlsDelete
   * @summary Deletes a Control
   * @request DELETE:/api/studio/controls/{id}
   * @secure
   */
  studioControlsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/controls/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Control details
   *
   * @tags Control
   * @name StudioControlsDetail
   * @summary Gets a specific Control details
   * @request GET:/api/studio/controls/{id}
   * @secure
   */
  studioControlsDetail = (
    id: string,
    query?: {
      /** branchid of branch whose children nodes are to be returned */
      branchid?: string;
      /** tildaid of obj whose detailed info needs to be returned */
      objid?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<ControlDetail, void>({
      path: `/api/studio/controls/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists Controls
   *
   * @tags Control
   * @name StudioControlsList
   * @summary Lists Controls
   * @request GET:/api/studio/controls
   * @secure
   */
  studioControlsList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** state of the Control */
      state?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListControlResponse, void>({
      path: `/api/studio/controls`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Control
   *
   * @tags Control
   * @name StudioControlsPartialUpdate
   * @summary Update Control
   * @request PATCH:/api/studio/controls/{id}
   * @secure
   */
  studioControlsPartialUpdate = (
    id: string,
    data: ControlUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/controls/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific Control summary
   *
   * @tags Control
   * @name StudioControlsSummaryDetail
   * @summary Gets a specific Control summary
   * @request GET:/api/studio/controls/{id}/summary
   * @secure
   */
  studioControlsSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<ControlSummary, void>({
      path: `/api/studio/controls/${id}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists field names for given obj type for data mapping
   *
   * @tags DataMapping
   * @name StudioDataMappingObjTypesDataNamesDetail
   * @summary Lists field names for given obj type for data mapping
   * @request GET:/api/studio/dataMapping/objTypes/{objType}/dataNames
   * @secure
   */
  studioDataMappingObjTypesDataNamesDetail = (
    objType: string,
    query: {
      /** data type of the object name being requested */
      datatype: string;
      /** format of the data name being requested */
      format: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListDataMappingDataNamesResponse, void>({
      path: `/api/studio/dataMapping/objTypes/${objType}/dataNames`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists field names for given obj type for data mapping
   *
   * @tags DataMapping
   * @name StudioDataMappingObjTypesFieldsDetail
   * @summary Lists field names for given obj type for data mapping
   * @request GET:/api/studio/dataMapping/objTypes/{objType}/fields
   * @secure
   */
  studioDataMappingObjTypesFieldsDetail = (
    objType: string,
    params: RequestParams = {}
  ) =>
    this.request<ListDataMappingFieldsResponse, void>({
      path: `/api/studio/dataMapping/objTypes/${objType}/fields`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists obj types for data mapping
   *
   * @tags DataMapping
   * @name StudioDataMappingObjTypesList
   * @summary Lists obj types for data mapping
   * @request GET:/api/studio/dataMapping/objTypes
   * @secure
   */
  studioDataMappingObjTypesList = (params: RequestParams = {}) =>
    this.request<ListDataMappingObjTypesResponse, void>({
      path: `/api/studio/dataMapping/objTypes`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create doc overlay
   *
   * @tags DocOverlay
   * @name StudioDocoverlaysCreate
   * @summary Create doc overlay
   * @request POST:/api/studio/docoverlays
   * @secure
   */
  studioDocoverlaysCreate = (
    data: DocOverlayCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docoverlays`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a doc overlay
   *
   * @tags DocOverlay
   * @name StudioDocoverlaysDelete
   * @summary Deletes a doc overlay
   * @request DELETE:/api/studio/docoverlays/{id}
   * @secure
   */
  studioDocoverlaysDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/docoverlays/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific doc overlay summary
   *
   * @tags DocOverlay
   * @name StudioDocoverlaysDetail
   * @summary Gets a specific doc overlay summary
   * @request GET:/api/studio/docoverlays/{id}
   * @secure
   */
  studioDocoverlaysDetail = (id: string, params: RequestParams = {}) =>
    this.request<DocOverlaySummaryInfo, void>({
      path: `/api/studio/docoverlays/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists doc overlays
   *
   * @tags DocOverlay
   * @name StudioDocoverlaysList
   * @summary Lists doc overlays
   * @request GET:/api/studio/docoverlays
   * @secure
   */
  studioDocoverlaysList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListDocOverlaysResponse, void>({
      path: `/api/studio/docoverlays`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Patch doc overlay
   *
   * @tags DocOverlay
   * @name StudioDocoverlaysPartialUpdate
   * @summary Patch doc overlay
   * @request PATCH:/api/studio/docoverlays/{id}
   * @secure
   */
  studioDocoverlaysPartialUpdate = (
    id: string,
    data: DocOverlayPatchCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docoverlays/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update doc overlay
   *
   * @tags DocOverlay
   * @name StudioDocoverlaysUpdate
   * @summary Update doc overlay
   * @request PUT:/api/studio/docoverlays/{id}
   * @secure
   */
  studioDocoverlaysUpdate = (
    id: string,
    data: DocOverlayCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docoverlays/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create document review
   *
   * @tags DocReview
   * @name StudioDocreviewsCreate
   * @summary Create document review
   * @request POST:/api/studio/docreviews
   * @secure
   */
  studioDocreviewsCreate = (
    data: DocOverlayCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docreviews`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a document review
   *
   * @tags DocReview
   * @name StudioDocreviewsDelete
   * @summary Deletes a document review
   * @request DELETE:/api/studio/docreviews/{id}
   * @secure
   */
  studioDocreviewsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/docreviews/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific document review summary
   *
   * @tags DocReview
   * @name StudioDocreviewsDetail
   * @summary Gets a specific document review summary
   * @request GET:/api/studio/docreviews/{id}
   * @secure
   */
  studioDocreviewsDetail = (id: string, params: RequestParams = {}) =>
    this.request<DocOverlaySummaryInfo, void>({
      path: `/api/studio/docreviews/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists document reviews
   *
   * @tags DocReview
   * @name StudioDocreviewsList
   * @summary Lists document reviews
   * @request GET:/api/studio/docreviews
   * @secure
   */
  studioDocreviewsList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListDocOverlaysResponse, void>({
      path: `/api/studio/docreviews`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Patch document review
   *
   * @tags DocReview
   * @name StudioDocreviewsPartialUpdate
   * @summary Patch document review
   * @request PATCH:/api/studio/docreviews/{id}
   * @secure
   */
  studioDocreviewsPartialUpdate = (
    id: string,
    data: DocOverlayPatchCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docreviews/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update document review
   *
   * @tags DocReview
   * @name StudioDocreviewsUpdate
   * @summary Update document review
   * @request PUT:/api/studio/docreviews/{id}
   * @secure
   */
  studioDocreviewsUpdate = (
    id: string,
    data: DocOverlayCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docreviews/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create document upload
   *
   * @tags DocUpload
   * @name StudioDocuploadsCreate
   * @summary Create document upload
   * @request POST:/api/studio/docuploads
   * @secure
   */
  studioDocuploadsCreate = (
    data: DocUploadCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docuploads`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a document upload
   *
   * @tags DocUpload
   * @name StudioDocuploadsDelete
   * @summary Deletes a document upload
   * @request DELETE:/api/studio/docuploads/{id}
   * @secure
   */
  studioDocuploadsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/docuploads/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific document upload summary
   *
   * @tags DocUpload
   * @name StudioDocuploadsDetail
   * @summary Gets a specific document upload summary
   * @request GET:/api/studio/docuploads/{id}
   * @secure
   */
  studioDocuploadsDetail = (id: string, params: RequestParams = {}) =>
    this.request<DocUploadSummaryInfo, void>({
      path: `/api/studio/docuploads/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists document uploads
   *
   * @tags DocUpload
   * @name StudioDocuploadsList
   * @summary Lists document uploads
   * @request GET:/api/studio/docuploads
   * @secure
   */
  studioDocuploadsList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListDocUploadsResponse, void>({
      path: `/api/studio/docuploads`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Patch document upload
   *
   * @tags DocUpload
   * @name StudioDocuploadsPartialUpdate
   * @summary Patch document upload
   * @request PATCH:/api/studio/docuploads/{id}
   * @secure
   */
  studioDocuploadsPartialUpdate = (
    id: string,
    data: DocUploadPatchCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docuploads/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update document upload
   *
   * @tags DocUpload
   * @name StudioDocuploadsUpdate
   * @summary Update document upload
   * @request PUT:/api/studio/docuploads/{id}
   * @secure
   */
  studioDocuploadsUpdate = (
    id: string,
    data: DocUploadCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/docuploads/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Reverts Form Instance context
   *
   * @tags Form
   * @name StudioFormInstanceBackCreate
   * @summary Reverts Form Instance context
   * @request POST:/api/studio/formInstance/{id}/back
   * @secure
   */
  studioFormInstanceBackCreate = (id: string, params: RequestParams = {}) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/studio/formInstance/${id}/back`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create Form Instance
   *
   * @tags Form
   * @name StudioFormInstanceCreate
   * @summary Create Form Instance
   * @request POST:/api/studio/formInstance
   * @secure
   */
  studioFormInstanceCreate = (
    data: FormInstanceCfg,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/studio/formInstance`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a form instance's current context
   *
   * @tags Form
   * @name StudioFormInstanceCurrContextDetail
   * @summary Gets a form instance's current context (without auth)
   * @request GET:/api/studio/formInstance/{id}/currContext
   * @secure
   */
  studioFormInstanceCurrContextDetail = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/studio/formInstance/${id}/currContext`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Resets Form Instance context so that it can be filled again
   *
   * @tags Form
   * @name StudioFormInstanceEditCreate
   * @summary Resets Form Instance context so that it can be filled again
   * @request POST:/api/studio/formInstance/{id}/edit
   * @secure
   */
  studioFormInstanceEditCreate = (id: string, params: RequestParams = {}) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/studio/formInstance/${id}/edit`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a form instance's eligibility flag
   *
   * @tags Form
   * @name StudioFormInstanceEligibilityDetail
   * @summary Gets a form instance's eligibility flag
   * @request GET:/api/studio/formInstance/{id}/eligibility
   * @secure
   */
  studioFormInstanceEligibilityDetail = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceEligibilityResponse, void>({
      path: `/api/studio/formInstance/${id}/eligibility`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a form instance's answer to a question mapped to HDM
   *
   * @tags Form
   * @name StudioFormInstanceMappedDataDetail
   * @summary Gets a form instance's answer to a question mapped to HDM
   * @request GET:/api/studio/formInstance/{id}/mappedData
   * @secure
   */
  studioFormInstanceMappedDataDetail = (
    id: string,
    query: {
      /** obj type(HDM class) */
      objtype: string;
      /** data name (HDM field) */
      dataname: string;
      /** questionnaireid if the mapped data is from a questionnaire */
      questionnaireid?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceMappedDataResponse, void>({
      path: `/api/studio/formInstance/${id}/mappedData`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a form instance's responses
   *
   * @tags Form
   * @name StudioFormInstanceResponsesDetail
   * @summary Gets a form instance's responses
   * @request GET:/api/studio/formInstance/{id}/responses
   * @secure
   */
  studioFormInstanceResponsesDetail = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/studio/formInstance/${id}/responses`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Handle form instance save of answers to questions
   *
   * @tags Form
   * @name StudioFormInstanceSaveCreate
   * @summary save form instance
   * @request POST:/api/studio/formInstance/{id}/save
   * @secure
   */
  studioFormInstanceSaveCreate = (
    id: string,
    data: FormInstanceSaveCfg,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/studio/formInstance/${id}/save`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create Form
   *
   * @tags Form
   * @name StudioFormsCreate
   * @summary Create Form
   * @request POST:/api/studio/forms
   * @secure
   */
  studioFormsCreate = (data: FormCreateCfg, params: RequestParams = {}) =>
    this.request<FormCreateResponse, void>({
      path: `/api/studio/forms`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Form
   *
   * @tags Form
   * @name StudioFormsDelete
   * @summary Deletes a Form
   * @request DELETE:/api/studio/forms/{id}
   * @secure
   */
  studioFormsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/forms/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Form details
   *
   * @tags Form
   * @name StudioFormsDetail
   * @summary Gets a specific Form details
   * @request GET:/api/studio/forms/{id}
   * @secure
   */
  studioFormsDetail = (
    id: string,
    query?: {
      /** branchid of branch whose children nodes are to be returned */
      branchid?: string;
      /** tildaid of obj whose detailed info needs to be returned */
      objid?: string;
      /** tildaid of protocol */
      protocolid?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<FormDetail, void>({
      path: `/api/studio/forms/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Export prescreener form to GCS
   *
   * @tags Form
   * @name StudioFormsExportCreate
   * @summary Export prescreener form to GCS
   * @request POST:/api/studio/forms/{id}/export
   * @secure
   */
  studioFormsExportCreate = (id: string, params: RequestParams = {}) =>
    this.request<FormDetail, void>({
      path: `/api/studio/forms/${id}/export`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists Forms
   *
   * @tags Form
   * @name StudioFormsList
   * @summary Lists Forms
   * @request GET:/api/studio/forms
   * @secure
   */
  studioFormsList = (
    query: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** type of the Form */
      type: string;
      /** state of the Form */
      state?: string;
      /** tildaid of protocol */
      protocolid?: string;
      /** tildaid of form, repeat this queryparam for multiple forms */
      formid?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<ListFormResponse, void>({
      path: `/api/studio/forms`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Form
   *
   * @tags Form
   * @name StudioFormsPartialUpdate
   * @summary Update Form
   * @request PATCH:/api/studio/forms/{id}
   * @secure
   */
  studioFormsPartialUpdate = (
    id: string,
    data: FormUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/forms/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific form summary
   *
   * @tags Form
   * @name StudioFormsSummaryDetail
   * @summary Gets a specific form summary
   * @request GET:/api/studio/forms/{id}/summary
   * @secure
   */
  studioFormsSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<FormSummary, void>({
      path: `/api/studio/forms/${id}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create Action
   *
   * @tags Action
   * @name StudioGraphActionCreate
   * @summary Create Action
   * @request POST:/api/studio/graph/{id}/action
   * @secure
   */
  studioGraphActionCreate = (
    id: string,
    data: ActionCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/graph/${id}/action`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific Action details
   *
   * @tags ActionV2
   * @name StudioGraphActionDetail
   * @summary Gets a specific Action details
   * @request GET:/api/studio/graph/{id}/action/{id2}
   * @secure
   */
  studioGraphActionDetail = (
    id: string,
    id2: string,
    params: RequestParams = {}
  ) =>
    this.request<ActionResponse, void>({
      path: `/api/studio/graph/${id}/action/${id2}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Action
   *
   * @tags Action
   * @name StudioGraphActionUpdate
   * @summary Update Action
   * @request PUT:/api/studio/graph/{id}/action/{id2}
   * @secure
   */
  studioGraphActionUpdate = (
    id: string,
    id2: string,
    data: ActionCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/graph/${id}/action/${id2}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create Branch
   *
   * @tags Branch
   * @name StudioGraphBranchCreate
   * @summary Create Branch
   * @request POST:/api/studio/graph/{id}/branch
   * @secure
   */
  studioGraphBranchCreate = (
    id: string,
    data: BranchCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/graph/${id}/branch`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Branch
   *
   * @tags Branch
   * @name StudioGraphBranchDelete
   * @summary Deletes a Branch
   * @request DELETE:/api/studio/graph/{id}/branch/{id2}
   * @secure
   */
  studioGraphBranchDelete = (
    id: string,
    id2: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/studio/graph/${id}/branch/${id2}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific branch details
   *
   * @tags BranchV2
   * @name StudioGraphBranchDetail
   * @summary Gets a specific branch details
   * @request GET:/api/studio/graph/{id}/branch/{id2}
   * @secure
   */
  studioGraphBranchDetail = (
    id: string,
    id2: string,
    query?: {
      /** tildaid of the protocol */
      protocolid?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<BranchResponse, void>({
      path: `/api/studio/graph/${id}/branch/${id2}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Branch
   *
   * @tags Branch
   * @name StudioGraphBranchUpdate
   * @summary Update Branch
   * @request PUT:/api/studio/graph/{id}/branch/{id2}
   * @secure
   */
  studioGraphBranchUpdate = (
    id: string,
    id2: string,
    data: BranchCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/graph/${id}/branch/${id2}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of graph nodes
   *
   * @tags Graph
   * @name StudioGraphDetail
   * @summary Returns list of graph nodes
   * @request GET:/api/studio/graph/{id}
   * @secure
   */
  studioGraphDetail = (
    id: string,
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** tildaid of branch */
      branchid?: string;
      /** true branch or false branch for a subgraph */
      branchtrue?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListGraphNodeResponse, void>({
      path: `/api/studio/graph/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description add to/remove from/move actions on a graph node in a flow graph
   *
   * @tags Graph
   * @name StudioGraphNodeActionCreate
   * @summary add to/remove from/move actions on a graph node in a flow graph
   * @request POST:/api/studio/graph/{id}/nodeAction
   * @secure
   */
  studioGraphNodeActionCreate = (
    id: string,
    data: GraphNodeActionCfg,
    params: RequestParams = {}
  ) =>
    this.request<GraphNodeActionResponse, void>({
      path: `/api/studio/graph/${id}/nodeAction`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create Variable
   *
   * @tags Variable
   * @name StudioGraphVariableCreate
   * @summary Create Variable
   * @request POST:/api/studio/graph/{id}/variable
   * @secure
   */
  studioGraphVariableCreate = (
    id: string,
    data: VariableCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/graph/${id}/variable`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Variable
   *
   * @tags Variable
   * @name StudioGraphVariableDelete
   * @summary Deletes a Variable
   * @request DELETE:/api/studio/graph/{id}/variable/{id2}
   * @secure
   */
  studioGraphVariableDelete = (
    id: string,
    id2: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/studio/graph/${id}/variable/${id2}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Lists variables
   *
   * @tags Variable
   * @name StudioGraphVariablesDetail
   * @summary Lists variables
   * @request GET:/api/studio/graph/{id}/variables
   * @secure
   */
  studioGraphVariablesDetail = (
    id: string,
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** tildaid of protocol if in the context of a protocol */
      protocolid?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListVariablesResponse, void>({
      path: `/api/studio/graph/${id}/variables`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create Media
   *
   * @tags Media
   * @name StudioMediasCreate
   * @summary Create Media
   * @request POST:/api/studio/medias
   * @secure
   */
  studioMediasCreate = (data: MediaCreateCfg, params: RequestParams = {}) =>
    this.request<FormCreateResponse, void>({
      path: `/api/studio/medias`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Media
   *
   * @tags Media
   * @name StudioMediasDelete
   * @summary Deletes a Media
   * @request DELETE:/api/studio/medias/{id}
   * @secure
   */
  studioMediasDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/medias/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Media details
   *
   * @tags Media
   * @name StudioMediasDetail
   * @summary Gets a specific Media details
   * @request GET:/api/studio/medias/{id}
   * @secure
   */
  studioMediasDetail = (
    id: string,
    query?: {
      /** branchid of branch whose children nodes are to be returned */
      branchid?: string;
      /** tildaid of obj whose detailed info needs to be returned */
      objid?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<MediaDetail, void>({
      path: `/api/studio/medias/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists Medias
   *
   * @tags Media
   * @name StudioMediasList
   * @summary Lists Medias
   * @request GET:/api/studio/medias
   * @secure
   */
  studioMediasList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** state of the Media */
      state?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListMediaResponse, void>({
      path: `/api/studio/medias`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Media
   *
   * @tags Media
   * @name StudioMediasPartialUpdate
   * @summary Update Media
   * @request PATCH:/api/studio/medias/{id}
   * @secure
   */
  studioMediasPartialUpdate = (
    id: string,
    data: MediaUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/medias/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific Media summary
   *
   * @tags Media
   * @name StudioMediasSummaryDetail
   * @summary Gets a specific Media summary
   * @request GET:/api/studio/medias/{id}/summary
   * @secure
   */
  studioMediasSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<MediaSummary, void>({
      path: `/api/studio/medias/${id}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create a new visit for a given protocol
   *
   * @tags visits
   * @name StudioProtocolsVisitsCreate
   * @summary Create a new visit for a given protocol
   * @request POST:/api/studio/protocols/{id}/visits
   * @secure
   */
  studioProtocolsVisitsCreate = (
    id: string,
    data: VisitCreateCfg,
    params: RequestParams = {}
  ) =>
    this.request<VisitCreateResponse, void>({
      path: `/api/studio/protocols/${id}/visits`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a visit for a given protocol
   *
   * @tags Visit
   * @name StudioProtocolsVisitsDelete
   * @summary Deletes a visit for a given protocol
   * @request DELETE:/api/studio/protocols/{id}/visits/{id2}
   * @secure
   */
  studioProtocolsVisitsDelete = (
    id: string,
    id2: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/studio/protocols/${id}/visits/${id2}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags Visit
   * @name StudioProtocolsVisitsDetail
   * @summary Gets a list of visits of the given protocol graph
   * @request GET:/api/studio/protocols/{id}/visits/
   * @secure
   */
  studioProtocolsVisitsDetail = (
    id: string,
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListProtocolVisitResponse, void>({
      path: `/api/studio/protocols/${id}/visits/`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific visit details
   *
   * @tags Visit
   * @name StudioProtocolsVisitsDetail2
   * @summary Gets a specific visit details
   * @request GET:/api/studio/protocols/{id}/visits/{id2}
   * @originalName studioProtocolsVisitsDetail
   * @duplicate
   * @secure
   */
  studioProtocolsVisitsDetail2 = (
    id: string,
    id2: string,
    query?: {
      /** branchid of branch whose children nodes are to be returned */
      branchid?: string;
      /** tildaid of obj whose detailed info needs to be returned */
      objid?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<VisitDetail, void>({
      path: `/api/studio/protocols/${id}/visits/${id2}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update visit for a given protocol
   *
   * @tags Visit
   * @name StudioProtocolsVisitsPartialUpdate
   * @summary Update visit for a given protocol
   * @request PATCH:/api/studio/protocols/{id}/visits/{id2}
   * @secure
   */
  studioProtocolsVisitsPartialUpdate = (
    id: string,
    id2: string,
    data: VisitUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/protocols/${id}/visits/${id2}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific visit summary
   *
   * @tags Visit
   * @name StudioProtocolsVisitsSummaryDetail
   * @summary Gets a specific visit summary
   * @request GET:/api/studio/protocols/{id}/visits/{id2}/summary
   * @secure
   */
  studioProtocolsVisitsSummaryDetail = (
    id: string,
    id2: string,
    params: RequestParams = {}
  ) =>
    this.request<VisitSummary, void>({
      path: `/api/studio/protocols/${id}/visits/${id2}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create question
   *
   * @tags Question
   * @name StudioQuestionsCreate
   * @summary Create question
   * @request POST:/api/studio/questions
   * @secure
   */
  studioQuestionsCreate = (
    data: QuestionCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<QuestionDetailedResponse, void>({
      path: `/api/studio/questions`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a question
   *
   * @tags Question
   * @name StudioQuestionsDelete
   * @summary Deletes a question
   * @request DELETE:/api/studio/questions/{id}
   * @secure
   */
  studioQuestionsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/questions/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific question details
   *
   * @tags Question
   * @name StudioQuestionsDetail
   * @summary Gets a specific question details
   * @request GET:/api/studio/questions/{id}
   * @secure
   */
  studioQuestionsDetail = (id: string, params: RequestParams = {}) =>
    this.request<QuestionDetailedResponse, void>({
      path: `/api/studio/questions/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists questions
   *
   * @tags Question
   * @name StudioQuestionsList
   * @summary Lists questions
   * @request GET:/api/studio/questions
   * @secure
   */
  studioQuestionsList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** state of the questionnaire */
      state?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListQuestionsResponse, void>({
      path: `/api/studio/questions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update question title
   *
   * @tags Question
   * @name StudioQuestionsPartialUpdate
   * @summary Update question title
   * @request PATCH:/api/studio/questions/{id}
   * @secure
   */
  studioQuestionsPartialUpdate = (
    id: string,
    data: QuestionPatchCfg,
    params: RequestParams = {}
  ) =>
    this.request<QuestionDetailedResponse, void>({
      path: `/api/studio/questions/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create response set for a question
   *
   * @tags ResponseSet
   * @name StudioQuestionsResponseSetsCreate
   * @summary Create response set for a question
   * @request POST:/api/studio/questions/{id}/responseSets
   * @secure
   */
  studioQuestionsResponseSetsCreate = (
    id: string,
    data: ResponseSetInfo,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/questions/${id}/responseSets`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists questions
   *
   * @tags Question
   * @name StudioQuestionsResponseSetsDetail
   * @summary Lists questions
   * @request GET:/api/studio/questions/{id}/responseSets
   * @secure
   */
  studioQuestionsResponseSetsDetail = (
    id: string,
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListResponseSets, void>({
      path: `/api/studio/questions/${id}/responseSets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update question
   *
   * @tags Question
   * @name StudioQuestionsUpdate
   * @summary Update question
   * @request PUT:/api/studio/questions/{id}
   * @secure
   */
  studioQuestionsUpdate = (
    id: string,
    data: QuestionCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<QuestionDetailedResponse, void>({
      path: `/api/studio/questions/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a response set
   *
   * @tags ResponseSet
   * @name StudioResponseSetsDelete
   * @summary Deletes a response set
   * @request DELETE:/api/studio/responseSets/{id}
   * @secure
   */
  studioResponseSetsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/responseSets/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets information about a response set along with its associated question
   *
   * @tags ResponseSet
   * @name StudioResponseSetsDetail
   * @summary Gets information about a response set along with its associated question
   * @request GET:/api/studio/responseSets/{id}
   * @secure
   */
  studioResponseSetsDetail = (id: string, params: RequestParams = {}) =>
    this.request<ResponseSetDetailInfo, void>({
      path: `/api/studio/responseSets/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update response set
   *
   * @tags ResponseSet
   * @name StudioResponseSetsUpdate
   * @summary Update response set for a question
   * @request PUT:/api/studio/responseSets/{id}
   * @secure
   */
  studioResponseSetsUpdate = (
    id: string,
    data: ResponseSetInfo,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/responseSets/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create Snellen Chart
   *
   * @tags Snellen
   * @name StudioSnellenChartsCreate
   * @summary Create Snellen Chart
   * @request POST:/api/studio/snellenCharts
   * @secure
   */
  studioSnellenChartsCreate = (
    data: SnellenChart,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/snellenCharts`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Snellen Chart
   *
   * @tags SnellenChart
   * @name StudioSnellenChartsDelete
   * @summary Deletes a Snellen Chart
   * @request DELETE:/api/studio/snellenCharts/{id}
   * @secure
   */
  studioSnellenChartsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/snellenCharts/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Snellen Chart
   *
   * @tags Snellen
   * @name StudioSnellenChartsDetail
   * @summary Gets a specific Snellen Chart
   * @request GET:/api/studio/snellenCharts/{id}
   * @secure
   */
  studioSnellenChartsDetail = (id: string, params: RequestParams = {}) =>
    this.request<SnellenChartSummary, void>({
      path: `/api/studio/snellenCharts/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists Snellen Charts
   *
   * @tags Snellen
   * @name StudioSnellenChartsList
   * @summary Lists Snellen Charts
   * @request GET:/api/studio/snellenCharts
   * @secure
   */
  studioSnellenChartsList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListSnellenChartsResponse, void>({
      path: `/api/studio/snellenCharts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Snellen Chart
   *
   * @tags Snellen
   * @name StudioSnellenChartsUpdate
   * @summary Update Snellen Chart
   * @request PUT:/api/studio/snellenCharts/{id}
   * @secure
   */
  studioSnellenChartsUpdate = (
    id: string,
    data: SnellenChartCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/snellenCharts/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create statement
   *
   * @tags Statement
   * @name StudioStatementsCreate
   * @summary Create statement
   * @request POST:/api/studio/statements
   * @secure
   */
  studioStatementsCreate = (data: StatementCfg, params: RequestParams = {}) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/statements`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a statement
   *
   * @tags Statement
   * @name StudioStatementsDelete
   * @summary Deletes a statement
   * @request DELETE:/api/studio/statements/{id}
   * @secure
   */
  studioStatementsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/statements/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific statement summary
   *
   * @tags Statement
   * @name StudioStatementsDetail
   * @summary Gets a specific statement summary
   * @request GET:/api/studio/statements/{id}
   * @secure
   */
  studioStatementsDetail = (id: string, params: RequestParams = {}) =>
    this.request<StatementSummary, void>({
      path: `/api/studio/statements/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists statements
   *
   * @tags Statement
   * @name StudioStatementsList
   * @summary Lists statements
   * @request GET:/api/studio/statements
   * @secure
   */
  studioStatementsList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListStatementsResponse, void>({
      path: `/api/studio/statements`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update statement
   *
   * @tags Statement
   * @name StudioStatementsPartialUpdate
   * @summary Update statement
   * @request PATCH:/api/studio/statements/{id}
   * @secure
   */
  studioStatementsPartialUpdate = (
    id: string,
    data: StatementPatchCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/statements/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create Table
   *
   * @tags Table
   * @name StudioTablesCreate
   * @summary Create Table
   * @request POST:/api/studio/tables
   * @secure
   */
  studioTablesCreate = (data: TableCreateCfg, params: RequestParams = {}) =>
    this.request<FormCreateResponse, void>({
      path: `/api/studio/tables`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Table
   *
   * @tags Table
   * @name StudioTablesDelete
   * @summary Deletes a Table
   * @request DELETE:/api/studio/tables/{id}
   * @secure
   */
  studioTablesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/tables/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Table details
   *
   * @tags Table
   * @name StudioTablesDetail
   * @summary Gets a specific Table details
   * @request GET:/api/studio/tables/{id}
   * @secure
   */
  studioTablesDetail = (
    id: string,
    query?: {
      /** branchid of branch whose children nodes are to be returned */
      branchid?: string;
      /** tildaid of obj whose detailed info needs to be returned */
      objid?: string;
      /** tildaid of protocol */
      protocolid?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<TableDetail, void>({
      path: `/api/studio/tables/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists Tables
   *
   * @tags Table
   * @name StudioTablesList
   * @summary Lists Tables
   * @request GET:/api/studio/tables
   * @secure
   */
  studioTablesList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** state of the Table */
      state?: string;
      /** tildaid of protocol */
      protocolid?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListTableResponse, void>({
      path: `/api/studio/tables`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Table
   *
   * @tags Table
   * @name StudioTablesPartialUpdate
   * @summary Update Table
   * @request PATCH:/api/studio/tables/{id}
   * @secure
   */
  studioTablesPartialUpdate = (
    id: string,
    data: TableUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/tables/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific Table summary
   *
   * @tags Table
   * @name StudioTablesSummaryDetail
   * @summary Gets a specific Table summary
   * @request GET:/api/studio/tables/{id}/summary
   * @secure
   */
  studioTablesSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<TableSummary, void>({
      path: `/api/studio/tables/${id}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create task
   *
   * @tags Task
   * @name StudioTasksCreate
   * @summary Create task
   * @request POST:/api/studio/tasks
   * @secure
   */
  studioTasksCreate = (data: TaskCreateUpdateCfg, params: RequestParams = {}) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/tasks`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a task
   *
   * @tags Task
   * @name StudioTasksDelete
   * @summary Deletes a task
   * @request DELETE:/api/studio/tasks/{id}
   * @secure
   */
  studioTasksDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/tasks/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific task summary
   *
   * @tags Task
   * @name StudioTasksDetail
   * @summary Gets a specific task summary
   * @request GET:/api/studio/tasks/{id}
   * @secure
   */
  studioTasksDetail = (id: string, params: RequestParams = {}) =>
    this.request<TaskSummaryInfo, void>({
      path: `/api/studio/tasks/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists tasks
   *
   * @tags Task
   * @name StudioTasksList
   * @summary Lists tasks
   * @request GET:/api/studio/tasks
   * @secure
   */
  studioTasksList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListTasksResponse, void>({
      path: `/api/studio/tasks`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Patch task
   *
   * @tags Task
   * @name StudioTasksPartialUpdate
   * @summary Patch task
   * @request PATCH:/api/studio/tasks/{id}
   * @secure
   */
  studioTasksPartialUpdate = (
    id: string,
    data: TaskPatchCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/tasks/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update task
   *
   * @tags Task
   * @name StudioTasksUpdate
   * @summary Update task
   * @request PUT:/api/studio/tasks/{id}
   * @secure
   */
  studioTasksUpdate = (
    id: string,
    data: TaskCreateUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/tasks/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create todo
   *
   * @tags Todo
   * @name StudioTodosCreate
   * @summary Create todo
   * @request POST:/api/studio/todos
   * @secure
   */
  studioTodosCreate = (data: TodoCreateCfg, params: RequestParams = {}) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/todos`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a todo
   *
   * @tags Todo
   * @name StudioTodosDelete
   * @summary Deletes a todo
   * @request DELETE:/api/studio/todos/{id}
   * @secure
   */
  studioTodosDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/todos/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific todo summary
   *
   * @tags Todo
   * @name StudioTodosDetail
   * @summary Gets a specific todo summary
   * @request GET:/api/studio/todos/{id}
   * @secure
   */
  studioTodosDetail = (id: string, params: RequestParams = {}) =>
    this.request<TodoSummaryInfo, void>({
      path: `/api/studio/todos/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists todos
   *
   * @tags Todo
   * @name StudioTodosList
   * @summary Lists todos
   * @request GET:/api/studio/todos
   * @secure
   */
  studioTodosList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListTodosResponse, void>({
      path: `/api/studio/todos`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update todo
   *
   * @tags Todo
   * @name StudioTodosPartialUpdate
   * @summary Update todo
   * @request PATCH:/api/studio/todos/{id}
   * @secure
   */
  studioTodosPartialUpdate = (
    id: string,
    data: TodoUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/todos/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create Training
   *
   * @tags Training
   * @name StudioTrainingsCreate
   * @summary Create Training
   * @request POST:/api/studio/trainings
   * @secure
   */
  studioTrainingsCreate = (
    data: TrainingCreateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/trainings`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Training
   *
   * @tags Training
   * @name StudioTrainingsDelete
   * @summary Deletes a Training
   * @request DELETE:/api/studio/trainings/{id}
   * @secure
   */
  studioTrainingsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/trainings/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Training details
   *
   * @tags Training
   * @name StudioTrainingsDetail
   * @summary Gets a specific Training details
   * @request GET:/api/studio/trainings/{id}
   * @secure
   */
  studioTrainingsDetail = (id: string, params: RequestParams = {}) =>
    this.request<TrainingDetail, void>({
      path: `/api/studio/trainings/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists trainings
   *
   * @tags Training
   * @name StudioTrainingsList
   * @summary Lists trainings
   * @request GET:/api/studio/trainings
   * @secure
   */
  studioTrainingsList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** state of the Training */
      state?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListTrainingResponse, void>({
      path: `/api/studio/trainings`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Training
   *
   * @tags Training
   * @name StudioTrainingsPartialUpdate
   * @summary Update Training
   * @request PATCH:/api/studio/trainings/{id}
   * @secure
   */
  studioTrainingsPartialUpdate = (
    id: string,
    data: TrainingUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/trainings/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific Training summary
   *
   * @tags Training
   * @name StudioTrainingsSummaryDetail
   * @summary Gets a specific Training summary
   * @request GET:/api/studio/trainings/{id}/summary
   * @secure
   */
  studioTrainingsSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<TrainingSummary, void>({
      path: `/api/studio/trainings/${id}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create Trigger
   *
   * @tags Trigger
   * @name StudioTriggersCreate
   * @summary Create Trigger
   * @request POST:/api/studio/triggers
   * @secure
   */
  studioTriggersCreate = (data: TriggerCreateCfg, params: RequestParams = {}) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/triggers`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Trigger
   *
   * @tags Trigger
   * @name StudioTriggersDelete
   * @summary Deletes a Trigger
   * @request DELETE:/api/studio/triggers/{id}
   * @secure
   */
  studioTriggersDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/triggers/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Trigger details
   *
   * @tags Trigger
   * @name StudioTriggersDetail
   * @summary Gets a specific Trigger details
   * @request GET:/api/studio/triggers/{id}
   * @secure
   */
  studioTriggersDetail = (id: string, params: RequestParams = {}) =>
    this.request<TriggerDetail, void>({
      path: `/api/studio/triggers/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists triggers
   *
   * @tags Trigger
   * @name StudioTriggersList
   * @summary Lists triggers
   * @request GET:/api/studio/triggers
   * @secure
   */
  studioTriggersList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** state of the Trigger */
      state?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListTriggerResponse, void>({
      path: `/api/studio/triggers`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Trigger
   *
   * @tags Trigger
   * @name StudioTriggersPartialUpdate
   * @summary Update Trigger
   * @request PATCH:/api/studio/triggers/{id}
   * @secure
   */
  studioTriggersPartialUpdate = (
    id: string,
    data: TriggerUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/triggers/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific Trigger summary
   *
   * @tags Trigger
   * @name StudioTriggersSummaryDetail
   * @summary Gets a specific Trigger summary
   * @request GET:/api/studio/triggers/{id}/summary
   * @secure
   */
  studioTriggersSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<TriggerSummary, void>({
      path: `/api/studio/triggers/${id}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create Workflow
   *
   * @tags Workflow
   * @name StudioWorkflowsCreate
   * @summary Create Workflow
   * @request POST:/api/studio/workflows
   * @secure
   */
  studioWorkflowsCreate = (
    data: WorkflowCreateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/workflows`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a Workflow
   *
   * @tags Workflow
   * @name StudioWorkflowsDelete
   * @summary Deletes a Workflow
   * @request DELETE:/api/studio/workflows/{id}
   * @secure
   */
  studioWorkflowsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studio/workflows/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets a specific Workflow details
   *
   * @tags Workflow
   * @name StudioWorkflowsDetail
   * @summary Gets a specific Workflow details
   * @request GET:/api/studio/workflows/{id}
   * @secure
   */
  studioWorkflowsDetail = (
    id: string,
    query?: {
      /** branchid of branch whose children nodes are to be returned */
      branchid?: string;
      /** tildaid of obj whose detailed info needs to be returned */
      objid?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<WorkflowDetail, void>({
      path: `/api/studio/workflows/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists workflows
   *
   * @tags Workflow
   * @name StudioWorkflowsList
   * @summary Lists workflows
   * @request GET:/api/studio/workflows
   * @secure
   */
  studioWorkflowsList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** key to sort on */
      sortkey?: string;
      /** for sorting in descending order */
      desc?: boolean;
      /** search key to search on */
      searchkey?: string;
      /** search string to match on */
      searchstr?: string;
      /** state of the Workflow */
      state?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListWorkflowResponse, void>({
      path: `/api/studio/workflows`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Workflow
   *
   * @tags Workflow
   * @name StudioWorkflowsPartialUpdate
   * @summary Update Workflow
   * @request PATCH:/api/studio/workflows/{id}
   * @secure
   */
  studioWorkflowsPartialUpdate = (
    id: string,
    data: WorkflowUpdateCfg,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/workflows/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a specific Workflow summary
   *
   * @tags Workflow
   * @name StudioWorkflowsSummaryDetail
   * @summary Gets a specific Workflow summary
   * @request GET:/api/studio/workflows/{id}/summary
   * @secure
   */
  studioWorkflowsSummaryDetail = (id: string, params: RequestParams = {}) =>
    this.request<WorkflowSummary, void>({
      path: `/api/studio/workflows/${id}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a relation between a Workflow and a Trigger
   *
   * @tags Workflow
   * @name StudioWorkflowsTriggersCreate
   * @summary Add a Trigger to a Workflow
   * @request POST:/api/studio/workflows/{id}/triggers/{id2}
   * @secure
   */
  studioWorkflowsTriggersCreate = (
    id: string,
    id2: string,
    params: RequestParams = {}
  ) =>
    this.request<TildaIdResponse, void>({
      path: `/api/studio/workflows/${id}/triggers/${id2}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes the relation between a Workflow and a Trigger
   *
   * @tags Workflow
   * @name StudioWorkflowsTriggersDelete
   * @summary Remove a Trigger from a Workflow
   * @request DELETE:/api/studio/workflows/{id}/triggers/{id2}
   * @secure
   */
  studioWorkflowsTriggersDelete = (
    id: string,
    id2: string,
    params: RequestParams = {}
  ) =>
    this.request<string, void>({
      path: `/api/studio/workflows/${id}/triggers/${id2}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists all triggers that are connected to the specified workflow
   *
   * @tags Workflow
   * @name StudioWorkflowsTriggersDetail
   * @summary Lists triggers associated with a workflow
   * @request GET:/api/studio/workflows/{id}/triggers
   * @secure
   */
  studioWorkflowsTriggersDetail = (id: string, params: RequestParams = {}) =>
    this.request<ListTriggerResponse, void>({
      path: `/api/studio/workflows/${id}/triggers`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Reverts Form Instance context
   *
   * @tags Form
   * @name PublicStudioFormInstanceBackCreate
   * @summary Reverts Form Instance context (without auth)
   * @request POST:/api/public/studio/formInstance/{id}/back
   * @secure
   */
  publicStudioFormInstanceBackCreate = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/public/studio/formInstance/${id}/back`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create Form Instance without auth
   *
   * @tags Form
   * @name PublicStudioFormInstanceCreate
   * @summary Create Form Instance without auth
   * @request POST:/api/public/studio/formInstance
   * @secure
   */
  publicStudioFormInstanceCreate = (
    data: FormInstanceCfg,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/public/studio/formInstance`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets a form instance's eligibility flag
   *
   * @tags Form
   * @name PublicStudioFormInstanceEligibilityDetail
   * @summary Gets a form instance's eligibility flag (without auth)
   * @request GET:/api/public/studio/formInstance/{id}/eligibility
   * @secure
   */
  publicStudioFormInstanceEligibilityDetail = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceEligibilityResponse, void>({
      path: `/api/public/studio/formInstance/${id}/eligibility`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Handle form instance save of answers to questions
   *
   * @tags Form
   * @name PublicStudioFormInstanceSaveCreate
   * @summary save form instance (without auth)
   * @request POST:/api/public/studio/formInstance/{id}/save
   * @secure
   */
  publicStudioFormInstanceSaveCreate = (
    id: string,
    data: FormInstanceSaveCfg,
    params: RequestParams = {}
  ) =>
    this.request<FormInstanceResponse, void>({
      path: `/api/public/studio/formInstance/${id}/save`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
}
