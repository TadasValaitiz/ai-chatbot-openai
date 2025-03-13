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
  CheckAuthzParam,
  CheckAuthzResponse,
  HandlersAuth0Identity,
  HandlersUserCheck,
  NewPasswordInput,
  ResetPasswordRequest
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Register<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Checks authorization decision for operation on a given object
   *
   * @tags Auth
   * @name CheckauthList
   * @summary Checks authorization decision for operation on a given object
   * @request GET:/api/checkauth
   * @secure
   */
  checkauthList = (data: CheckAuthzParam, params: RequestParams = {}) =>
    this.request<CheckAuthzResponse, void>({
      path: `/api/checkauth`,
      method: 'GET',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Changes user's auth0-password after verifying the password reset ticket
   *
   * @tags Auth
   * @name PasswordResetCompleteCreate
   * @summary Changes user's auth0-password
   * @request POST:/register/password-reset/complete
   * @secure
   */
  passwordResetCompleteCreate = (
    data: NewPasswordInput,
    params: RequestParams = {}
  ) =>
    this.request<string, void>({
      path: `/register/password-reset/complete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Sends password-reset link to user's email; Only if the email is registered with us(auth0) else fails silently
   *
   * @tags Auth
   * @name PasswordResetTriggerUpdate
   * @summary Sends password-reset link to user's email
   * @request PUT:/register/password-reset/trigger
   * @secure
   */
  passwordResetTriggerUpdate = (
    data: ResetPasswordRequest,
    params: RequestParams = {}
  ) =>
    this.request<string, void>({
      path: `/register/password-reset/trigger`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Validates password-reset ticket when it is still active
   *
   * @tags Auth
   * @name PasswordResetVerifyList
   * @summary Verifies password-reset ticket
   * @request GET:/register/password-reset/verify
   * @secure
   */
  passwordResetVerifyList = (
    query: {
      /** ticketId to be validated */
      ticketId: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<string, void>({
      path: `/register/password-reset/verify`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get user email of a given patient using firstName, lastName, dob deatils
   *
   * @tags Auth
   * @name PatientUserList
   * @summary Get user email of a given patient
   * @request GET:/register/patient-user
   * @secure
   */
  patientUserList = (
    query: {
      /** First name of the patient */
      firstName: string;
      /** Last name of the patient */
      lastName: string;
      /** DOB of the patient */
      dob: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<string, void>({
      path: `/register/patient-user`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Checks for a user. goes with either email or phoneNumber(in the same order) whichever is provided
   *
   * @tags Auth
   * @name UserList
   * @summary Checks if a User already exists
   * @request GET:/register/user
   * @secure
   */
  userList = (
    query?: {
      /** email address */
      email?: string;
      /** phone number */
      phoneNumber?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<HandlersUserCheck, void>({
      path: `/register/user`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Triggers verification-email(only applicable for Username-Password-Authentication connections)
   *
   * @tags Auth
   * @name VerifyEmailCreate
   * @summary Triggers verification-email
   * @request POST:/register/verify-email
   * @secure
   */
  verifyEmailCreate = (
    data: HandlersAuth0Identity,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/register/verify-email`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
}
