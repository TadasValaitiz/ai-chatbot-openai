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
  ESignature,
  ESignatureESignDetails,
  ESignatureObjectToESign
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Esign<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description eSign (Apply eSignature to) a given object (e.g. document)
   *
   * @tags Auth
   * @name EsignApplyUpdate
   * @summary eSign a given object
   * @request PUT:/api/esign/apply
   * @secure
   */
  esignApplyUpdate = (
    data: ESignatureObjectToESign,
    params: RequestParams = {}
  ) =>
    this.request<ESignature, void>({
      path: `/api/esign/apply`,
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
   * @name EsignCreate
   * @summary Create eSignature for current user
   * @request POST:/api/esign
   * @secure
   */
  esignCreate = (data: ESignatureESignDetails, params: RequestParams = {}) =>
    this.request<ESignature, void>({
      path: `/api/esign`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
}
