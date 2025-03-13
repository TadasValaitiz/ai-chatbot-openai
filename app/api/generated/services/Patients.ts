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
  PatientAllergyInfo,
  PatientAnalyteInfo,
  PatientAppointmentInfo,
  PatientAuditLogResponse,
  PatientCfg,
  PatientFullProfile,
  PatientHospitalizationInfo,
  PatientLeadResponse,
  PatientMedicalConditionInfo,
  PatientMedicationInfo,
  PatientPatchCfg,
  PatientPhiResponse,
  PatientProcedureInfo,
  PatientProfile,
  PatientProviderCfg,
  PatientProviderSummaryResponse,
  PatientStudyResponse,
  PatientSummaryResponse
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Patients<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns allergies  info of a patient
   *
   * @tags Patientsvc
   * @name PatientsAllergiesDetail
   * @summary Gets allergies info of a patient
   * @request GET:/api/patients/{tildaid}/allergies
   * @secure
   */
  patientsAllergiesDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientAllergyInfo, void>({
      path: `/api/patients/${tildaid}/allergies`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns appointments info of a patient
   *
   * @tags Patientsvc
   * @name PatientsAppointmentsDetail
   * @summary Gets appointments info of a patient
   * @request GET:/api/patients/{tildaid}/appointments
   * @secure
   */
  patientsAppointmentsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientAppointmentInfo, void>({
      path: `/api/patients/${tildaid}/appointments`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns audit logs of a patient
   *
   * @tags Patientsvc
   * @name PatientsAuditlogsDetail
   * @summary Gets audit logs of a patient
   * @request GET:/api/patients/{tildaid}/auditlogs
   * @secure
   */
  patientsAuditlogsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientAuditLogResponse, void>({
      path: `/api/patients/${tildaid}/auditlogs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a new patient; Response object looks like this { "tildaid": "%s" }
   *
   * @tags Patientsvc
   * @name PatientsCreate
   * @summary Creates a new patient
   * @request POST:/api/patients
   * @secure
   */
  patientsCreate = (data: PatientCfg, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/patients`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns profile info of a patient
   *
   * @tags Patientsvc
   * @name PatientsDetail
   * @summary Gets profile info of a patient
   * @request GET:/api/patients/{tildaid}
   * @secure
   */
  patientsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientProfile, void>({
      path: `/api/patients/${tildaid}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns hospitalizations  info of a patient
   *
   * @tags Patientsvc
   * @name PatientsHospitalizationsDetail
   * @summary Gets hospitalizations info of a patient
   * @request GET:/api/patients/{tildaid}/hospitalizations
   * @secure
   */
  patientsHospitalizationsDetail = (
    tildaid: string,
    params: RequestParams = {}
  ) =>
    this.request<PatientHospitalizationInfo, void>({
      path: `/api/patients/${tildaid}/hospitalizations`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns lab reports info of a patient
   *
   * @tags Patientsvc
   * @name PatientsLabreportsDetail
   * @summary Gets lab reports info of a patient
   * @request GET:/api/patients/{tildaid}/labreports
   * @secure
   */
  patientsLabreportsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientAnalyteInfo, void>({
      path: `/api/patients/${tildaid}/labreports`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns lead info patient is a lead for
   *
   * @tags Patientsvc
   * @name PatientsLeadsDetail
   * @summary Gets summary of lead information patient is a lead for
   * @request GET:/api/patients/{tildaid}/leads
   * @secure
   */
  patientsLeadsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientLeadResponse, void>({
      path: `/api/patients/${tildaid}/leads`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of patients This API returns a very minimal amount of information for each patient such as: tildaid of the patient - a unique identifier in the UUID format for the patient object gender - currently, this is the same as the sex of the patient age    - computed from the date of birth field in the corresponding phi object for the patient ufid   - a 9 digit user friendly identifier This API is not useful to get a list of patients along with their personal information. To get a list of patients including their personal information, /api/patientPhis should be used.
   *
   * @tags Patientsvc
   * @name PatientsList
   * @summary Gets list of patients
   * @request GET:/api/patients
   * @secure
   */
  patientsList = (
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
    this.request<PatientSummaryResponse, void>({
      path: `/api/patients`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns medical conditions info of a patient
   *
   * @tags Patientsvc
   * @name PatientsMedicalConditionsDetail
   * @summary Gets medical conditions info of a patient
   * @request GET:/api/patients/{tildaid}/medicalConditions
   * @secure
   */
  patientsMedicalConditionsDetail = (
    tildaid: string,
    params: RequestParams = {}
  ) =>
    this.request<PatientMedicalConditionInfo, void>({
      path: `/api/patients/${tildaid}/medicalConditions`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns medications info of a patient
   *
   * @tags Patientsvc
   * @name PatientsMedicationsDetail
   * @summary Gets medications info of a patient
   * @request GET:/api/patients/{tildaid}/medications
   * @secure
   */
  patientsMedicationsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientMedicationInfo, void>({
      path: `/api/patients/${tildaid}/medications`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates status of an existing patient
   *
   * @tags Patientsvc
   * @name PatientsPartialUpdate
   * @summary Updates status of an existing patient
   * @request PATCH:/api/patients/{tildaid}
   * @secure
   */
  patientsPartialUpdate = (
    tildaid: string,
    data: PatientPatchCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/patients/${tildaid}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns procedures done info of a patient
   *
   * @tags Patientsvc
   * @name PatientsProceduresDetail
   * @summary Gets procedures done info of a patient
   * @request GET:/api/patients/{tildaid}/procedures
   * @secure
   */
  patientsProceduresDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientProcedureInfo, void>({
      path: `/api/patients/${tildaid}/procedures`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns Full profile info of a patient
   *
   * @tags Patientsvc
   * @name PatientsProfileDetail
   * @summary Gets Full profile info of a patient
   * @request GET:/api/patients/{tildaid}/profile
   * @secure
   */
  patientsProfileDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientFullProfile, void>({
      path: `/api/patients/${tildaid}/profile`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a new patient provider fo a patient; Response object looks like this { "tildaid": "%s" }
   *
   * @tags Patientsvc
   * @name PatientsProvidersCreate
   * @summary Creates a new patient provider for a patient
   * @request POST:/api/patients/{tildaid}/providers
   * @secure
   */
  patientsProvidersCreate = (
    tildaid: string,
    data: PatientProviderCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/patients/${tildaid}/providers`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Deletes a patient provider
   *
   * @tags Patientsvc
   * @name PatientsProvidersDelete
   * @summary Deletes a patient provider
   * @request DELETE:/api/patients/providers/{tildaid}
   * @secure
   */
  patientsProvidersDelete = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/patients/providers/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Returns list of patient providers associated with a patient
   *
   * @tags Patientsvc
   * @name PatientsProvidersDetail
   * @summary Gets list of patient providers associated with a patient
   * @request GET:/api/patients/{tildaid}/providers
   * @secure
   */
  patientsProvidersDetail = (
    tildaid: string,
    query?: {
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<PatientProviderSummaryResponse, void>({
      path: `/api/patients/${tildaid}/providers`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates an existing patient provider
   *
   * @tags Patientsvc
   * @name PatientsProvidersUpdate
   * @summary Updates an existing patient provider
   * @request PUT:/api/patients/providers/{tildaid}
   * @secure
   */
  patientsProvidersUpdate = (
    tildaid: string,
    data: PatientProviderCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/patients/providers/${tildaid}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns studies patient is a lead for
   *
   * @tags Patientsvc
   * @name PatientsStudiesDetail
   * @summary Gets list of studies patient is a lead for
   * @request GET:/api/patients/{tildaid}/studies
   * @secure
   */
  patientsStudiesDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<PatientStudyResponse, void>({
      path: `/api/patients/${tildaid}/studies`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates an existing patient
   *
   * @tags Patientsvc
   * @name PatientsUpdate
   * @summary Updates an existing patient
   * @request PUT:/api/patients/{tildaid}
   * @secure
   */
  patientsUpdate = (
    tildaid: string,
    data: PatientCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/patients/${tildaid}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns list of phi objects, each item containing the personal information of a patient This API should be used when looking to get a list of patients in the database with their personal information such as first name, last name, date of birth, mobile phone number, email address etc To narrow down the list, use supported query parameters. The following query parameters are supported and can be used in combination. All searches are case insensitive. Use these query params instead of using searchkey and searchstr query params for any of the fields below: firstname - Returns only those patients whose first name contains the value of this query param lastname - Returns only those patients whose last name contains the value of this query param dob - Returns only those patients whose date of birth contains the value of this query param email - Returns only those patients whose email address contains the value of this query param mobilephone - Returns only those patients whose mobile phone info contains the value of this query param city - Returns only those patients whose city field contains the value of this query param state - Returns only those patients whose state field contains the value of this query param patientid - Returns only those patients whose tildaid contains the value of this query param For most search cases, the above query parameters should suffice. They can be used in combination: For example, to find a patient whose firstname is John and lastname is Doe, the API with query params would be: /api/patientPhis?firstname=John&lastname=Doe The response consists of a list of patients, each item in the list among other things includes the patientid field. The value of this field is essentially the tildaid of the corresponding patient object. For any information from the patient object, the /api/patients/{tildaid} API can be called where the tildaid key's value is the value of the patientid field from the response to this API. The only additional fields of interest from the patient object are the sex of the patient (this is currently by itself not considered PHI so not kept in the PHI object), the age of the patient (computed from the dob field of the Phi object) and ufid (user friendly identifier) which is a unique 9 digit number assigned to the patient.
   *
   * @tags Patientsvc
   * @name PatientPhisList
   * @summary Gets list of phi objects, each item containing the personal information of a patient
   * @request GET:/api/patientPhis
   * @secure
   */
  patientPhisList = (
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
      /** First Name */
      firstname?: string;
      /** Last Name */
      lastname?: string;
      /** DOB */
      dob?: string;
      /** email */
      email?: string;
      /** Mobile Phone */
      mobilephone?: string;
      /** Work Phone */
      workphone?: string;
      /** Home Phone */
      homephone?: string;
      /** City */
      city?: string;
      /** State */
      state?: string;
      /** PatientID */
      patientid?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<PatientPhiResponse, void>({
      path: `/api/patientPhis`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
