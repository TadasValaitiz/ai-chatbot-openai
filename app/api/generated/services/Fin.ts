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
  BudgetCfg,
  BudgetEntry,
  BudgetEntryInstance,
  BudgetI,
  BudgetList,
  BudgetOptions,
  BudgetReport,
  BudgetReportI,
  BudgetReportList,
  ChangeLog,
  HttpAccountBalanceResponse,
  HttpAssignCardRequest,
  HttpCancelCardRequest,
  HttpCardBalanceResponse,
  HttpCardDetailsResponse,
  HttpCardEchoResponse,
  HttpPayCardRequest,
  PatientPayout,
  PaymentAccount,
  Section,
  SectionCfg,
  SiteShort,
  StudyShort,
  TaskO
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Fin<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Remove a budget entry in the system
   *
   * @tags Budgets
   * @name V1FinBudgetEntriesDelete
   * @summary Remove a budget entry
   * @request DELETE:/api/v1/fin/budget-entries/{id}
   */
  v1FinBudgetEntriesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/fin/budget-entries/${id}`,
      method: 'DELETE',
      ...params
    });
  /**
   * @description Update a budget entry in the system
   *
   * @tags Budgets
   * @name V1FinBudgetEntriesUpdate
   * @summary Update a budget entry
   * @request PUT:/api/v1/fin/budget-entries/{id}
   */
  v1FinBudgetEntriesUpdate = (
    id: string,
    data: BudgetEntry,
    params: RequestParams = {}
  ) =>
    this.request<SectionCfg, void>({
      path: `/api/v1/fin/budget-entries/${id}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a budget report for a participant visit (testing only)
   *
   * @tags BudgetReport
   * @name V1FinBudgetReportCreate
   * @summary This API is for testing only
   * @request POST:/api/v1/fin/budget-report/{pvId}
   * @secure
   */
  v1FinBudgetReportCreate = (pvId: string, params: RequestParams = {}) =>
    this.request<BudgetReport, void>({
      path: `/api/v1/fin/budget-report/${pvId}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get BudgetReport Audit Logs
   *
   * @tags BudgetReport
   * @name V1FinBudgetReportsAuditLogsDetail
   * @summary Get BudgetReport Audit Logs
   * @request GET:/api/v1/fin/budget-reports/{id}/audit-logs
   * @secure
   */
  v1FinBudgetReportsAuditLogsDetail = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<ChangeLog[], void>({
      path: `/api/v1/fin/budget-reports/${id}/audit-logs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a budget report for a study site
   *
   * @tags BudgetReport
   * @name V1FinBudgetReportsCreate
   * @summary Creates a budget report
   * @request POST:/api/v1/fin/budget-reports
   * @secure
   */
  v1FinBudgetReportsCreate = (
    data: BudgetReportI,
    params: RequestParams = {}
  ) =>
    this.request<BudgetReport, void>({
      path: `/api/v1/fin/budget-reports`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a budget entry instance for a budget report
   *
   * @tags BudgetReport
   * @name V1FinBudgetReportsEntryInstancesCreate
   * @summary Creates a budget entry instance
   * @request POST:/api/v1/fin/budget-reports/{id}/entry-instances
   * @secure
   */
  v1FinBudgetReportsEntryInstancesCreate = (
    id: string,
    data: BudgetEntryInstance,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/budget-reports/${id}/entry-instances`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Lists budget entry instances for a budget report
   *
   * @tags BudgetReport
   * @name V1FinBudgetReportsEntryInstancesDetail
   * @summary Lists budget entry instances
   * @request GET:/api/v1/fin/budget-reports/{id}/entry-instances
   * @secure
   */
  v1FinBudgetReportsEntryInstancesDetail = (
    id: string,
    params: RequestParams = {}
  ) =>
    this.request<BudgetEntryInstance[], void>({
      path: `/api/v1/fin/budget-reports/${id}/entry-instances`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Exports budget reports based on filter parameters
   *
   * @tags BudgetReport
   * @name V1FinBudgetReportsExportList
   * @summary Exports budget reports
   * @request GET:/api/v1/fin/budget-reports/export
   * @secure
   */
  v1FinBudgetReportsExportList = (
    query?: {
      /** Number of items to skip */
      skip?: number;
      /** Number of items per page */
      limit?: number;
      /** Status of the budget report */
      status?: string;
      /** List of Site IDs */
      siteIds?: string[];
      /** List of Study IDs */
      studyIds?: string[];
      /** Visit date filter (MonthToDate, LastMonth, SinceInception, Custom) */
      visitDate?: string;
      /** Custom date range for the report (only valid if visitDate is Custom). Example: '2023-01-01,2023-01-31' */
      customDateRange?: string;
      /** List of fields to exclude from the export */
      excludedFields?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.request<string, string>({
      path: `/api/v1/fin/budget-reports/export`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Lists budget reports based on filter parameters
   *
   * @tags BudgetReport
   * @name V1FinBudgetReportsList
   * @summary Lists budget reports
   * @request GET:/api/v1/fin/budget-reports
   * @secure
   */
  v1FinBudgetReportsList = (
    query?: {
      /** Number of items to skip */
      skip?: number;
      /** Number of items per page */
      limit?: number;
      /** Status of the budget report */
      status?: string;
      /** List of Site IDs */
      siteIds?: string[];
      /** List of Study IDs */
      studyIds?: string[];
      /** Budget Report ID */
      id?: string;
      /** Visit date filter (MonthToDate, LastMonth, SinceInception, Custom) */
      visitDate?: string;
      /** Custom date range for the report (only valid if visitDate is Custom). Example: '2023-01-01,2023-01-31' */
      customDateRange?: string;
      /** Search string */
      searchStr?: string;
      /** Sort key */
      sortKey?: string;
      /** Sort descending */
      desc?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<BudgetReportList, string>({
      path: `/api/v1/fin/budget-reports`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates an existing budget report by its ID
   *
   * @tags BudgetReport
   * @name V1FinBudgetReportsUpdate
   * @summary Updates a budget report
   * @request PUT:/api/v1/fin/budget-reports/{id}
   * @secure
   */
  v1FinBudgetReportsUpdate = (
    id: string,
    data: BudgetReport,
    params: RequestParams = {}
  ) =>
    this.request<void, string>({
      path: `/api/v1/fin/budget-reports/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get Budget Audit Logs
   *
   * @tags Budget
   * @name V1FinBudgetsAuditLogsDetail
   * @summary Get Budget Audit Logs
   * @request GET:/api/v1/fin/budgets/{id}/audit-logs
   * @secure
   */
  v1FinBudgetsAuditLogsDetail = (id: string, params: RequestParams = {}) =>
    this.request<ChangeLog[], void>({
      path: `/api/v1/fin/budgets/${id}/audit-logs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create a budget in the system
   *
   * @tags Budgets
   * @name V1FinBudgetsCreate
   * @summary Create a budget
   * @request POST:/api/v1/fin/budgets
   */
  v1FinBudgetsCreate = (data: BudgetI, params: RequestParams = {}) =>
    this.request<BudgetCfg, void>({
      path: `/api/v1/fin/budgets`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Remove a budget in the system
   *
   * @tags Budgets
   * @name V1FinBudgetsDelete
   * @summary Remove a budget
   * @request DELETE:/api/v1/fin/budgets/{id}
   */
  v1FinBudgetsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/fin/budgets/${id}`,
      method: 'DELETE',
      ...params
    });
  /**
   * @description Retrieve the hierarchy of a budget by its tildaid
   *
   * @tags Budgets
   * @name V1FinBudgetsHierarchyDetail
   * @summary Get budget hierarchy
   * @request GET:/api/v1/fin/budgets/{id}/hierarchy
   */
  v1FinBudgetsHierarchyDetail = (id: string, params: RequestParams = {}) =>
    this.request<BudgetCfg, void>({
      path: `/api/v1/fin/budgets/${id}/hierarchy`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Retrieve a list of linked budgets
   *
   * @tags Budgets
   * @name V1FinBudgetsLinkedDetail
   * @summary Get linked budgets
   * @request GET:/api/v1/fin/budgets/{id}/linked
   */
  v1FinBudgetsLinkedDetail = (id: string, params: RequestParams = {}) =>
    this.request<BudgetCfg[], void>({
      path: `/api/v1/fin/budgets/${id}/linked`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Retrieve a list of budgets
   *
   * @tags Budgets
   * @name V1FinBudgetsList
   * @summary List budgets
   * @request GET:/api/v1/fin/budgets
   */
  v1FinBudgetsList = (
    query?: {
      /** search string across budget name */
      searchStr?: string;
      /** Number of items to skip */
      skip?: number;
      /** Number of items per page */
      limit?: number;
      /** Sort key */
      sortKey?: string;
      /** Sort descending */
      desc?: boolean;
      /** possible values for status are Draft, Active, Scheduled, Archived */
      status?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<BudgetList, void>({
      path: `/api/v1/fin/budgets`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Add a section to a budget
   *
   * @tags Budgets
   * @name V1FinBudgetsSectionsCreate
   * @summary Add a section to a budget
   * @request POST:/api/v1/fin/budgets/{id}/sections
   */
  v1FinBudgetsSectionsCreate = (
    id: string,
    data: Section,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/budgets/${id}/sections`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update a budget in the system
   *
   * @tags Budgets
   * @name V1FinBudgetsUpdate
   * @summary Update a budget
   * @request PUT:/api/v1/fin/budgets/{id}
   */
  v1FinBudgetsUpdate = (
    id: string,
    data: BudgetI,
    query?: {
      /** Set to 'no' to enable site move validation, validation is skipped if parameter is not set */
      warning?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/budgets/${id}`,
      method: 'PUT',
      query: query,
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Retrieves the current balance in the client's account
   *
   * @tags Cards
   * @name V1FinCardsAccountBalanceList
   * @summary Get account balance
   * @request GET:/api/v1/fin/cards/account/balance
   */
  v1FinCardsAccountBalanceList = (params: RequestParams = {}) =>
    this.request<HttpAccountBalanceResponse, HttpAccountBalanceResponse>({
      path: `/api/v1/fin/cards/account/balance`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Retrieves the current balance of a payment card
   *
   * @tags Cards
   * @name V1FinCardsBalanceDetail
   * @summary Get card balance
   * @request GET:/api/v1/fin/cards/{cardId}/balance
   */
  v1FinCardsBalanceDetail = (cardId: string, params: RequestParams = {}) =>
    this.request<HttpCardBalanceResponse, HttpCardBalanceResponse>({
      path: `/api/v1/fin/cards/${cardId}/balance`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Assigns a new payment card to a participant
   *
   * @tags Cards
   * @name V1FinCardsCreate
   * @summary Assign a new card to a participant
   * @request POST:/api/v1/fin/cards
   */
  v1FinCardsCreate = (
    data: HttpAssignCardRequest,
    params: RequestParams = {}
  ) =>
    this.request<HttpCardDetailsResponse, HttpCardDetailsResponse>({
      path: `/api/v1/fin/cards`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Cancels a payment card
   *
   * @tags Cards
   * @name V1FinCardsDelete
   * @summary Cancel a card
   * @request DELETE:/api/v1/fin/cards/{cardId}
   */
  v1FinCardsDelete = (
    cardId: string,
    data: HttpCancelCardRequest,
    params: RequestParams = {}
  ) =>
    this.request<HttpCardEchoResponse, HttpCardEchoResponse>({
      path: `/api/v1/fin/cards/${cardId}`,
      method: 'DELETE',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Retrieves detailed information about a payment card
   *
   * @tags Cards
   * @name V1FinCardsDetail
   * @summary Get card details
   * @request GET:/api/v1/fin/cards/{cardId}
   */
  v1FinCardsDetail = (cardId: string, params: RequestParams = {}) =>
    this.request<HttpCardDetailsResponse, HttpCardDetailsResponse>({
      path: `/api/v1/fin/cards/${cardId}`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Tests the connection to the card payment provider API
   *
   * @tags Cards
   * @name V1FinCardsEchoList
   * @summary Test card payment provider connection
   * @request GET:/api/v1/fin/cards/echo
   */
  v1FinCardsEchoList = (params: RequestParams = {}) =>
    this.request<HttpCardEchoResponse, HttpCardEchoResponse>({
      path: `/api/v1/fin/cards/echo`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Loads funds onto a participant's payment card
   *
   * @tags Cards
   * @name V1FinCardsPayCreate
   * @summary Load funds onto a card
   * @request POST:/api/v1/fin/cards/{cardId}/pay
   */
  v1FinCardsPayCreate = (
    cardId: string,
    data: HttpPayCardRequest,
    params: RequestParams = {}
  ) =>
    this.request<HttpCardDetailsResponse, HttpCardDetailsResponse>({
      path: `/api/v1/fin/cards/${cardId}/pay`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Enable or disable debug logging dynamically
   *
   * @tags Debug
   * @name V1FinDebugLoggingCreate
   * @summary Toggle debug logging
   * @request POST:/api/v1/fin/debug/logging
   */
  v1FinDebugLoggingCreate = (
    query: {
      /** Whether to enable debug logging */
      enable: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/debug/logging`,
      method: 'POST',
      query: query,
      ...params
    });
  /**
   * @description Removes a budget entry instance for a budget report
   *
   * @tags BudgetReport
   * @name V1FinEntryInstancesDelete
   * @summary Removes a budget entry instance
   * @request DELETE:/api/v1/fin/entry-instances/{id}
   * @secure
   */
  v1FinEntryInstancesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/fin/entry-instances/${id}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Updates a budget entry instance for a budget report
   *
   * @tags BudgetReport
   * @name V1FinEntryInstancesUpdate
   * @summary Updates a budget entry instance
   * @request PUT:/api/v1/fin/entry-instances/{id}
   * @secure
   */
  v1FinEntryInstancesUpdate = (
    id: string,
    data: BudgetEntryInstance,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/entry-instances/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create a new payout transaction for a patient
   *
   * @tags Payments
   * @name V1FinPatientPayoutsCreate
   * @summary Create patient payout
   * @request POST:/api/v1/fin/patient-payouts
   */
  v1FinPatientPayoutsCreate = (
    data: PatientPayout,
    query?: {
      /** Budget Report ID */
      budgetReportId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/patient-payouts`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create a new payment account for a patient
   *
   * @tags Payments
   * @name V1FinPaymentAccountsCreate
   * @summary Create payment account
   * @request POST:/api/v1/fin/payment-accounts
   */
  v1FinPaymentAccountsCreate = (
    data: PaymentAccount,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/payment-accounts`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update an existing payment account
   *
   * @tags Payments
   * @name V1FinPaymentAccountsUpdate
   * @summary Update payment account
   * @request PUT:/api/v1/fin/payment-accounts/{id}
   */
  v1FinPaymentAccountsUpdate = (
    id: string,
    data: PaymentAccount,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/payment-accounts/${id}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Add a budget entry to a section
   *
   * @tags Budgets
   * @name V1FinSectionsBudgetEntriesCreate
   * @summary Add a budget entry to a section
   * @request POST:/api/v1/fin/sections/{id}/budget-entries
   */
  v1FinSectionsBudgetEntriesCreate = (
    id: string,
    data: BudgetEntry,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/v1/fin/sections/${id}/budget-entries`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Remove a section in the system
   *
   * @tags Budgets
   * @name V1FinSectionsDelete
   * @summary Remove a section
   * @request DELETE:/api/v1/fin/sections/{id}
   */
  v1FinSectionsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/v1/fin/sections/${id}`,
      method: 'DELETE',
      ...params
    });
  /**
   * @description Update a section in the system
   *
   * @tags Budgets
   * @name V1FinSectionsUpdate
   * @summary Update a section
   * @request PUT:/api/v1/fin/sections/{id}
   */
  v1FinSectionsUpdate = (
    id: string,
    data: Section,
    params: RequestParams = {}
  ) =>
    this.request<SectionCfg, void>({
      path: `/api/v1/fin/sections/${id}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Returns all sites that have budgets for the given organization through SMO relationship
   *
   * @tags Budget
   * @name V1FinSitesWithBudgetList
   * @summary Get sites with budget
   * @request GET:/api/v1/fin/sites-with-budget
   */
  v1FinSitesWithBudgetList = (
    query?: {
      /** Study ID to filter sites by */
      studyId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SiteShort[], void>({
      path: `/api/v1/fin/sites-with-budget`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Returns all studies that have budgets for the given organization
   *
   * @tags Budget
   * @name V1FinStudiesWithBudgetList
   * @summary Get studies with budget
   * @request GET:/api/v1/fin/studies-with-budget
   */
  v1FinStudiesWithBudgetList = (params: RequestParams = {}) =>
    this.request<StudyShort[], void>({
      path: `/api/v1/fin/studies-with-budget`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Get budget options for a study site
   *
   * @tags Budget
   * @name V1FinStudySiteOptionsDetail
   * @summary Get budget options
   * @request GET:/api/v1/fin/study/{studyId}/site/{siteId}/Options
   * @secure
   */
  v1FinStudySiteOptionsDetail = (
    studyId: string,
    siteId: string,
    params: RequestParams = {}
  ) =>
    this.request<BudgetOptions, void>({
      path: `/api/v1/fin/study/${studyId}/site/${siteId}/Options`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists tasks by taskId
   *
   * @tags Task
   * @name V1FinTasksDetail
   * @summary Lists tasks
   * @request GET:/api/v1/fin/tasks/{taskId}
   * @secure
   */
  v1FinTasksDetail = (taskId: string, params: RequestParams = {}) =>
    this.request<TaskO, void>({
      path: `/api/v1/fin/tasks/${taskId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates tasks by taskId
   *
   * @tags Task
   * @name V1FinTasksUpdate
   * @summary Updates tasks
   * @request PUT:/api/v1/fin/tasks/{taskId}
   * @secure
   */
  v1FinTasksUpdate = (
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
      path: `/api/v1/fin/tasks/${taskId}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    });
}
