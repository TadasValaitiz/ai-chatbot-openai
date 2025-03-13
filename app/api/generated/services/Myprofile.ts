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
  AppVisibility,
  AuthlibUserAuthFactor,
  ChangePinRequest,
  CreatePinRequest,
  ESignature,
  ESignatureESignDetails,
  ESignatureObjectToESign,
  HealthBlindedAccessScope,
  PinResponse,
  ResetPinRequest,
  User,
  UserInputs,
  UserProfile,
  VerifyFactorRequest,
  VerifyPinRequest
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Myprofile<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Registers a user profile
   *
   * @tags Auth
   * @name MyprofileCreate
   * @summary Register user
   * @request POST:/api/myprofile
   */
  myprofileCreate = (data: UserInputs, params: RequestParams = {}) =>
    this.request<UserProfile, void>({
      path: `/api/myprofile`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Get current users profile which includes user's association with Organizations, Sites and Studies
   *
   * @tags Auth
   * @name MyprofileList
   * @summary Get current users profile
   * @request GET:/api/myprofile
   * @secure
   */
  myprofileList = (params: RequestParams = {}) =>
    this.request<UserProfile, void>({
      path: `/api/myprofile`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get current users multi-factor authentication config
   *
   * @tags Auth
   * @name MyprofileMfaList
   * @summary Get multi-factor authentication config
   * @request GET:/api/myprofile/mfa
   * @secure
   */
  myprofileMfaList = (params: RequestParams = {}) =>
    this.request<AuthlibUserAuthFactor[], void>({
      path: `/api/myprofile/mfa`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Verify one of the factors for mfa (email or phone) with a valid token
   *
   * @tags Auth
   * @name MyprofileMfaVerifyUpdate
   * @summary Verify a factor for mfa
   * @request PUT:/api/myprofile/mfa/verify
   * @secure
   */
  myprofileMfaVerifyUpdate = (
    data: VerifyFactorRequest,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/myprofile/mfa/verify`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Creates an OTP and sends it over the user's email
   *
   * @tags Auth
   * @name MyprofileOtpStartList
   * @summary Sends an OTP over the email
   * @request GET:/api/myprofile/otp/start
   * @secure
   */
  myprofileOtpStartList = (params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/api/myprofile/otp/start`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Verifies OTP
   *
   * @tags Auth
   * @name MyprofileOtpVerifyCreate
   * @summary Verifies OTP
   * @request POST:/api/myprofile/otp/verify
   * @secure
   */
  myprofileOtpVerifyCreate = (data: string, params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/api/myprofile/otp/verify`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Text,
      ...params
    });
  /**
   * @description Creates a new PIN for the authenticated user
   *
   * @tags Auth
   * @name MyprofilePinCreate
   * @summary Create a new PIN for user
   * @request POST:/api/myprofile/pin
   * @secure
   */
  myprofilePinCreate = (data: CreatePinRequest, params: RequestParams = {}) =>
    this.request<PinResponse, void>({
      path: `/api/myprofile/pin`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Resets the PIN using a second factor token
   *
   * @tags Auth
   * @name MyprofilePinResetCreate
   * @summary Reset user's PIN
   * @request POST:/api/myprofile/pin/reset
   * @secure
   */
  myprofilePinResetCreate = (
    data: ResetPinRequest,
    params: RequestParams = {}
  ) =>
    this.request<PinResponse, void>({
      path: `/api/myprofile/pin/reset`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Changes the PIN for the authenticated user
   *
   * @tags Auth
   * @name MyprofilePinUpdate
   * @summary Change user's PIN
   * @request PUT:/api/myprofile/pin
   * @secure
   */
  myprofilePinUpdate = (data: ChangePinRequest, params: RequestParams = {}) =>
    this.request<PinResponse, void>({
      path: `/api/myprofile/pin`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Verifies the PIN for the authenticated user
   *
   * @tags Auth
   * @name MyprofilePinVerifyCreate
   * @summary Verify user's PIN
   * @request POST:/api/myprofile/pin/verify
   * @secure
   */
  myprofilePinVerifyCreate = (
    data: VerifyPinRequest,
    params: RequestParams = {}
  ) =>
    this.request<PinResponse, void>({
      path: `/api/myprofile/pin/verify`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description eSign (Apply eSignature to) a given object (e.g. document)
   *
   * @tags Auth
   * @name MyprofileSignatureApplyUpdate
   * @summary eSign a given object
   * @request PUT:/api/myprofile/signature/apply
   * @secure
   */
  myprofileSignatureApplyUpdate = (
    data: ESignatureObjectToESign,
    params: RequestParams = {}
  ) =>
    this.request<ESignature, void>({
      path: `/api/myprofile/signature/apply`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create eSignature for current user
   *
   * @tags Auth
   * @name MyprofileSignatureCreate
   * @summary Create eSignature for current user
   * @request POST:/api/myprofile/signature
   * @secure
   */
  myprofileSignatureCreate = (
    data: ESignatureESignDetails,
    params: RequestParams = {}
  ) =>
    this.request<ESignature, void>({
      path: `/api/myprofile/signature`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete eSignature for current user
   *
   * @tags Auth
   * @name MyprofileSignatureDelete
   * @summary Delete eSignature for current user
   * @request DELETE:/api/myprofile/signature
   * @secure
   */
  myprofileSignatureDelete = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/myprofile/signature`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get eSignature for current user
   *
   * @tags Auth
   * @name MyprofileSignatureList
   * @summary Get eSignature for current user
   * @request GET:/api/myprofile/signature
   * @secure
   */
  myprofileSignatureList = (params: RequestParams = {}) =>
    this.request<ESignature, void>({
      path: `/api/myprofile/signature`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get current users profile which includes user's association with Organizations, Sites and Studies
   *
   * @tags Auth
   * @name MyprofileUpdate
   * @summary Update current users profile
   * @request PUT:/api/myprofile
   * @secure
   */
  myprofileUpdate = (data: UserInputs, params: RequestParams = {}) =>
    this.request<User, void>({
      path: `/api/myprofile`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Get application visibility based on current users profile. This can be used by GUI to show/hide corresponding applications
   *
   * @tags Auth
   * @name MyprofileVisibilityList
   * @summary Get application visibility based on current users profile
   * @request GET:/api/myprofile/visibility
   * @secure
   */
  myprofileVisibilityList = (
    query?: {
      /** tildaid of the study */
      study?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AppVisibility, void>({
      path: `/api/myprofile/visibility`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get current users Blinded Scopes based on study
   *
   * @tags Auth
   * @name MyprofileVisibilityStudyBlindedScopesDetail
   * @summary Get current users Blinded Scopes based on study
   * @request GET:/api/myprofile/visibility/study/{studyId}/blindedScopes
   * @secure
   */
  myprofileVisibilityStudyBlindedScopesDetail = (
    studyId: string,
    params: RequestParams = {}
  ) =>
    this.request<HealthBlindedAccessScope[], void>({
      path: `/api/myprofile/visibility/study/${studyId}/blindedScopes`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get application visibility based on current users profile. This can be used by GUI to show/hide corresponding applications
   *
   * @tags Auth
   * @name MyprofileVisibilityV2List
   * @summary Get application visibility based on current users profile
   * @request GET:/api/myprofile/visibility/v2
   * @secure
   */
  myprofileVisibilityV2List = (
    query?: {
      /** tildaid of the study */
      study?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AppVisibility, void>({
      path: `/api/myprofile/visibility/v2`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get allowed tab/actions for given study
   *
   * @tags Auth
   * @name MyprofileVisibilityV2StudyDetail
   * @summary Get allowed tab/actions for given study
   * @request GET:/api/myprofile/visibility/v2/study/{studyId}
   * @secure
   */
  myprofileVisibilityV2StudyDetail = (
    studyId: string,
    params: RequestParams = {}
  ) =>
    this.request<AppVisibility, void>({
      path: `/api/myprofile/visibility/v2/study/${studyId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
}
