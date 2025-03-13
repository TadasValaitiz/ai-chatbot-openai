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
  AccessToken,
  ListMessagesResponse,
  ListPatientEngagementResponse,
  Message,
  MessageInput,
  MessagesCountResp,
  MsgAppSearchResponse,
  NoteInput,
  NotiflibShortUrlRequest,
  NotiflibShortUrlResponse,
  OutputChanged,
  OutputTask,
  PatientEngagementProfile,
  TaskPayload,
  VoiceCall
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Notif<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get twilio access token
   *
   * @tags Messages
   * @name V1NotifAccesstokenList
   * @summary Get twilio access token
   * @request GET:/api/v1/notif/accesstoken
   */
  v1NotifAccesstokenList = (params: RequestParams = {}) =>
    this.request<AccessToken, void>({
      path: `/api/v1/notif/accesstoken`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Get particular VoiceCall
   *
   * @tags Messages
   * @name V1NotifCallDetailsDetail
   * @summary Get particular VoiceCall
   * @request GET:/api/v1/notif/callDetails/{id}
   */
  v1NotifCallDetailsDetail = (id: string, params: RequestParams = {}) =>
    this.request<VoiceCall, void>({
      path: `/api/v1/notif/callDetails/${id}`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description List of Matching Patient's Engagements or Chat Messages based on the provided search string
   *
   * @tags Messages
   * @name V1NotifMessengerAppSearchList
   * @summary Matching Patient's Engagements or Chat Messages
   * @request GET:/api/v1/notif/messengerAppSearch
   */
  v1NotifMessengerAppSearchList = (
    query?: {
      /** search string acorss patientEngagementProfiles and chat messages */
      searchStr?: string;
      /** Number of items to skip */
      skip?: number;
      /** Number of items per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<MsgAppSearchResponse, void>({
      path: `/api/v1/notif/messengerAppSearch`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Getting Messenger Count
   *
   * @tags Messages
   * @name V1NotifMessengerCountList
   * @summary Getting  Messenger Count
   * @request GET:/api/v1/notif/messengerCount
   */
  v1NotifMessengerCountList = (params: RequestParams = {}) =>
    this.request<MessagesCountResp, void>({
      path: `/api/v1/notif/messengerCount`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Has Patient Engagement Profiles Changed since given timestamp
   *
   * @tags Messages
   * @name V1NotifPatientEngagementProfilesChangedList
   * @summary Has Patient Engagement Profiles Changed since given timestamp
   * @request GET:/api/v1/notif/patientEngagementProfilesChanged
   */
  v1NotifPatientEngagementProfilesChangedList = (
    query: {
      /** last Retrieved Time in RFC3339 format */
      lastRetrievedTime: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputChanged, void>({
      path: `/api/v1/notif/patientEngagementProfilesChanged`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Get particular Patient's Engagement
   *
   * @tags Messages
   * @name V1NotifPatientEngagementProfilesDetail
   * @summary Get particular Patient's Engagement
   * @request GET:/api/v1/notif/patientEngagementProfiles/{id}
   */
  v1NotifPatientEngagementProfilesDetail = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<PatientEngagementProfile, void>({
      path: `/api/v1/notif/patientEngagementProfiles/${id}`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description List of Patient's Engagements based on the provided filter parameters
   *
   * @tags Messages
   * @name V1NotifPatientEngagementProfilesList
   * @summary List of Patient's Engagements
   * @request GET:/api/v1/notif/patientEngagementProfiles
   */
  v1NotifPatientEngagementProfilesList = (
    query?: {
      /** search string acorss patientEngagementProfiles */
      searchStr?: string;
      /** Comma-separated list of site ID's */
      sites?: string;
      /** Number of items to skip */
      skip?: number;
      /** Number of items per page */
      limit?: number;
      /** possible values for status are open,resolved,all */
      status?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListPatientEngagementResponse, void>({
      path: `/api/v1/notif/patientEngagementProfiles`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Mark a Patient's Engagement as Complete
   *
   * @tags Messages
   * @name V1NotifPatientEngagementResolvedCreate
   * @request POST:/api/v1/notif/patient/{id}/engagementResolved
   */
  v1NotifPatientEngagementResolvedCreate = (
    id: string,
    data?: NoteInput,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/notif/patient/${id}/engagementResolved`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Has Patient's Messsages Changed since given timestamp
   *
   * @tags Messages
   * @name V1NotifPatientMessagesChangedDetail
   * @summary Has Patient's Messsages Changed since given timestamp
   * @request GET:/api/v1/notif/patient/{id}/messagesChanged
   */
  v1NotifPatientMessagesChangedDetail = (
    id: string,
    query: {
      /** last Retrieved Time in RFC3339 format */
      lastRetrievedTime: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputChanged, void>({
      path: `/api/v1/notif/patient/${id}/messagesChanged`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Create a message in the system
   *
   * @tags Messages
   * @name V1NotifPatientMessagesCreate
   * @summary Create a message
   * @request POST:/api/v1/notif/patient/{id}/messages
   */
  v1NotifPatientMessagesCreate = (
    id: string,
    data: MessageInput,
    params: RequestParams = {}
  ) =>
    this.request<Message, void>({
      path: `/api/v1/notif/patient/${id}/messages`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List of Patient's Messsages
   *
   * @tags Messages
   * @name V1NotifPatientMessagesDetail
   * @summary List of Patient's Messsages
   * @request GET:/api/v1/notif/patient/{id}/messages
   */
  v1NotifPatientMessagesDetail = (
    id: string,
    query?: {
      /** Number of items to skip */
      skip?: number;
      /** Number of items per page */
      limit?: number;
      /** Should return last page */
      lastPage?: boolean;
      /** list info for this msgId */
      msgId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListMessagesResponse, void>({
      path: `/api/v1/notif/patient/${id}/messages`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Mark a messages as Read
   *
   * @tags Messages
   * @name V1NotifPatientMessagesReadCreate
   * @summary Mark a messages as Read
   * @request POST:/api/v1/notif/patient/{id}/messages/read
   */
  v1NotifPatientMessagesReadCreate = (
    id: string,
    data: string[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/notif/patient/${id}/messages/read`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Start Recording
   *
   * @tags Messages
   * @name V1NotifPatientRecordCreate
   * @summary Start Recording
   * @request POST:/api/v1/notif/patient/{id}/record
   */
  v1NotifPatientRecordCreate = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/notif/patient/${id}/record`,
      method: 'POST',
      ...params
    });
  /**
   * @description Get particular Patient's Scheduling Link info
   *
   * @tags Messages
   * @name V1NotifPatientSchedulingLinkInfoDetail
   * @request GET:/api/v1/notif/patient/{id}/schedulingLinkInfo
   */
  v1NotifPatientSchedulingLinkInfoDetail = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<VoiceCall, void>({
      path: `/api/v1/notif/patient/${id}/schedulingLinkInfo`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description stop Recording
   *
   * @tags Messages
   * @name V1NotifPatientStopRecordingCreate
   * @summary stop Recording
   * @request POST:/api/v1/notif/patient/{id}/stopRecording
   */
  v1NotifPatientStopRecordingCreate = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/notif/patient/${id}/stopRecording`,
      method: 'POST',
      ...params
    });
  /**
   * @description Create a Patient related Task
   *
   * @tags Messages
   * @name V1NotifPatientTasksCreate
   * @summary Create a Patient related Task
   * @request POST:/api/v1/notif/patient/{id}/tasks
   */
  v1NotifPatientTasksCreate = (
    id: string,
    data: TaskPayload,
    query?: {
      /** Source Message ID */
      srcMsgId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputTask, void>({
      path: `/api/v1/notif/patient/${id}/tasks`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Generate a short URL from a long URL
   *
   * @tags Messages
   * @name V1NotifShorturlCreate
   * @summary Generate Short URL
   * @request POST:/api/v1/notif/shorturl
   */
  v1NotifShorturlCreate = (
    data: NotiflibShortUrlRequest,
    params: RequestParams = {}
  ) =>
    this.request<NotiflibShortUrlResponse, void>({
      path: `/api/v1/notif/shorturl`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Redirect Short URL
   *
   * @tags Messages
   * @name V1NotifSList
   * @summary Redirect Short URL
   * @request GET:/api/v1/notif/s
   */
  v1NotifSList = (params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/api/v1/notif/s`,
      method: 'GET',
      ...params
    });
  /**
   * @description Lists tasks by taskId
   *
   * @tags Task
   * @name V1NotifTaskDetail
   * @summary Lists tasks
   * @request GET:/api/v1/notif/task/{taskId}
   * @secure
   */
  v1NotifTaskDetail = (taskId: string, params: RequestParams = {}) =>
    this.request<OutputTask, void>({
      path: `/api/v1/notif/task/${taskId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates tasks by taskId
   *
   * @tags Task
   * @name V1NotifTaskUpdate
   * @summary Updates tasks
   * @request PUT:/api/v1/notif/task/{taskId}
   * @secure
   */
  v1NotifTaskUpdate = (
    taskId: string,
    query: {
      /** state */
      state: string;
      /** remove-task-from-inbox */
      'remove-task-from-inbox'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/notif/task/${taskId}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description register for UI events web socket connection
   *
   * @tags Events
   * @name V1NotifUieventsList
   * @summary register for UI events web socket connection
   * @request GET:/api/v1/notif/uievents
   */
  v1NotifUieventsList = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/notif/uievents`,
      method: 'GET',
      ...params
    });
}
