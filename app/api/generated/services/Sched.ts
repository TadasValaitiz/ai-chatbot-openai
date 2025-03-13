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
  ApptRequest,
  AvailableResourcesReq,
  AvailableResourcesResp,
  CalendarPrefFilter,
  CalendarPrefFilterReq,
  CalendarPrefFilterResp,
  CalendarRequest,
  CalendarResp,
  HTTPError,
  ManualVisitApptRequest,
  OOORequest,
  OutOfOffice,
  ResourceAppointment,
  SchedRoleInfoResp,
  SimpleApptRequest,
  SiteCalendarResp,
  SubjectAppointment
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Sched<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Create or Update Calendar Preferences Filter
   *
   * @tags Calendar
   * @name V1SchedCalendarPrefFilterCreate
   * @summary Create or Update Calendar Preferences Filter
   * @request POST:/api/v1/sched/CalendarPrefFilter
   * @secure
   */
  v1SchedCalendarPrefFilterCreate = (
    data: CalendarPrefFilter,
    params: RequestParams = {}
  ) =>
    this.request<CalendarPrefFilterResp, HTTPError>({
      path: `/api/v1/sched/CalendarPrefFilter`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Fetch Calendar Preferences Filter
   *
   * @tags Calendar
   * @name V1SchedCalendarPrefFilterList
   * @summary Fetch Calendar Preferences Filter
   * @request GET:/api/v1/sched/CalendarPrefFilter
   * @secure
   */
  v1SchedCalendarPrefFilterList = (id: string, params: RequestParams = {}) =>
    this.request<CalendarPrefFilterResp, HTTPError>({
      path: `/api/v1/sched/CalendarPrefFilter`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Calendar
   *
   * @tags Calendar
   * @name V1SchedCalenderCreate
   * @summary Calendar
   * @request POST:/api/v1/sched/Calender
   * @secure
   */
  v1SchedCalenderCreate = (data: CalendarRequest, params: RequestParams = {}) =>
    this.request<CalendarResp, HTTPError>({
      path: `/api/v1/sched/Calender`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Generate Schedules for Subject for a Visit
   *
   * @tags VisitAppointments
   * @name V1SchedGenerateSchedulesCreate
   * @summary Generate Schedules
   * @request POST:/api/v1/sched/GenerateSchedules
   * @secure
   */
  v1SchedGenerateSchedulesCreate = (
    data: ApptRequest,
    params: RequestParams = {}
  ) =>
    this.request<SubjectAppointment, HTTPError>({
      path: `/api/v1/sched/GenerateSchedules`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create Manual Appointment for Subject
   *
   * @tags VisitAppointments
   * @name V1SchedManualVisitAppointmentsCreate
   * @summary Create Manual Visit Appointment
   * @request POST:/api/v1/sched/ManualVisitAppointments
   * @secure
   */
  v1SchedManualVisitAppointmentsCreate = (
    data: ManualVisitApptRequest,
    params: RequestParams = {}
  ) =>
    this.request<SubjectAppointment, HTTPError>({
      path: `/api/v1/sched/ManualVisitAppointments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Marks a resource (staff or site) as out of office based on the provided details.
   *
   * @tags Calendar
   * @name V1SchedOutOfOfficeRequestCreate
   * @summary Set an Out-of-Office status
   * @request POST:/api/v1/sched/OutOfOfficeRequest
   * @secure
   */
  v1SchedOutOfOfficeRequestCreate = (
    data: OOORequest,
    params: RequestParams = {}
  ) =>
    this.request<OutOfOffice, HTTPError>({
      path: `/api/v1/sched/OutOfOfficeRequest`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes an Out-of-Office event based on the specified ID.
   *
   * @tags Calendar
   * @name V1SchedOutOfOfficeRequestDelete
   * @summary Delete an Out-of-Office event
   * @request DELETE:/api/v1/sched/OutOfOfficeRequest/{id}
   * @secure
   */
  v1SchedOutOfOfficeRequestDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, HTTPError>({
      path: `/api/v1/sched/OutOfOfficeRequest/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Update ParticiPantVisit Visit Appointment for Subject
   *
   * @tags VisitAppointments
   * @name V1SchedParticipantVisitUpdateVisitAppointmentUpdate
   * @summary Update ParticiPantVisit Visit Appointment
   * @request PUT:/api/v1/sched/ParticipantVisit/{id}/UpdateVisitAppointment
   * @secure
   */
  v1SchedParticipantVisitUpdateVisitAppointmentUpdate = (
    id: string,
    data: SubjectAppointment,
    params: RequestParams = {}
  ) =>
    this.request<void, HTTPError>({
      path: `/api/v1/sched/ParticipantVisit/${id}/UpdateVisitAppointment`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Retrieves the details of a GetResourceAppointment appointment based on appointment ID and optional time zone parameter.
   *
   * @tags Calendar
   * @name V1SchedResourceAppointmentsDetail
   * @summary Retrieve a ResourceAppointment appointment
   * @request GET:/api/v1/sched/ResourceAppointments/{id}
   * @secure
   */
  v1SchedResourceAppointmentsDetail = (
    id: string,
    query?: {
      /** Time Zone */
      timeZone?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SubjectAppointment, HTTPError>({
      path: `/api/v1/sched/ResourceAppointments/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get Visit Appointments using Preferences Filter in Request or saved filter , filter in the request has higher preference
   *
   * @tags Calendar
   * @name V1SchedSubjectVisitAppointmentsCreate
   * @summary Get Visit Appointments
   * @request POST:/api/v1/sched/SubjectVisitAppointments
   * @secure
   */
  v1SchedSubjectVisitAppointmentsCreate = (
    query: {
      /** granularity */
      granularity: string;
      /** from */
      from: string;
    },
    data: CalendarPrefFilterReq,
    params: RequestParams = {}
  ) =>
    this.request<SiteCalendarResp, HTTPError>({
      path: `/api/v1/sched/SubjectVisitAppointments`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a new user appointment based on the provided request details.
   *
   * @tags Calendar
   * @name V1SchedUserAppointmentsCreate
   * @summary Create user appointments
   * @request POST:/api/v1/sched/UserAppointments
   * @secure
   */
  v1SchedUserAppointmentsCreate = (
    data: SimpleApptRequest,
    params: RequestParams = {}
  ) =>
    this.request<ResourceAppointment, HTTPError>({
      path: `/api/v1/sched/UserAppointments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes an existing user appointment based on the specified ID.
   *
   * @tags Calendar
   * @name V1SchedUserAppointmentsDelete
   * @summary Delete a user appointment
   * @request DELETE:/api/v1/sched/UserAppointments/{id}
   * @secure
   */
  v1SchedUserAppointmentsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, HTTPError>({
      path: `/api/v1/sched/UserAppointments/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Create Visit Appointment for Subject
   *
   * @tags VisitAppointments
   * @name V1SchedVisitAppointmentsCreate
   * @summary Create Visit Appointment
   * @request POST:/api/v1/sched/VisitAppointments
   * @secure
   */
  v1SchedVisitAppointmentsCreate = (
    data: SubjectAppointment,
    params: RequestParams = {}
  ) =>
    this.request<SubjectAppointment, HTTPError>({
      path: `/api/v1/sched/VisitAppointments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete Visit Appointment for Subject
   *
   * @tags VisitAppointments
   * @name V1SchedVisitAppointmentsDelete
   * @summary Delete Visit Appointment
   * @request DELETE:/api/v1/sched/VisitAppointments/{id}
   * @secure
   */
  v1SchedVisitAppointmentsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, HTTPError>({
      path: `/api/v1/sched/VisitAppointments/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Retrieves the details of a visit appointment based on appointment ID and optional time zone parameter.
   *
   * @tags Calendar
   * @name V1SchedVisitAppointmentsDetail
   * @summary Retrieve a visit appointment
   * @request GET:/api/v1/sched/VisitAppointments/{id}
   * @secure
   */
  v1SchedVisitAppointmentsDetail = (
    id: string,
    query?: {
      /** Time Zone */
      timeZone?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SubjectAppointment, HTTPError>({
      path: `/api/v1/sched/VisitAppointments/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Visit Appointment for Subject
   *
   * @tags VisitAppointments
   * @name V1SchedVisitAppointmentsUpdate
   * @summary Update Visit Appointment
   * @request PUT:/api/v1/sched/VisitAppointments/{id}
   * @secure
   */
  v1SchedVisitAppointmentsUpdate = (
    id: string,
    data: SubjectAppointment,
    params: RequestParams = {}
  ) =>
    this.request<void, HTTPError>({
      path: `/api/v1/sched/VisitAppointments/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Visit Scheduling Role Resource Availability Info godoc
   *
   * @tags VisitAppointments
   * @name V1SchedVisitApptResourceAvailabilityInfoCreate
   * @summary Visit Scheduling Role Resource Availability Info
   * @request POST:/api/v1/sched/VisitApptResourceAvailabilityInfo
   * @secure
   */
  v1SchedVisitApptResourceAvailabilityInfoCreate = (
    data: AvailableResourcesReq,
    params: RequestParams = {}
  ) =>
    this.request<AvailableResourcesResp, HTTPError>({
      path: `/api/v1/sched/VisitApptResourceAvailabilityInfo`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Visit Scheduling Role Info
   *
   * @tags VisitAppointments
   * @name V1SchedVisitCarePlanSchedRoleInfoDetail
   * @summary Visit Scheduling Role Info
   * @request GET:/api/v1/sched/Visit/{id}/CarePlan/{cpid}/SchedRoleInfo
   * @secure
   */
  v1SchedVisitCarePlanSchedRoleInfoDetail = (
    id: string,
    cpid: string,
    params: RequestParams = {}
  ) =>
    this.request<SchedRoleInfoResp, HTTPError>({
      path: `/api/v1/sched/Visit/${id}/CarePlan/${cpid}/SchedRoleInfo`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
}
