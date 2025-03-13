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
  CPCreatePayload,
  CPDiscontinuePayload,
  CPUpdatePayload,
  CarePlan,
  CommunicationInfoPayload,
  DeleteTable,
  DisqualifyPayload,
  DslPlanDefinition,
  DutiesPlanResponse,
  DutyPlanPayload,
  EligibilityFlagPayload,
  ExecIds,
  ExecIdsWithChangeLog,
  ExecProgressNotes,
  ExecTaskPayload,
  Form,
  GenericKeyArr,
  ListActorsOutput2,
  ListCareplanProgressNotesOutput,
  MonitorQueryParams,
  MonitorQueryTypeParams,
  OPStudyProtocol,
  OPStudyProtocolV2,
  OPVisitSummary,
  ObjectDetailsMap,
  OutputActivity,
  OutputActivityDetails,
  OutputActivityDetailsV2,
  OutputActorSidePanel,
  OutputAdverseEvent,
  OutputAdverseEventTask,
  OutputAdverseEventsList,
  OutputCarePlan,
  OutputCarePlanResponse,
  OutputChecklistTask,
  OutputChecklistTaskV2,
  OutputConMed,
  OutputDelegateTask,
  OutputHRRF,
  OutputHRRFV2,
  OutputMedHist,
  OutputMonitorQueryFilter,
  OutputMonitorQueryPerSite,
  OutputMonitorQueryPerSiteCounts,
  OutputMonitorQueryPerType,
  OutputPDType,
  OutputPFormSummary,
  OutputParticipantForm,
  OutputPrePostVisit,
  OutputProtocol,
  OutputProtocolDeviation,
  OutputProtocolDeviationTask,
  OutputQuery,
  OutputQueryTask,
  OutputQuestionnaire,
  OutputSMO,
  OutputSidePanelChangeLog,
  OutputSidePanelProgressNote,
  OutputSidePanelProtocolDeviation,
  OutputSidePanelQuery,
  OutputSidePanelSignOff,
  OutputSidePanelTask,
  OutputSignoffTask,
  OutputTableDetailsV2,
  OutputTask,
  OutputTodo,
  OutputVisitSummaryV2,
  OutputVisitV2,
  ParticipantForm,
  ProgressNote,
  ProtocolDeviation,
  QueryPayload,
  QuestionPayloadWitChangeLog,
  RecommendedDutiesBySiteResponse,
  RecommendedDutiesResponse,
  ReviewTaskPayload,
  SidePanelPayload,
  SignOffPayload,
  SitesResponse,
  SkipActivityPayload,
  StatusResponseObj,
  StudyActorPayload,
  StudyActorResponse,
  StudyProtocol,
  StudySiteDuty,
  StudySiteInput,
  StudySiteSidePanel,
  TableOutput,
  TaskPayload,
  UpdateActivityPayload,
  UpdateActivityStatusPayLoad,
  UpdatePrePostVisitPayload,
  UpdateProgressNotePayload,
  ValidateIDs,
  Visit,
  VisitActivityGraph,
  VisitActivityGraphV2,
  VisitUpdatePayLoad
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Trialexec<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description List AdverseEvents
   *
   * @tags AdverseEvent
   * @name TrialexecAdverseeventList
   * @summary List AdverseEvents
   * @request GET:/api/trialexec/adverseevent
   * @secure
   */
  trialexecAdverseeventList = (
    query?: {
      /** Return adverse events of passed study */
      'study-id'?: string;
      /** Return adverse events of careplans associated with the passed site */
      'site-id'?: string;
      /** Return adverse events of passed careplan */
      'careplan-id'?: string;
      /** number of entries to skip */
      skip?: number;
      /** number of entries per page */
      limit?: number;
      /** key to sort by */
      sort?: string;
      /** number of entries per page */
      desc?: boolean;
      /** search key to search for value of field in AEs. ex. 'outcome' will search for AEs with passed searchstr outcome */
      searchkey?: string;
      /** search value to search for in AE info. ex. 'Fatal' */
      searchstr?: string;
      /** status of AE */
      status?: string;
      /** possible outcomes of AE */
      outcome?: string;
      /** did this adverse event occur outside of execution */
      outsideExecution?: boolean;
      /** is the AE serious \ */
      serious?: string;
      /** pass \ */
      'serious-search'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputAdverseEventsList, void>({
      path: `/api/trialexec/adverseevent`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List careplan actors by careplanId
   *
   * @tags Careplan Actors
   * @name TrialexecCareplanActorDetail
   * @summary List careplan actors
   * @request GET:/api/trialexec/careplan/{careplanId}/actor
   * @secure
   */
  trialexecCareplanActorDetail = (
    careplanId: string,
    query?: {
      /** roles to exclude, can be passed multiple times */
      'exclude-role'?: string;
      /** role to include, can be passed multiple times */
      role?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StudyActorResponse[], void>({
      path: `/api/trialexec/careplan/${careplanId}/actor`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create flag for question in careplan by careplanId, adverseEventId, activityId, questionId
   *
   * @tags careplan Flag
   * @name TrialexecCareplanAeActivityQuestionFlagCreate
   * @summary Create flag for question in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/activity/question/flag
   * @secure
   */
  trialexecCareplanAeActivityQuestionFlagCreate = (
    careplanId: string,
    adverseEventId: string,
    data: EligibilityFlagPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/activity/question/flag`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Delete flag for question in careplan by careplanId, adverseEventId, activityId, questionId, and flagId
   *
   * @tags Careplan Flag
   * @name TrialexecCareplanAeActivityQuestionFlagDelete
   * @summary Delete flag for question in careplan
   * @request DELETE:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/activity/question/flag/{flagId}
   * @secure
   */
  trialexecCareplanAeActivityQuestionFlagDelete = (
    careplanId: string,
    adverseEventId: string,
    flagId: string,
    data: EligibilityFlagPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/activity/question/flag/${flagId}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update flag for question in careplan by careplanId, adverseEventId, activityId, questionId, and flagId
   *
   * @tags Careplan Flag
   * @name TrialexecCareplanAeActivityQuestionFlagUpdate
   * @summary Update flag for question in careplan
   * @request PUT:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/activity/question/flag/{flagId}
   * @secure
   */
  trialexecCareplanAeActivityQuestionFlagUpdate = (
    careplanId: string,
    adverseEventId: string,
    flagId: string,
    data: EligibilityFlagPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/activity/question/flag/${flagId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create query for question in careplan by careplanId, activityId, questionId
   *
   * @tags Careplan Query
   * @name TrialexecCareplanAeActivityQuestionQueryCreate
   * @summary Create query for question in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/activity/question/query
   * @secure
   */
  trialexecCareplanAeActivityQuestionQueryCreate = (
    careplanId: string,
    adverseEventId: string,
    data: QueryPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/activity/question/query`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get query details for question in careplan by careplanId, adverseEventId, activityId, questionId, and queryId
   *
   * @tags Careplan Query
   * @name TrialexecCareplanAeActivityQuestionQueryCreate2
   * @summary Get query details for question in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/activity/question/query/{queryId}
   * @originalName trialexecCareplanAeActivityQuestionQueryCreate
   * @duplicate
   * @secure
   */
  trialexecCareplanAeActivityQuestionQueryCreate2 = (
    careplanId: string,
    adverseEventId: string,
    queryId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputQuery, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/activity/question/query/${queryId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete Query
   *
   * @tags Query
   * @name TrialexecCareplanAeActivityQuestionQueryDelete
   * @summary Delete Query
   * @request DELETE:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/activity/question/query/{queryId}
   * @secure
   */
  trialexecCareplanAeActivityQuestionQueryDelete = (
    careplanId: string,
    adverseEventId: string,
    queryId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/activity/question/query/${queryId}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update query for question in careplan by careplanId, activityId, questionId, visitId, and queryId
   *
   * @tags Careplan Query
   * @name TrialexecCareplanAeActivityQuestionQueryUpdate
   * @summary Update query for question in careplan
   * @request PUT:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/activity/question/query/{queryId}
   * @secure
   */
  trialexecCareplanAeActivityQuestionQueryUpdate = (
    careplanId: string,
    adverseEventId: string,
    queryId: string,
    data: QueryPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/activity/question/query/${queryId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update participant question spec nodes with change log by careplanId, adverseEventId, activityId, questionId
   *
   * @tags Careplan Changelog
   * @name TrialexecCareplanAeActivityQuestionUpdate
   * @summary Update participant question spec nodes with change log
   * @request PUT:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/activity/question
   * @secure
   */
  trialexecCareplanAeActivityQuestionUpdate = (
    careplanId: string,
    adverseEventId: string,
    data: QuestionPayloadWitChangeLog,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/activity/question`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Complete careplan AdverseEvent Activity by careplanId, adverseEventId, activityId.
   *
   * @tags Careplan AdverseEvent Activity
   * @name TrialexecCareplanAeCompleteCreate
   * @summary Complete careplan AdverseEvent Activity
   * @request POST:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/complete
   * @secure
   */
  trialexecCareplanAeCompleteCreate = (
    careplanId: string,
    adverseEventId: string,
    data: UpdateActivityPayload,
    params: RequestParams = {}
  ) =>
    this.request<VisitActivityGraph, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/complete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Creates AdverseEvent
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanAeCreate
   * @summary Creates AdverseEvent
   * @request POST:/api/trialexec/careplan/{careplanId}/ae
   * @secure
   */
  trialexecCareplanAeCreate = (
    careplanId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputAdverseEvent, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Delete CarePlan Adverse Event
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanAeDelete
   * @summary Delete CarePlan Adverse Event
   * @request DELETE:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}
   * @secure
   */
  trialexecCareplanAeDelete = (
    careplanId: string,
    adverseEventId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description List AdverseEvent
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanAeDetail
   * @summary List AdverseEvent
   * @request GET:/api/trialexec/careplan/{careplanId}/ae
   * @secure
   */
  trialexecCareplanAeDetail = (
    careplanId: string,
    query?: {
      /** status of AE */
      status?: string;
      /** is the AE serious \ */
      serious?: string;
      /** pass \ */
      'serious-search'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputAdverseEvent[], void>({
      path: `/api/trialexec/careplan/${careplanId}/ae`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get AdverseEvent
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanAeDetail2
   * @summary Get AdverseEvent
   * @request GET:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}
   * @originalName trialexecCareplanAeDetail
   * @duplicate
   * @secure
   */
  trialexecCareplanAeDetail2 = (
    careplanId: string,
    adverseEventId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputAdverseEvent, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description update careplan adverse event
   *
   * @tags Update careplan AdverseEvent
   * @name TrialexecCareplanAeSaveCreate
   * @summary update careplan adverse event
   * @request POST:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/save
   * @secure
   */
  trialexecCareplanAeSaveCreate = (
    careplanId: string,
    adverseEventId: string,
    data: UpdateActivityPayload,
    query?: {
      /** eval=Only or eval=AndSave */
      eval?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description SignOff CarePlan Adverse Event
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanAeSignOffUpdate
   * @summary SignOff CarePlan Adverse Event
   * @request PUT:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/signOff
   * @secure
   */
  trialexecCareplanAeSignOffUpdate = (
    careplanId: string,
    adverseEventId: string,
    data: SignOffPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/signOff`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Complete CarePlan Adverse Event
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanAeTaskSignOffUpdate
   * @summary Complete CarePlan Adverse Event
   * @request PUT:/api/trialexec/careplan/{careplanId}/ae/{adverseEventId}/task/{taskId}/signOff
   * @secure
   */
  trialexecCareplanAeTaskSignOffUpdate = (
    careplanId: string,
    adverseEventId: string,
    taskId: string,
    data: SignOffPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/ae/${adverseEventId}/task/${taskId}/signOff`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Edit ConMed
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsActivityQuestionUpdate
   * @summary Edit ConMed
   * @request PUT:/api/trialexec/careplan/{careplanId}/conMeds/{conMedId}/activity/question
   * @secure
   */
  trialexecCareplanConMedsActivityQuestionUpdate = (
    careplanId: string,
    conMedId: string,
    data: QuestionPayloadWitChangeLog,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/${conMedId}/activity/question`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Add new ConMed V2
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsAddRowCreate
   * @summary Add new ConMed V2
   * @request POST:/api/trialexec/careplan/{careplanId}/conMeds/addRow
   * @secure
   */
  trialexecCareplanConMedsAddRowCreate = (
    careplanId: string,
    query: {
      /** category */
      category: string;
    },
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputTableDetailsV2, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/addRow`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete the concomitant medication of a subject
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsDelete
   * @summary Delete CarePlan ConMed
   * @request DELETE:/api/trialexec/careplan/{careplanId}/conMeds/{conMedId}
   * @secure
   */
  trialexecCareplanConMedsDelete = (
    careplanId: string,
    conMedId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/${conMedId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Delete  ConMed V2
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsDeleteRowDelete
   * @summary Delete  ConMed V2
   * @request DELETE:/api/trialexec/careplan/{careplanId}/conMeds/{conMedId}/deleteRow
   * @secure
   */
  trialexecCareplanConMedsDeleteRowDelete = (
    careplanId: string,
    conMedId: string,
    query: {
      /** category */
      category: string;
    },
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/${conMedId}/deleteRow`,
      method: 'DELETE',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description List concomitant medications at subject level
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsDetail
   * @summary List Con-Meds
   * @request GET:/api/trialexec/careplan/{careplanId}/conMeds
   * @secure
   */
  trialexecCareplanConMedsDetail = (
    careplanId: string,
    query?: {
      /** category */
      category?: string;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** EDC enabled flag */
      edcenabled?: boolean;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** name of conMed */
      name?: string;
      /** route of conMed */
      route?: string;
      /** condition of conMed */
      condition?: string;
      /** visit of conMed */
      visit?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputConMed, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get the concomitant medication of a subject
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsDetail2
   * @summary Get ConMed
   * @request GET:/api/trialexec/careplan/{careplanId}/conMeds/{conMedId}
   * @originalName trialexecCareplanConMedsDetail
   * @duplicate
   * @secure
   */
  trialexecCareplanConMedsDetail2 = (
    careplanId: string,
    conMedId: string,
    query: {
      /** category */
      category: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputConMed, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/${conMedId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Export concomitant medications at subject level
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsExportDetail
   * @summary Export Con-Meds
   * @request GET:/api/trialexec/careplan/{careplanId}/conMeds/export
   * @secure
   */
  trialexecCareplanConMedsExportDetail = (
    careplanId: string,
    query?: {
      /** category */
      category?: string;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** name of conMed */
      name?: string;
      /** route of conMed */
      route?: string;
      /** condition of conMed */
      condition?: string;
      /** visit of conMed */
      visit?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputConMed, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/export`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List concomitant medications at subject level
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsListRowsDetail
   * @summary List Con-Meds
   * @request GET:/api/trialexec/careplan/{careplanId}/conMeds/listRows
   * @secure
   */
  trialexecCareplanConMedsListRowsDetail = (
    careplanId: string,
    query?: {
      /** category */
      category?: string;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** EDC enabled flag */
      edcenabled?: boolean;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** name of conMed */
      name?: string;
      /** route of conMed */
      route?: string;
      /** condition of conMed */
      condition?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<TableOutput, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/listRows`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Save ConMed Activity
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsSaveCreate
   * @summary Save ConMed Activity
   * @request POST:/api/trialexec/careplan/{careplanId}/conMeds/save
   * @secure
   */
  trialexecCareplanConMedsSaveCreate = (
    careplanId: string,
    data: UpdateActivityPayload,
    query?: {
      /** eval=Only or eval=AndSave */
      eval?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputConMed, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Save ConMed V2
   *
   * @tags Con-Meds
   * @name TrialexecCareplanConMedsSaveRowCreate
   * @summary Save ConMed V2
   * @request POST:/api/trialexec/careplan/{careplanId}/conMeds/saveRow
   * @secure
   */
  trialexecCareplanConMedsSaveRowCreate = (
    careplanId: string,
    conMedId: string,
    query: {
      /** category */
      category: string;
    },
    data: UpdateActivityPayload,
    params: RequestParams = {}
  ) =>
    this.request<OutputTableDetailsV2, void>({
      path: `/api/trialexec/careplan/${careplanId}/conMeds/saveRow`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete careplan by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanDelete
   * @summary Delete careplan
   * @request DELETE:/api/trialexec/careplan/{careplanId}
   * @secure
   */
  trialexecCareplanDelete = (careplanId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description List careplan by id
   *
   * @tags Careplan
   * @name TrialexecCareplanDetail
   * @summary List careplan by id
   * @request GET:/api/trialexec/careplan/{careplanId}
   * @secure
   */
  trialexecCareplanDetail = (careplanId: string, params: RequestParams = {}) =>
    this.request<OutputCarePlan, void>({
      path: `/api/trialexec/careplan/${careplanId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Discontinue careplan by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanDiscontinueCreate
   * @summary Discontinue careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/discontinue
   * @secure
   */
  trialexecCareplanDiscontinueCreate = (
    careplanId: string,
    data: CPDiscontinuePayload,
    params: RequestParams = {}
  ) =>
    this.request<OutputCarePlan, void>({
      path: `/api/trialexec/careplan/${careplanId}/discontinue`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Get HRRF Activity details of a careplan
   *
   * @tags HRRF
   * @name TrialexecCareplanHrrfDetail
   * @summary Get HRRF Activity details of a careplan
   * @request GET:/api/trialexec/careplan/{careplanId}/hrrf
   * @secure
   */
  trialexecCareplanHrrfDetail = (
    careplanId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputHRRF, void>({
      path: `/api/trialexec/careplan/${careplanId}/hrrf`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Sends the signed hrrf docs to the participant
   *
   * @tags Documents
   * @name TrialexecCareplanHrrfSendHrrfDocsCreate
   * @summary Sends the signed hrrf docs to the participant
   * @request POST:/api/trialexec/careplan/{careplanId}/hrrf/sendHRRFDocs
   * @secure
   */
  trialexecCareplanHrrfSendHrrfDocsCreate = (
    careplanId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/hrrf/sendHRRFDocs`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Lists careplans
   *
   * @tags Careplan
   * @name TrialexecCareplanList
   * @summary Lists careplans
   * @request GET:/api/trialexec/careplan
   * @secure
   */
  trialexecCareplanList = (
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** what field of patient object to sort by */
      sort?: string;
      /** to be used with sort. Set to true for DESC */
      desc?: boolean;
      /** search for string in patient's first name */
      firstname?: string;
      /** subjectId */
      subjectId?: string;
      /** search for string in patient's last name */
      lastname?: string;
      /** search for string in patient's email ('+' symbol must be ascii encoded) */
      email?: string;
      /** search for string study's name */
      'study-name'?: string;
      /** filter careplans by ones attached to site by site's name */
      'site-name'?: string;
      /** filter careplans by ones attached to site by site's tildaid */
      'site-id'?: string;
      /** search for careplan by studyid */
      studyid?: string;
      /** search key to search for in patient info. ex. 'name'. 'site-name' will search for careplans attached to site with passed searchstr name */
      searchkey?: string;
      /** search value to search for in patient info. ex. 'taylor' */
      searchstr?: string;
      /** searches by careplan status. ex. 'Init' */
      status?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputCarePlanResponse, void>({
      path: `/api/trialexec/careplan`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Edit Medical History of a subject
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistoryActivityQuestionUpdate
   * @summary Edit Medical History
   * @request PUT:/api/trialexec/careplan/{careplanId}/medicalHistory/{medHistId}/activity/question
   * @secure
   */
  trialexecCareplanMedicalHistoryActivityQuestionUpdate = (
    careplanId: string,
    medHistId: string,
    data: QuestionPayloadWitChangeLog,
    query?: {
      /** category */
      category?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/${medHistId}/activity/question`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Add new Medical History V2
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistoryAddRowCreate
   * @summary Add new Medical History V2
   * @request POST:/api/trialexec/careplan/{careplanId}/medicalHistory/addRow
   * @secure
   */
  trialexecCareplanMedicalHistoryAddRowCreate = (
    careplanId: string,
    query: {
      /** category */
      category: string;
    },
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputTableDetailsV2, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/addRow`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete a Medical History of a subject
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistoryDelete
   * @summary Delete CarePlan Medical History
   * @request DELETE:/api/trialexec/careplan/{careplanId}/medicalHistory/{medHistId}
   * @secure
   */
  trialexecCareplanMedicalHistoryDelete = (
    careplanId: string,
    medHistId: string,
    query: {
      /** category */
      category: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/${medHistId}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Delete Medical History V2
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistoryDeleteRowDelete
   * @summary Delete Medical History V2
   * @request DELETE:/api/trialexec/careplan/{careplanId}/medicalHistory/{medHistId}/deleteRow
   * @secure
   */
  trialexecCareplanMedicalHistoryDeleteRowDelete = (
    careplanId: string,
    medHistId: string,
    query: {
      /** category */
      category: string;
    },
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/${medHistId}/deleteRow`,
      method: 'DELETE',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description List Medical History at subject level
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistoryDetail
   * @summary List Medical History
   * @request GET:/api/trialexec/careplan/{careplanId}/medicalHistory
   * @secure
   */
  trialexecCareplanMedicalHistoryDetail = (
    careplanId: string,
    query?: {
      /** category */
      category?: string;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** EDC enabled flag */
      edcenabled?: boolean;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** name */
      name?: string;
      /** visit */
      visit?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputMedHist, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get a Medical History of a subject
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistoryDetail2
   * @summary Get Medical History
   * @request GET:/api/trialexec/careplan/{careplanId}/medicalHistory/{medHistId}
   * @originalName trialexecCareplanMedicalHistoryDetail
   * @duplicate
   * @secure
   */
  trialexecCareplanMedicalHistoryDetail2 = (
    careplanId: string,
    medHistId: string,
    query: {
      /** category */
      category: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputMedHist, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/${medHistId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Export Medical History at subject level
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistoryExportDetail
   * @summary Export Medical History
   * @request GET:/api/trialexec/careplan/{careplanId}/medicalHistory/export
   * @secure
   */
  trialexecCareplanMedicalHistoryExportDetail = (
    careplanId: string,
    query?: {
      /** category */
      category?: string;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** name */
      name?: string;
      /** visit */
      visit?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputMedHist, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/export`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List Medical History at subject level
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistoryListRowsDetail
   * @summary List Medical History
   * @request GET:/api/trialexec/careplan/{careplanId}/medicalHistory/listRows
   * @secure
   */
  trialexecCareplanMedicalHistoryListRowsDetail = (
    careplanId: string,
    query?: {
      /** category */
      category?: string;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** EDC enabled flag */
      edcenabled?: boolean;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** name of Medical History */
      name?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<TableOutput, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/listRows`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Save Medical History
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistorySaveCreate
   * @summary Save Medical History
   * @request POST:/api/trialexec/careplan/{careplanId}/medicalHistory/save
   * @secure
   */
  trialexecCareplanMedicalHistorySaveCreate = (
    careplanId: string,
    data: UpdateActivityPayload,
    query?: {
      /** category */
      category?: string;
      /** eval=Only or eval=AndSave */
      eval?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputMedHist, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Save Medical History V2
   *
   * @tags Medical History
   * @name TrialexecCareplanMedicalHistorySaveRowCreate
   * @summary Save Medical History V2
   * @request POST:/api/trialexec/careplan/{careplanId}/medicalHistory/saveRow
   * @secure
   */
  trialexecCareplanMedicalHistorySaveRowCreate = (
    careplanId: string,
    medHistId: string,
    query: {
      /** category */
      category: string;
    },
    data: UpdateActivityPayload,
    params: RequestParams = {}
  ) =>
    this.request<OutputTableDetailsV2, void>({
      path: `/api/trialexec/careplan/${careplanId}/medicalHistory/saveRow`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Updates careplan notes by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanNotesCreate
   * @summary Updates careplan notes
   * @request POST:/api/trialexec/careplan/{careplanId}/notes
   * @secure
   */
  trialexecCareplanNotesCreate = (
    careplanId: string,
    data: ProgressNote,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/notes`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Createa careplan protocol deviations by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanPdCreate
   * @summary Creates careplan protocol deviations
   * @request POST:/api/trialexec/careplan/{careplanId}/pd
   * @secure
   */
  trialexecCareplanPdCreate = (
    careplanId: string,
    data: ProtocolDeviation,
    query?: {
      /** Complete the changes */
      complete?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputPDType, void>({
      path: `/api/trialexec/careplan/${careplanId}/pd`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete careplan protocol deviations by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanPdDelete
   * @summary Delete careplan protocol deviations
   * @request DELETE:/api/trialexec/careplan/{careplanId}/pd/{protocolDeviationId}
   * @secure
   */
  trialexecCareplanPdDelete = (
    careplanId: string,
    protocolDeviationId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/pd/${protocolDeviationId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get careplan protocol deviations by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanPdDetail
   * @summary Get careplan protocol deviations
   * @request GET:/api/trialexec/careplan/{careplanId}/pd
   * @secure
   */
  trialexecCareplanPdDetail = (
    careplanId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputProtocolDeviation, void>({
      path: `/api/trialexec/careplan/${careplanId}/pd`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get careplan protocol deviations by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanPdDetail2
   * @summary Get careplan protocol deviations
   * @request GET:/api/trialexec/careplan/{careplanId}/pd/{protocolDeviationId}
   * @originalName trialexecCareplanPdDetail
   * @duplicate
   * @secure
   */
  trialexecCareplanPdDetail2 = (
    careplanId: string,
    protocolDeviationId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputProtocolDeviation, void>({
      path: `/api/trialexec/careplan/${careplanId}/pd/${protocolDeviationId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates Protocol Deviation sign-off by careplanId, visitID, taskID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanPdSignOffCreate
   * @summary Creates Protocol Deviation sign-off
   * @request POST:/api/trialexec/careplan/{careplanId}/pd/{taskId}/signOff
   * @secure
   */
  trialexecCareplanPdSignOffCreate = (
    careplanId: string,
    taskId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/pd/${taskId}/signOff`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Updates careplan protocol deviations by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanPdUpdate
   * @summary Updates careplan protocol deviations
   * @request PUT:/api/trialexec/careplan/{careplanId}/pd/{protocolDeviationId}
   * @secure
   */
  trialexecCareplanPdUpdate = (
    careplanId: string,
    protocolDeviationId: string,
    data: ProtocolDeviation,
    query?: {
      /** Complete the changes */
      complete?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputPDType, void>({
      path: `/api/trialexec/careplan/${careplanId}/pd/${protocolDeviationId}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List careplan level progressNotes
   *
   * @tags ProgressNotes
   * @name TrialexecCareplanProgressnotesDetail
   * @summary List careplan level progressNotes
   * @request GET:/api/trialexec/careplan/{careplanId}/progressnotes
   * @secure
   */
  trialexecCareplanProgressnotesDetail = (
    careplanId: string,
    query?: {
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** what field of progress notes object to sort by */
      sort?: string;
      /** to be used with sort. Set to true for DESC */
      desc?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListCareplanProgressNotesOutput, void>({
      path: `/api/trialexec/careplan/${careplanId}/progressnotes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create query for question in careplan by careplanId, visitId, activityId, questionnaireID, questionId
   *
   * @tags Careplan Query
   * @name TrialexecCareplanQueryCreate
   * @summary Create query for question in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/query
   * @secure
   */
  trialexecCareplanQueryCreate = (
    careplanId: string,
    data: QueryPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/query`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get query details for question in careplan by careplanId, visitId, activityId, questionnaireID, questionId, and queryId
   *
   * @tags Careplan Query
   * @name TrialexecCareplanQueryCreate2
   * @summary Get query details for question in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/query/{queryId}
   * @originalName trialexecCareplanQueryCreate
   * @duplicate
   * @secure
   */
  trialexecCareplanQueryCreate2 = (
    careplanId: string,
    queryId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputQuery, void>({
      path: `/api/trialexec/careplan/${careplanId}/query/${queryId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete Query
   *
   * @tags Query
   * @name TrialexecCareplanQueryDelete
   * @summary Delete Query
   * @request DELETE:/api/trialexec/careplan/{careplanId}/query/{queryId}
   * @secure
   */
  trialexecCareplanQueryDelete = (
    careplanId: string,
    queryId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/query/${queryId}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update query for question in careplan by careplanId, visitId, activityId, questionnaireID, questionId, and queryId
   *
   * @tags Careplan Query
   * @name TrialexecCareplanQueryUpdate
   * @summary Update query for question in careplan
   * @request PUT:/api/trialexec/careplan/{careplanId}/query/{queryId}
   * @secure
   */
  trialexecCareplanQueryUpdate = (
    careplanId: string,
    queryId: string,
    data: QueryPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/query/${queryId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Marks careplan screenFail by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanScreenFailCreate
   * @summary Marks careplan screenFail
   * @request POST:/api/trialexec/careplan/{careplanId}/screenFail
   * @secure
   */
  trialexecCareplanScreenFailCreate = (
    careplanId: string,
    data: DisqualifyPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/screenFail`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Creates careplan side panel, different output depending on RequestingTab. 202 and 201 status codes return as 200, but I set them to please swagger
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanSidePanelCreate
   * @summary Creates careplan side panel
   * @request POST:/api/trialexec/careplan/{careplanId}/sidePanel
   * @secure
   */
  trialexecCareplanSidePanelCreate = (
    careplanId: string,
    data: SidePanelPayload,
    params: RequestParams = {}
  ) =>
    this.request<
      OutputSidePanelSignOff[] | OutputSidePanelTask | OutputSidePanelQuery[],
      void
    >({
      path: `/api/trialexec/careplan/${careplanId}/sidePanel`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create study protocol by careplanId
   *
   * @tags Study Protocol
   * @name TrialexecCareplanStudyprotocolDetail
   * @summary Create study protocol
   * @request GET:/api/trialexec/careplan/{careplanId}/studyprotocol
   * @secure
   */
  trialexecCareplanStudyprotocolDetail = (
    careplanId: string,
    data: ValidateIDs,
    query?: {
      /** to specify the role context to fine-tune behavior */
      roleContext?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OPStudyProtocol, void>({
      path: `/api/trialexec/careplan/${careplanId}/studyprotocol`,
      method: 'GET',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Creates task by carePlanID
   *
   * @tags Careplan Task
   * @name TrialexecCareplanTaskCreate
   * @summary Creates task
   * @request POST:/api/trialexec/careplan/{careplanId}/task
   * @secure
   */
  trialexecCareplanTaskCreate = (
    careplanId: string,
    data: TaskPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/task`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update careplan by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanUpdate
   * @summary Update careplan
   * @request PUT:/api/trialexec/careplan/{careplanId}
   * @secure
   */
  trialexecCareplanUpdate = (
    careplanId: string,
    data: CPUpdatePayload,
    params: RequestParams = {}
  ) =>
    this.request<OutputCarePlan, void>({
      path: `/api/trialexec/careplan/${careplanId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists questions from careplan activity by careplanId, activityId, and visitId
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivityAllQuestionsCreate
   * @summary Lists questions from careplan activity
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/allQuestions
   * @secure
   */
  trialexecCareplanVisitActivityAllQuestionsCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    query?: {
      /** edc-enabled */
      'edc-enabled'?: string;
      /** contains-text */
      'contains-text'?: string;
      /** formatTypeRequired */
      formatTypeRequired?: boolean;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/allQuestions`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Complete careplan Activity by careplanId, activityId, and visitId.
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivityCompleteCreate
   * @summary Complete careplan Activity
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/complete
   * @secure
   */
  trialexecCareplanVisitActivityCompleteCreate = (
    careplanId: string,
    visitId: string,
    data: UpdateActivityPayload,
    params: RequestParams = {}
  ) =>
    this.request<VisitActivityGraph, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/complete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists questionnaires in careplan by careplanId, activityId, and visitId
   *
   * @tags Careplan Questionnaire
   * @name TrialexecCareplanVisitActivityCreate
   * @summary Lists questionnaires in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity
   * @secure
   */
  trialexecCareplanVisitActivityCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputQuestionnaire[], void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets Activity Graph by carePlanID and visitId
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitActivitygraphDetail
   * @summary Gets Activity Graph
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activitygraph
   * @secure
   */
  trialexecCareplanVisitActivitygraphDetail = (
    careplanId: string,
    visitId: string,
    query?: {
      /** to specify the role context to fine-tune behavior */
      roleContext?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<VisitActivityGraph, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activitygraph`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update careplan activity notes by careplanId, participantActivityId, and participantVisitId
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivityNotesCreate
   * @summary Update careplan activity notes
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/notes
   * @secure
   */
  trialexecCareplanVisitActivityNotesCreate = (
    careplanId: string,
    visitId: string,
    data: ExecProgressNotes,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/notes`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create flag for question in careplan by careplanId, activityId, questionId, and visitId
   *
   * @tags Careplan Flag
   * @name TrialexecCareplanVisitActivityQuestionFlagCreate
   * @summary Create flag for question in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question/flag
   * @secure
   */
  trialexecCareplanVisitActivityQuestionFlagCreate = (
    careplanId: string,
    visitId: string,
    data: EligibilityFlagPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question/flag`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Delete flag for question in careplan by careplanId, activityId, questionId, visitId, and flagId
   *
   * @tags Careplan Flag
   * @name TrialexecCareplanVisitActivityQuestionFlagDelete
   * @summary Delete flag for question in careplan
   * @request DELETE:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question/flag/{flagId}
   * @secure
   */
  trialexecCareplanVisitActivityQuestionFlagDelete = (
    careplanId: string,
    visitId: string,
    flagId: string,
    data: EligibilityFlagPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question/flag/${flagId}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update flag for question in careplan by careplanId, activityId, questionId, visitId, and flagId
   *
   * @tags Careplan Flag
   * @name TrialexecCareplanVisitActivityQuestionFlagUpdate
   * @summary Update flag for question in careplan
   * @request PUT:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question/flag/{flagId}
   * @secure
   */
  trialexecCareplanVisitActivityQuestionFlagUpdate = (
    careplanId: string,
    visitId: string,
    flagId: string,
    data: EligibilityFlagPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question/flag/${flagId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Save careplan questionnaire by careplanId, activityId, and visitId. Different results, 200 if activity completed, otherwise 201
   *
   * @tags Careplan Questionnaire
   * @name TrialexecCareplanVisitActivityQuestionnaireSaveCreate
   * @summary Save careplan questionnaire
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/questionnaire/save
   * @secure
   */
  trialexecCareplanVisitActivityQuestionnaireSaveCreate = (
    careplanId: string,
    visitId: string,
    data: UpdateActivityPayload,
    query?: {
      /** taskID */
      taskID?: string;
      /** eval=Only or eval=AndSave */
      eval?: string;
      /** completed */
      completed?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivity[] | OutputActivityDetails[], void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/questionnaire/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create query for question in careplan by careplanId, activityId, questionId, and visitId
   *
   * @tags Careplan Query
   * @name TrialexecCareplanVisitActivityQuestionQueryCreate
   * @summary Create query for question in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question/query
   * @secure
   */
  trialexecCareplanVisitActivityQuestionQueryCreate = (
    careplanId: string,
    visitId: string,
    data: QueryPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question/query`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get query details for question in careplan by careplanId, activityId, questionId, visitId, and queryId
   *
   * @tags Careplan Query
   * @name TrialexecCareplanVisitActivityQuestionQueryCreate2
   * @summary Get query details for question in careplan
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question/query/{queryId}
   * @originalName trialexecCareplanVisitActivityQuestionQueryCreate
   * @duplicate
   * @secure
   */
  trialexecCareplanVisitActivityQuestionQueryCreate2 = (
    careplanId: string,
    visitId: string,
    queryId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputQuery, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question/query/${queryId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete Query
   *
   * @tags Query
   * @name TrialexecCareplanVisitActivityQuestionQueryDelete
   * @summary Delete Query
   * @request DELETE:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question/query/{queryId}
   * @secure
   */
  trialexecCareplanVisitActivityQuestionQueryDelete = (
    careplanId: string,
    visitId: string,
    queryId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question/query/${queryId}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update query for question in careplan by careplanId, activityId, questionId, visitId, and queryId
   *
   * @tags Careplan Visit Query
   * @name TrialexecCareplanVisitActivityQuestionQueryUpdate
   * @summary Update query for question in careplan
   * @request PUT:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question/query/{queryId}
   * @secure
   */
  trialexecCareplanVisitActivityQuestionQueryUpdate = (
    careplanId: string,
    visitId: string,
    queryId: string,
    data: QueryPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question/query/${queryId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Save careplan question by careplanId, activityId, and visitId. Different results, 200 if activity completed, otherwise 201
   *
   * @tags Careplan Question
   * @name TrialexecCareplanVisitActivityQuestionSaveCreate
   * @summary Save careplan question
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question/save
   * @secure
   */
  trialexecCareplanVisitActivityQuestionSaveCreate = (
    careplanId: string,
    visitId: string,
    data: UpdateActivityPayload,
    query?: {
      /** eval=Only or eval=AndSave */
      eval?: string;
      /** completed */
      completed?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update participant question spec nodes with change log by careplanId, activityId, questionId, and visitId
   *
   * @tags Careplan Changelog
   * @name TrialexecCareplanVisitActivityQuestionUpdate
   * @summary Update participant question spec nodes with change log
   * @request PUT:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/question
   * @secure
   */
  trialexecCareplanVisitActivityQuestionUpdate = (
    careplanId: string,
    visitId: string,
    data: QuestionPayloadWitChangeLog,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/question`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Save careplan activity by careplanId, activityId, and visitId.
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivitySaveCreate
   * @summary Save careplan activity
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/save
   * @secure
   */
  trialexecCareplanVisitActivitySaveCreate = (
    careplanId: string,
    visitId: string,
    data: UpdateActivityPayload,
    query?: {
      /** eval=Only or eval=AndSave or eval=Partial */
      eval?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Sends the signed econsent docs to the participant
   *
   * @tags Documents
   * @name TrialexecCareplanVisitActivitySendEConsentDocsCreate
   * @summary Sends the signed econsent docs to the participant
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/sendEConsentDocs
   * @secure
   */
  trialexecCareplanVisitActivitySendEConsentDocsCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/sendEConsentDocs`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Sends the Activity link to the participant
   *
   * @tags Activity
   * @name TrialexecCareplanVisitActivitySendLinkCreate
   * @summary Sends the Activity link to the participant
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/sendLink
   * @secure
   */
  trialexecCareplanVisitActivitySendLinkCreate = (
    careplanId: string,
    visitId: string,
    data: CommunicationInfoPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/sendLink`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Skip careplan activity by careplanId, activityId, and visitId
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivitySkipCreate
   * @summary Skip careplan activity
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/skip
   * @secure
   */
  trialexecCareplanVisitActivitySkipCreate = (
    careplanId: string,
    visitId: string,
    data: SkipActivityPayload,
    params: RequestParams = {}
  ) =>
    this.request<VisitActivityGraph, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/skip`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Start careplan activity by careplanId, activityId, and visitId
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivityStartCreate
   * @summary Start careplan activity
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/start
   * @secure
   */
  trialexecCareplanVisitActivityStartCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivity[], void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/start`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Switch Activity to offline mode and lists questions
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivitySwitchToOfflineCreate
   * @summary Switch Activity to offline mode and lists questions
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/switchToOffline
   * @secure
   */
  trialexecCareplanVisitActivitySwitchToOfflineCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/switchToOffline`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Switch Activity to online mode and lists questions
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivitySwitchToOnlineCreate
   * @summary Switch Activity to online mode and lists questions
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/switchToOnline
   * @secure
   */
  trialexecCareplanVisitActivitySwitchToOnlineCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/switchToOnline`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update careplan activity task by careplanId, activityId, and visitId
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivityTaskCreate
   * @summary Update careplan activity task
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/task
   * @secure
   */
  trialexecCareplanVisitActivityTaskCreate = (
    careplanId: string,
    visitId: string,
    data: ExecTaskPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/task`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Unlock careplan activity by careplanId, activityId, and visitId
   *
   * @tags Careplan Activity
   * @name TrialexecCareplanVisitActivityUnlockCreate
   * @summary Unlock careplan activity
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity/unlock
   * @secure
   */
  trialexecCareplanVisitActivityUnlockCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivity[], void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity/unlock`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update Activity
   *
   * @tags Activity
   * @name TrialexecCareplanVisitActivityUpdate
   * @summary Update Activity
   * @request PUT:/api/trialexec/careplan/{careplanId}/visit/{visitId}/activity
   * @secure
   */
  trialexecCareplanVisitActivityUpdate = (
    careplanId: string,
    visitId: string,
    data: UpdateActivityStatusPayLoad,
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/activity`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists team for visit
   *
   * @tags Visit
   * @name TrialexecCareplanVisitActorsDetail
   * @summary Lists team for visit
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/{visitId}/actors
   * @secure
   */
  trialexecCareplanVisitActorsDetail = (
    careplanId: string,
    visitId: string,
    params: RequestParams = {}
  ) =>
    this.request<StudyActorResponse[], void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/actors`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Complete Visit AdverseEvent Activity by careplanId, adverseEventId, visitId, activityId.
   *
   * @tags Visit AdverseEvent Activity
   * @name TrialexecCareplanVisitAeCompleteCreate
   * @summary Complete Visit AdverseEvent Activity
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/ae/{adverseEventId}/complete
   * @secure
   */
  trialexecCareplanVisitAeCompleteCreate = (
    careplanId: string,
    visitId: string,
    adverseEventId: string,
    data: UpdateActivityPayload,
    params: RequestParams = {}
  ) =>
    this.request<VisitActivityGraph, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/ae/${adverseEventId}/complete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Creates AdverseEvent
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanVisitAeCreate
   * @summary Creates AdverseEvent
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/ae
   * @secure
   */
  trialexecCareplanVisitAeCreate = (
    careplanId: string,
    visitId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputAdverseEvent, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/ae`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Delete Visit Adverse Event
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanVisitAeDelete
   * @summary Delete Visit Adverse Event
   * @request DELETE:/api/trialexec/careplan/{careplanId}/visit/{visitId}/ae/{adverseEventId}
   * @secure
   */
  trialexecCareplanVisitAeDelete = (
    careplanId: string,
    visitId: string,
    adverseEventId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/ae/${adverseEventId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get AdverseEvent
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanVisitAeDetail
   * @summary Get AdverseEvent
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/{visitId}/ae/{adverseEventId}
   * @secure
   */
  trialexecCareplanVisitAeDetail = (
    careplanId: string,
    visitId: string,
    adverseEventId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputAdverseEvent, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/ae/${adverseEventId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description update visit adverse event
   *
   * @tags Update visit AdverseEvent
   * @name TrialexecCareplanVisitAeSaveCreate
   * @summary update visit adverse event
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/ae/{adverseEventId}/save
   * @secure
   */
  trialexecCareplanVisitAeSaveCreate = (
    careplanId: string,
    visitId: string,
    adverseEventId: string,
    data: UpdateActivityPayload,
    query?: {
      /** eval=Only or eval=AndSave */
      eval?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/ae/${adverseEventId}/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description SignOff Visit Adverse Event
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanVisitAeSignOffUpdate
   * @summary SignOff Visit Adverse Event
   * @request PUT:/api/trialexec/careplan/{careplanId}/visit/{visitId}/ae/{adverseEventId}/signOff
   * @secure
   */
  trialexecCareplanVisitAeSignOffUpdate = (
    careplanId: string,
    visitId: string,
    adverseEventId: string,
    data: SignOffPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/ae/${adverseEventId}/signOff`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Complete Visit Adverse Event
   *
   * @tags AdverseEvent
   * @name TrialexecCareplanVisitAeTaskSignOffUpdate
   * @summary Complete Visit Adverse Event
   * @request PUT:/api/trialexec/careplan/{careplanId}/visit/{visitId}/ae/{adverseEventId}/task/{taskId}/signOff
   * @secure
   */
  trialexecCareplanVisitAeTaskSignOffUpdate = (
    careplanId: string,
    visitId: string,
    adverseEventId: string,
    taskId: string,
    data: SignOffPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/ae/${adverseEventId}/task/${taskId}/signOff`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Retrieves visits associated with a specific careplan by careplanId
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitAllDetail
   * @summary Get visits from careplan
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/all
   * @secure
   */
  trialexecCareplanVisitAllDetail = (
    careplanId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputVisitV2[], string>({
      path: `/api/trialexec/careplan/${careplanId}/visit/all`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Check in to careplan visit by careplanId and visitID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitCheckinCreate
   * @summary Check in to careplan visit
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/checkin
   * @secure
   */
  trialexecCareplanVisitCheckinCreate = (
    careplanId: string,
    visitId: string,
    query?: {
      /** edc-enabled */
      'edc-enabled'?: string;
      /** contains-text */
      'contains-text'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/checkin`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Deprecated Use VisitScreenFail.
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitDisqualifyCreate
   * @summary Deprecated Use VisitScreenFail
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/disqualify
   * @secure
   */
  trialexecCareplanVisitDisqualifyCreate = (
    careplanId: string,
    visitId: string,
    data: DisqualifyPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/disqualify`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Updates careplan visit notes by careplanId and participantVisitID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitNotesCreate
   * @summary Updates careplan visit notes
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/notes
   * @secure
   */
  trialexecCareplanVisitNotesCreate = (
    careplanId: string,
    visitId: string,
    data: ExecProgressNotes,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/notes`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create careplan visit protocol deviations by careplanId and visitID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitPdCreate
   * @summary Create careplan visit protocol deviations
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/pd
   * @secure
   */
  trialexecCareplanVisitPdCreate = (
    careplanId: string,
    visitId: string,
    data: ProtocolDeviation,
    query?: {
      /** Complete the changes */
      complete?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputPDType, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/pd`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes careplan visit protocol deviations by careplanId and visitID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitPdDelete
   * @summary Deletes careplan visit protocol deviations
   * @request DELETE:/api/trialexec/careplan/{careplanId}/visit/{visitId}/pd/{protocolDeviationId}
   * @secure
   */
  trialexecCareplanVisitPdDelete = (
    careplanId: string,
    visitId: string,
    protocolDeviationId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/pd/${protocolDeviationId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get careplan protocol deviations by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanVisitPdDetail
   * @summary Get careplan protocol deviations
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/{visitId}/pd/
   * @secure
   */
  trialexecCareplanVisitPdDetail = (
    careplanId: string,
    visitId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputProtocolDeviation, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/pd/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get careplan protocol deviations by careplanId
   *
   * @tags Careplan
   * @name TrialexecCareplanVisitPdDetail2
   * @summary Get careplan protocol deviations
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/{visitId}/pd/{protocolDeviationId}
   * @originalName trialexecCareplanVisitPdDetail
   * @duplicate
   * @secure
   */
  trialexecCareplanVisitPdDetail2 = (
    careplanId: string,
    visitId: string,
    protocolDeviationId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputProtocolDeviation, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/pd/${protocolDeviationId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates Protocol Deviation sign-off by careplanId, visitID, taskID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitPdSignOffCreate
   * @summary Creates Protocol Deviation sign-off
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/pd/{taskId}/signOff
   * @secure
   */
  trialexecCareplanVisitPdSignOffCreate = (
    careplanId: string,
    visitId: string,
    taskId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/pd/${taskId}/signOff`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Updates careplan visit protocol deviations by careplanId and visitID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitPdUpdate
   * @summary Updates careplan visit protocol deviations
   * @request PUT:/api/trialexec/careplan/{careplanId}/visit/{visitId}/pd/{protocolDeviationId}
   * @secure
   */
  trialexecCareplanVisitPdUpdate = (
    careplanId: string,
    visitId: string,
    protocolDeviationId: string,
    data: ProtocolDeviation,
    query?: {
      /** Complete the changes */
      complete?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputPDType, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/pd/${protocolDeviationId}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Get pre post visit tasks & todos by careplanId and visitID
   *
   * @tags Careplan tasks & todos
   * @name TrialexecCareplanVisitPreVisitDetail
   * @summary Get pre post visit tasks & todos
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/{visitId}/preVisit
   * @secure
   */
  trialexecCareplanVisitPreVisitDetail = (
    careplanId: string,
    visitId: string,
    query?: {
      /** post-visit */
      'post-visit'?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputPrePostVisit, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/preVisit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update pre post visit todos by careplanId and visitID
   *
   * @tags Careplan Todo
   * @name TrialexecCareplanVisitPreVisitTodoCreate
   * @summary Update pre post visit todos
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/preVisitTodo
   * @secure
   */
  trialexecCareplanVisitPreVisitTodoCreate = (
    careplanId: string,
    visitId: string,
    data: OutputTodo[],
    query?: {
      /** taskID */
      taskID?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/preVisitTodo`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get pre post visit todos by careplanId and visitID
   *
   * @tags Careplan Todo
   * @name TrialexecCareplanVisitPreVisitTodoDetail
   * @summary Get pre post visit todos
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/{visitId}/preVisitTodo
   * @secure
   */
  trialexecCareplanVisitPreVisitTodoDetail = (
    careplanId: string,
    visitId: string,
    query?: {
      /** post-visit */
      'post-visit'?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputPrePostVisit, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/preVisitTodo`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Marks visit screenFail by careplanId, visitID, taskID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitScreenFailCreate
   * @summary Marks visit screenFail
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/screenFail
   * @secure
   */
  trialexecCareplanVisitScreenFailCreate = (
    careplanId: string,
    visitId: string,
    data: DisqualifyPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/screenFail`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Creates visit side panel, different output depending on RequestingTab. 202 and 201 status codes return as 200, but I set them to please swagger
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitSidePanelCreate
   * @summary Creates visit side panel
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/sidePanel
   * @secure
   */
  trialexecCareplanVisitSidePanelCreate = (
    careplanId: string,
    visitId: string,
    data: SidePanelPayload,
    params: RequestParams = {}
  ) =>
    this.request<
      | OutputSidePanelProgressNote
      | OutputSidePanelTask
      | OutputSidePanelChangeLog[]
      | OutputSidePanelSignOff[]
      | OutputSidePanelQuery[]
      | OutputSidePanelProtocolDeviation
      | OutputAdverseEvent[],
      void
    >({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/sidePanel`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Creates visit sign-off by careplanId, visitID, taskID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitSignOffCreate
   * @summary Creates visit sign-off
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/signOff
   * @secure
   */
  trialexecCareplanVisitSignOffCreate = (
    careplanId: string,
    visitId: string,
    data: SignOffPayload,
    query?: {
      /** taskID */
      taskID?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/signOff`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Start careplan visit by careplanId and visitID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitStartCreate
   * @summary Start careplan visit
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/start
   * @secure
   */
  trialexecCareplanVisitStartCreate = (
    careplanId: string,
    visitId: string,
    query?: {
      /** edc-enabled */
      'edc-enabled'?: string;
      /** contains-text */
      'contains-text'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/start`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Gets visit summary by careplanId and visitID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitSummaryDetail
   * @summary Gets visit summary
   * @request GET:/api/trialexec/careplan/{careplanId}/visit/{visitId}/summary
   * @secure
   */
  trialexecCareplanVisitSummaryDetail = (
    careplanId: string,
    visitId: string,
    query?: {
      /** edc-enabled */
      'edc-enabled'?: string;
      /** contains-text */
      'contains-text'?: string;
      /** agId */
      agId?: string;
      /** aId */
      aId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OPVisitSummary, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/summary`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates careplan visit task by careplanId and visitID
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitTaskCreate
   * @summary Creates careplan visit task
   * @request POST:/api/trialexec/careplan/{careplanId}/visit/{visitId}/task
   * @secure
   */
  trialexecCareplanVisitTaskCreate = (
    careplanId: string,
    visitId: string,
    data: TaskPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}/task`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create careplan visit schedule update by careplanId and visitId
   *
   * @tags Careplan Visit
   * @name TrialexecCareplanVisitUpdate
   * @summary Create careplan visit schedule update
   * @request PUT:/api/trialexec/careplan/{careplanId}/visit/{visitId}
   * @secure
   */
  trialexecCareplanVisitUpdate = (
    careplanId: string,
    visitId: string,
    data: VisitUpdatePayLoad,
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/trialexec/careplan/${careplanId}/visit/${visitId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the forms available to the caller
   *
   * @tags Form
   * @name TrialexecFormList
   * @summary Lists forms
   * @request GET:/api/trialexec/form
   * @secure
   */
  trialexecFormList = (params: RequestParams = {}) =>
    this.request<Form[], void>({
      path: `/api/trialexec/form`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates participant form
   *
   * @tags Form
   * @name TrialexecFormParticipantCreate
   * @summary Creates participant form
   * @request POST:/api/trialexec/form/{formId}/participant
   * @secure
   */
  trialexecFormParticipantCreate = (
    formId: string,
    query?: {
      /** participantID */
      participantID?: string;
      /** Optional flag to link ParticipantForm to study (Required for Screener type) */
      'study-id'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ParticipantForm, void>({
      path: `/api/trialexec/form/${formId}/participant`,
      method: 'POST',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the participant forms by participantId
   *
   * @tags Participant Forms
   * @name TrialexecFormParticipantFormDetail
   * @summary Lists the participant forms
   * @request GET:/api/trialexec/form/participantForm/{participantId}
   * @secure
   */
  trialexecFormParticipantFormDetail = (
    participantId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputParticipantForm[], void>({
      path: `/api/trialexec/form/participantForm/${participantId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the query counts available to the caller
   *
   * @tags QMS
   * @name TrialexecMonitorqueriesStudyCountCreate
   * @summary QMS Queries Dashboard
   * @request POST:/api/trialexec/monitorqueries/study/{studyId}/count
   * @secure
   */
  trialexecMonitorqueriesStudyCountCreate = (
    studyId: string,
    data: MonitorQueryParams,
    params: RequestParams = {}
  ) =>
    this.request<OutputMonitorQueryPerSiteCounts, void>({
      path: `/api/trialexec/monitorqueries/study/${studyId}/count`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the query filter list available to the caller
   *
   * @tags QMS
   * @name TrialexecMonitorqueriesStudyFilterDetail
   * @summary QMS Queries Dashboard
   * @request GET:/api/trialexec/monitorqueries/study/{studyId}/filter
   * @secure
   */
  trialexecMonitorqueriesStudyFilterDetail = (
    studyId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputMonitorQueryFilter, void>({
      path: `/api/trialexec/monitorqueries/study/${studyId}/filter`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the query count list available to the caller
   *
   * @tags QMS
   * @name TrialexecMonitorqueriesStudyListCreate
   * @summary QMS Queries Dashboard
   * @request POST:/api/trialexec/monitorqueries/study/{studyId}/list
   * @secure
   */
  trialexecMonitorqueriesStudyListCreate = (
    studyId: string,
    data: MonitorQueryParams,
    params: RequestParams = {}
  ) =>
    this.request<OutputMonitorQueryPerSite, void>({
      path: `/api/trialexec/monitorqueries/study/${studyId}/list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the queries available to the caller by type
   *
   * @tags QMS
   * @name TrialexecMonitorqueriesStudyTypeCreate
   * @summary QMS Queries Dashboard By Type
   * @request POST:/api/trialexec/monitorqueries/study/{studyId}/type
   * @secure
   */
  trialexecMonitorqueriesStudyTypeCreate = (
    studyId: string,
    data: MonitorQueryTypeParams,
    params: RequestParams = {}
  ) =>
    this.request<OutputMonitorQueryPerType, void>({
      path: `/api/trialexec/monitorqueries/study/${studyId}/type`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List the participant form's questions by participantFormId and activityId
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormActivityAllQuestionsCreate
   * @summary List the participant form's questions
   * @request POST:/api/trialexec/participantForm/{participantFormId}/activity/allQuestions
   * @secure
   */
  trialexecParticipantFormActivityAllQuestionsCreate = (
    participantFormId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/participantForm/${participantFormId}/activity/allQuestions`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Eval the participant form's questionnaires by participantFormId and activityId
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormActivityCreate
   * @summary Eval the participant form's questionnaires
   * @request POST:/api/trialexec/participantForm/{participantFormId}/activity
   * @secure
   */
  trialexecParticipantFormActivityCreate = (
    participantFormId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<boolean, void>({
      path: `/api/trialexec/participantForm/${participantFormId}/activity`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Kicks off the participant forms activity by participantFormId and activityId
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormActivityRestartCreate
   * @summary Kicks off the participant forms activity
   * @request POST:/api/trialexec/participantForm/{participantFormId}/activity/restart
   * @secure
   */
  trialexecParticipantFormActivityRestartCreate = (
    participantFormId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivity[], void>({
      path: `/api/trialexec/participantForm/${participantFormId}/activity/restart`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Saves the participant form's questionnaire by participantFormId
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormActivitySaveCreate
   * @summary Saves the participant form's questionnaire
   * @request POST:/api/trialexec/participantForm/{participantFormId}/activity/save
   * @secure
   */
  trialexecParticipantFormActivitySaveCreate = (
    participantFormId: string,
    data: UpdateActivityPayload,
    query?: {
      /** completed */
      completed?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/participantForm/${participantFormId}/activity/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Kicks off the participant forms activity by participantFormId and activityId
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormActivityStartCreate
   * @summary Kicks off the participant forms activity
   * @request POST:/api/trialexec/participantForm/{participantFormId}/activity/start
   * @secure
   */
  trialexecParticipantFormActivityStartCreate = (
    participantFormId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivity[], void>({
      path: `/api/trialexec/participantForm/${participantFormId}/activity/start`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Associate participant form(s) to participant
   *
   * @tags Form
   * @name TrialexecParticipantFormCreate
   * @summary Associate participant form(s) to participant
   * @request POST:/api/trialexec/participantForm/{participantId}
   * @secure
   */
  trialexecParticipantFormCreate = (
    participantId: string,
    data: GenericKeyArr,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/participantForm/${participantId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Lists the participant forms available to the caller
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormList
   * @summary Lists the participant forms
   * @request GET:/api/trialexec/participantForm
   * @secure
   */
  trialexecParticipantFormList = (params: RequestParams = {}) =>
    this.request<OutputParticipantForm[], void>({
      path: `/api/trialexec/participantForm`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates Form sign-off by participantFormId, taskID
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormSignOffCreate
   * @summary Creates Form sign-off
   * @request POST:/api/trialexec/participantForm/{participantFormId}/signOff
   * @secure
   */
  trialexecParticipantFormSignOffCreate = (
    participantFormId: string,
    data: SignOffPayload,
    query?: {
      /** taskID */
      taskID?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/participantForm/${participantFormId}/signOff`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Lists the participant forms by participantFormId
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormStudySubjectSummaryDetail
   * @summary Lists the participant forms summary
   * @request GET:/api/trialexec/participantForm/study/{studyId}/subject/{subjectId}/summary
   * @secure
   */
  trialexecParticipantFormStudySubjectSummaryDetail = (
    studyId: string,
    subjectId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputPFormSummary, void>({
      path: `/api/trialexec/participantForm/study/${studyId}/subject/${subjectId}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the participant forms by participantFormId
   *
   * @tags Participant Forms
   * @name TrialexecParticipantFormSummaryDetail
   * @summary Lists the participant forms summary
   * @request GET:/api/trialexec/participantForm/{participantFormId}/summary
   * @secure
   */
  trialexecParticipantFormSummaryDetail = (
    participantFormId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputPFormSummary, void>({
      path: `/api/trialexec/participantForm/${participantFormId}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get plan definition by tildaid
   *
   * @tags Execsvc Plan Definitions
   * @name TrialexecPlandefinitionDetail
   * @summary Get plan definition by ID
   * @request GET:/api/trialexec/plandefinition/{plandefinitionId}
   * @secure
   */
  trialexecPlandefinitionDetail = (
    plandefinitionId: string,
    params: RequestParams = {}
  ) =>
    this.request<DslPlanDefinition, void>({
      path: `/api/trialexec/plandefinition/${plandefinitionId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List plan definitions by organization with an option of filtering by studyID
   *
   * @tags Execsvc Plan Definitions
   * @name TrialexecPlandefinitionList
   * @summary List plan definitions
   * @request GET:/api/trialexec/plandefinition
   * @secure
   */
  trialexecPlandefinitionList = (
    query?: {
      /** Can take multiple study-id values at once */
      'study-id'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<DslPlanDefinition[], void>({
      path: `/api/trialexec/plandefinition`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the careplans for the plan definition by plandefinitionId
   *
   * @tags Careplan
   * @name TrialexecPlandefinitionParticipantDetail
   * @summary Lists the careplans for the plan definition
   * @request GET:/api/trialexec/plandefinition/{plandefinitionId}/participant
   * @secure
   */
  trialexecPlandefinitionParticipantDetail = (
    plandefinitionId: string,
    params: RequestParams = {}
  ) =>
    this.request<CarePlan[], void>({
      path: `/api/trialexec/plandefinition/${plandefinitionId}/participant`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Delete progress note by ID
   *
   * @tags ProgressNotes
   * @name TrialexecProgressnoteDelete
   * @summary Delete progress note
   * @request DELETE:/api/trialexec/progressnote/{progressNoteID}
   * @secure
   */
  trialexecProgressnoteDelete = (
    careplanId: string,
    progressNoteId: string,
    params: RequestParams = {}
  ) =>
    this.request<ProgressNote, void>({
      path: `/api/trialexec/progressnote/${progressNoteId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get progress note by ID
   *
   * @tags ProgressNotes
   * @name TrialexecProgressnoteDetail
   * @summary Get progress note
   * @request GET:/api/trialexec/progressnote/{progressNoteID}
   * @secure
   */
  trialexecProgressnoteDetail = (
    progressNoteId: string,
    params: RequestParams = {}
  ) =>
    this.request<ProgressNote, void>({
      path: `/api/trialexec/progressnote/${progressNoteId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update progress note by ID
   *
   * @tags ProgressNotes
   * @name TrialexecProgressnoteUpdate
   * @summary Update progress note
   * @request PUT:/api/trialexec/progressnote/{progressNoteID}
   * @secure
   */
  trialexecProgressnoteUpdate = (
    careplanId: string,
    progressNoteId: string,
    data: UpdateProgressNotePayload,
    params: RequestParams = {}
  ) =>
    this.request<ProgressNote, void>({
      path: `/api/trialexec/progressnote/${progressNoteId}`,
      method: 'PUT',
      body: data,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the crf data for a study protocol by protocolVersionId
   *
   * @tags Study Plan Definition
   * @name TrialexecProtocolCrfDetail
   * @summary Retrieves CRF data based on filters
   * @request GET:/api/trialexec/protocol/{protocolVersionId}/crf
   * @secure
   */
  trialexecProtocolCrfDetail = (
    protocolVersionId: string,
    params: RequestParams = {}
  ) =>
    this.request<StudyProtocol, void>({
      path: `/api/trialexec/protocol/${protocolVersionId}/crf`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List protocol deviations
   *
   * @tags Protocol Deviation
   * @name TrialexecProtocoldeviationList
   * @summary List protocol deviations
   * @request GET:/api/trialexec/protocoldeviation
   * @secure
   */
  trialexecProtocoldeviationList = (
    query?: {
      /** Return protocol deviations of passed study */
      'study-id'?: string;
      /** Return protocol deviations of passed careplan */
      'careplan-id'?: string;
      /** Return protocol deviations of passed visit */
      'visit-id'?: string;
      /** Include deleted protocol deviations in list */
      deleted?: boolean;
      /** Filter by state of protocol deviation */
      state?: string;
      /** Filter by type of protocol deviation */
      typeOfDeviation?: string;
      /** Filter by the action taken of protocol deviation */
      actionTaken?: string;
      /** Filter by which eye */
      whichEye?: string;
      /** number of entries to skip */
      skip?: number;
      /** number of entries per page */
      limit?: number;
      /** key to sort by ex. 'createdat' */
      sort?: string;
      /** number of entries per page */
      desc?: boolean;
      /** search key to search for value of field in Protocol Deviation. ex. 'description' will search for PDs with passed searchstr outcome */
      searchkey?: string;
      /** search value to search for in Protocol Deviation info. ex. 'Out of town' */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputProtocolDeviation, void>({
      path: `/api/trialexec/protocoldeviation`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the plan definition for a study protocol by protocolVersionId
   *
   * @tags Study Plan Definition
   * @name TrialexecProtocolStudyprotocolDetail
   * @summary Gets the plan definition for a study protocol
   * @request GET:/api/trialexec/protocol/{protocolVersionId}/studyprotocol
   * @secure
   */
  trialexecProtocolStudyprotocolDetail = (
    protocolVersionId: string,
    params: RequestParams = {}
  ) =>
    this.request<StudyProtocol, void>({
      path: `/api/trialexec/protocol/${protocolVersionId}/studyprotocol`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Proxy CoBrowsing API for UPScope
   *
   * @tags cobrowsing
   * @name TrialexecProxyCoBrowsingCreate
   * @summary Proxy CoBrowsing API for UPScope
   * @request POST:/api/trialexec/proxyCoBrowsing
   * @secure
   */
  trialexecProxyCoBrowsingCreate = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/trialexec/proxyCoBrowsing`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Create study actor by studyId and payload
   *
   * @tags Study Actor
   * @name TrialexecStudyActorCreate
   * @summary Create study actor
   * @request POST:/api/trialexec/study/{studyId}/actor
   * @secure
   */
  trialexecStudyActorCreate = (
    studyId: string,
    data: StudyActorPayload[],
    params: RequestParams = {}
  ) =>
    this.request<StudyActorPayload[], void>({
      path: `/api/trialexec/study/${studyId}/actor`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes study's actors by studyId and tildaid
   *
   * @tags Study Actor
   * @name TrialexecStudyActorDelete
   * @summary Deletes study's actors
   * @request DELETE:/api/trialexec/study/{studyId}/actor/{tildaid}
   * @secure
   */
  trialexecStudyActorDelete = (
    studyId: string,
    tildaid: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/study/${studyId}/actor/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Lists study's actors by studyId
   *
   * @tags Study Actor
   * @name TrialexecStudyActorDetail
   * @summary Lists study's actors
   * @request GET:/api/trialexec/study/{studyId}/actor
   * @secure
   */
  trialexecStudyActorDetail = (
    studyId: string,
    query?: {
      /** role */
      role?: string;
      /** Optional query parameter to filter results by site ID(s) */
      'site-id'?: string[];
      /** number of entries to skip */
      skip?: number;
      /** number of entries per page */
      limit?: number;
      /** field of actor to sort by */
      sort?: string;
      /** sort by descending or ascending */
      desc?: boolean;
      /** search key to search for in user info. ex. 'name' will search for actors with a username containing the passed searchstr value */
      searchkey?: string;
      /** search value to search for in user info. ex. 'taylor' */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListActorsOutput2, void>({
      path: `/api/trialexec/study/${studyId}/actor`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List actor duties by actorId
   *
   * @tags Actor Duty
   * @name TrialexecStudyActorDutyDetail
   * @summary List actor duties
   * @request GET:/api/trialexec/study/{studyId}/actor/{actorId}/duty
   * @secure
   */
  trialexecStudyActorDutyDetail = (
    studyId: string,
    actorId: string,
    params: RequestParams = {}
  ) =>
    this.request<StudySiteDuty[], void>({
      path: `/api/trialexec/study/${studyId}/actor/${actorId}/duty`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets actor side panel
   *
   * @tags Study Actor
   * @name TrialexecStudyActorSidePanelDetail
   * @summary Gets actor side panel
   * @request GET:/api/trialexec/study/{studyId}/actor/{id}/sidePanel
   * @secure
   */
  trialexecStudyActorSidePanelDetail = (
    studyId: string,
    id: string,
    query?: {
      /** field of actor to sort by */
      sort?: string;
      /** sort by descending or ascending */
      desc?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActorSidePanel, void>({
      path: `/api/trialexec/study/${studyId}/actor/${id}/sidePanel`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update study actor by studyId and payload
   *
   * @tags Study Actor
   * @name TrialexecStudyActorUpdate
   * @summary Update study actor
   * @request PUT:/api/trialexec/study/{studyId}/actor/{actorId}
   * @secure
   */
  trialexecStudyActorUpdate = (
    studyId: string,
    actorId: string,
    data: StudyActorPayload,
    params: RequestParams = {}
  ) =>
    this.request<StudyActorPayload, void>({
      path: `/api/trialexec/study/${studyId}/actor/${actorId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List Study AdverseEvent
   *
   * @tags StudyAdverseEvent
   * @name TrialexecStudyAeDetail
   * @summary List Study AdverseEvent
   * @request GET:/api/trialexec/study/{studyId}/ae
   * @secure
   */
  trialexecStudyAeDetail = (
    studyId: string,
    query?: {
      /** status of AE */
      status?: string;
      /** is the AE serious \ */
      serious?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputAdverseEvent[], void>({
      path: `/api/trialexec/study/${studyId}/ae`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List study duties by studyId: DEPRECATED use ListStudyDutiesBySite instead
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyDetail
   * @summary List study duties: DEPRECATED use ListStudyDutiesBySite instead
   * @request GET:/api/trialexec/study/{studyId}/duty
   * @secure
   */
  trialexecStudyDutyDetail = (studyId: string, params: RequestParams = {}) =>
    this.request<RecommendedDutiesResponse, void>({
      path: `/api/trialexec/study/${studyId}/duty`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Adopt study delegation of authority
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanAdoptCreate
   * @summary Adopt study delegation of authority
   * @request POST:/api/trialexec/study/{studyId}/dutyplan/adopt
   * @secure
   */
  trialexecStudyDutyplanAdoptCreate = (
    studyId: string,
    data: DutyPlanPayload,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/adopt`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create copy of existing study DutyPlan
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanCopyCreate
   * @summary Create copy of existing study DutyPlan
   * @request POST:/api/trialexec/study/{studyId}/dutyplan/{dutyPlanId}/copy
   * @secure
   */
  trialexecStudyDutyplanCopyCreate = (
    studyId: string,
    dutyPlanId: string,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/${dutyPlanId}/copy`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create study DutyPlans
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanCreate
   * @summary Create study DutyPlans
   * @request POST:/api/trialexec/study/{studyId}/dutyplan
   * @secure
   */
  trialexecStudyDutyplanCreate = (
    studyId: string,
    data: DutiesPlanResponse,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete study delegation of authority
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanDelete
   * @summary Delete study delegation of authority
   * @request DELETE:/api/trialexec/study/{studyId}/dutyplan/{dutyPlanId}
   * @secure
   */
  trialexecStudyDutyplanDelete = (
    studyId: string,
    dutyPlanId: string,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/${dutyPlanId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists study DutyPlans
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanDetail
   * @summary Lists study DutyPlans
   * @request GET:/api/trialexec/study/{studyId}/dutyplan
   * @secure
   */
  trialexecStudyDutyplanDetail = (
    studyId: string,
    query?: {
      /** number of entries to skip */
      skip?: number;
      /** number of entries per page */
      limit?: number;
      /** DutyPlan key to sort by */
      sort?: string;
      /** number of entries per page */
      desc?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get study DutyPlans by ID
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanDetail2
   * @summary Get study DutyPlans
   * @request GET:/api/trialexec/study/{studyId}/dutyplan/{dutyPlanId}
   * @originalName trialexecStudyDutyplanDetail
   * @duplicate
   * @secure
   */
  trialexecStudyDutyplanDetail2 = (
    studyId: string,
    dutyPlanId: string,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/${dutyPlanId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create study duties by studyId
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanDutyCreate
   * @summary Create study duties
   * @request POST:/api/trialexec/study/{studyId}/dutyplan/{dutyPlanId}/duty
   * @secure
   */
  trialexecStudyDutyplanDutyCreate = (
    studyId: string,
    dutyPlanId: string,
    data: DutiesPlanResponse,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/${dutyPlanId}/duty`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete study duty by studyId and dutyId
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanDutyDelete
   * @summary Delete study duty
   * @request DELETE:/api/trialexec/study/{studyId}/dutyplan/{dutyPlanId}/duty/{dutyId}
   * @secure
   */
  trialexecStudyDutyplanDutyDelete = (
    studyId: string,
    dutyPlanId: string,
    dutyId: string,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/${dutyPlanId}/duty/${dutyId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update study duty by studyId and dutyId
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanDutyUpdate
   * @summary Update study duty
   * @request PUT:/api/trialexec/study/{studyId}/dutyplan/{dutyPlanId}/duty/{dutyId}
   * @secure
   */
  trialexecStudyDutyplanDutyUpdate = (
    studyId: string,
    dutyPlanId: string,
    dutyId: string,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/${dutyPlanId}/duty/${dutyId}`,
      method: 'PUT',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Publish study delegation of authority
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanPublishCreate
   * @summary Publish study delegation of authority
   * @request POST:/api/trialexec/study/{studyId}/dutyplan/publish
   * @secure
   */
  trialexecStudyDutyplanPublishCreate = (
    studyId: string,
    data: DutyPlanPayload,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/publish`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update study DutyPlan by ID
   *
   * @tags Study Duty
   * @name TrialexecStudyDutyplanUpdate
   * @summary Update study DutyPlan
   * @request PUT:/api/trialexec/study/{studyId}/dutyplan/{dutyPlanId}
   * @secure
   */
  trialexecStudyDutyplanUpdate = (
    studyId: string,
    dutyPlanId: string,
    data: DutiesPlanResponse,
    params: RequestParams = {}
  ) =>
    this.request<DutiesPlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/dutyplan/${dutyPlanId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Get study protocol deviations by studyId
   *
   * @tags Study
   * @name TrialexecStudyPdDetail
   * @summary Get study protocol deviations
   * @request GET:/api/trialexec/study/{studyId}/pd
   * @secure
   */
  trialexecStudyPdDetail = (studyId: string, params: RequestParams = {}) =>
    this.request<OutputProtocolDeviation, void>({
      path: `/api/trialexec/study/${studyId}/pd`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Adds site to careplan by site ID, study ID and protocol version
   *
   * @tags Protocol
   * @name TrialexecStudyProtocolAdoptCreate
   * @summary Adds site to careplan
   * @request POST:/api/trialexec/study/{studyId}/protocol/{protocolVersionId}/adopt
   * @secure
   */
  trialexecStudyProtocolAdoptCreate = (
    studyId: string,
    protocolVersionId: string,
    data: GenericKeyArr,
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/trialexec/study/${studyId}/protocol/${protocolVersionId}/adopt`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Add study protocol by studyId and protocolVersionId
   *
   * @tags Protocol
   * @name TrialexecStudyProtocolCreate
   * @summary Add study protocol
   * @request POST:/api/trialexec/study/{studyId}/protocol/{protocolVersionId}
   * @secure
   */
  trialexecStudyProtocolCreate = (
    studyId: string,
    protocolVersionId: string,
    data: GenericKeyArr,
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/trialexec/study/${studyId}/protocol/${protocolVersionId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete study protocol by studyId and protocolVersionId
   *
   * @tags Protocol
   * @name TrialexecStudyProtocolDelete
   * @summary Delete study protocol
   * @request DELETE:/api/trialexec/study/{studyId}/protocol/{protocolVersionId}
   * @secure
   */
  trialexecStudyProtocolDelete = (
    studyId: string,
    protocolVersionId: string,
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/trialexec/study/${studyId}/protocol/${protocolVersionId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List study protocols by studyId
   *
   * @tags Protocol
   * @name TrialexecStudyProtocolDetail
   * @summary List study protocols
   * @request GET:/api/trialexec/study/{studyId}/protocol
   * @secure
   */
  trialexecStudyProtocolDetail = (
    studyId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputProtocol, void>({
      path: `/api/trialexec/study/${studyId}/protocol`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Publish study protocol to sites by studyId and protocolVersionId
   *
   * @tags Protocol
   * @name TrialexecStudyProtocolPublishCreate
   * @summary Publish study protocol to sites
   * @request POST:/api/trialexec/study/{studyId}/protocol/{protocolVersionId}/publish
   * @secure
   */
  trialexecStudyProtocolPublishCreate = (
    studyId: string,
    protocolVersionId: string,
    data: GenericKeyArr,
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/trialexec/study/${studyId}/protocol/${protocolVersionId}/publish`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the questions from an activity by protocolVersionId, visitId, and activityID
   *
   * @tags Questionnaire
   * @name TrialexecStudyProtocolVisitActivityAllQuestionsCreate
   * @summary Gets the questions from an activity
   * @request POST:/api/trialexec/study/{studyId}/protocol/{protocolVersionId}/visit/{visitId}/activity/allQuestions
   * @secure
   */
  trialexecStudyProtocolVisitActivityAllQuestionsCreate = (
    studyId: string,
    protocolVersionId: string,
    visitId: string,
    data: ExecIds,
    query?: {
      /** formatTypeRequired */
      formatTypeRequired?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/trialexec/study/${studyId}/protocol/${protocolVersionId}/visit/${visitId}/activity/allQuestions`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the activity graph for a protocol version by protocolVersionId and visitId
   *
   * @tags Execsvc Activity Graph
   * @name TrialexecStudyProtocolVisitActivitygraphDetail
   * @summary Gets the activity graph for a protocol version
   * @request GET:/api/trialexec/study/{studyId}/protocol/{protocolVersionId}/visit/{visitId}/activitygraph
   * @secure
   */
  trialexecStudyProtocolVisitActivitygraphDetail = (
    studyId: string,
    protocolVersionId: string,
    visitId: string,
    params: RequestParams = {}
  ) =>
    this.request<VisitActivityGraph, void>({
      path: `/api/trialexec/study/${studyId}/protocol/${protocolVersionId}/visit/${visitId}/activitygraph`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the activity graph for a protocol version by protocolVersionId and visitId
   *
   * @tags Questionnaire
   * @name TrialexecStudyProtocolVisitActivityQuestionnaireCreate
   * @summary Gets the activity graph for a protocol version
   * @request POST:/api/trialexec/study/{studyId}/protocol/{protocolVersionId}/visit/{visitId}/activity/questionnaire
   * @secure
   */
  trialexecStudyProtocolVisitActivityQuestionnaireCreate = (
    studyId: string,
    protocolVersionId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputQuestionnaire[], void>({
      path: `/api/trialexec/study/${studyId}/protocol/${protocolVersionId}/visit/${visitId}/activity/questionnaire`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create study site by studyId and payload
   *
   * @tags Study Site
   * @name TrialexecStudySiteCreate
   * @summary Create study site
   * @request POST:/api/trialexec/study/{studyId}/site
   * @secure
   */
  trialexecStudySiteCreate = (
    studyId: string,
    data: StudySiteInput[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/study/${studyId}/site`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Delete study site by studyId and tildaid
   *
   * @tags Study Site
   * @name TrialexecStudySiteDelete
   * @summary Delete study site
   * @request DELETE:/api/trialexec/study/{studyId}/site/{tildaid}
   * @secure
   */
  trialexecStudySiteDelete = (
    studyId: string,
    tildaid: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/study/${studyId}/site/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description List study sites by studyId
   *
   * @tags Study Site
   * @name TrialexecStudySiteDetail
   * @summary List study sites
   * @request GET:/api/trialexec/study/{studyId}/site
   * @secure
   */
  trialexecStudySiteDetail = (
    studyId: string,
    query?: {
      /** protocol */
      protocol?: boolean;
      /** role will filter sites by which site has staff with the passed role. Can handle multiple values */
      role?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SitesResponse, void>({
      path: `/api/trialexec/study/${studyId}/site`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List study duties that are adopted to a site
   *
   * @tags Study Duty
   * @name TrialexecStudySiteDutiesDetail
   * @summary List study duties by site
   * @request GET:/api/trialexec/study/{studyId}/site/duties
   * @secure
   */
  trialexecStudySiteDutiesDetail = (
    studyId: string,
    query?: {
      /** site-id of site to list duties, can list multiple */
      'site-id'?: string;
      /** retrieve recommended duties of passed roles */
      role?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<RecommendedDutiesBySiteResponse, void>({
      path: `/api/trialexec/study/${studyId}/site/duties`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates site side panel
   *
   * @tags Study Site
   * @name TrialexecStudySiteSidePanelDetail
   * @summary Creates site side panel
   * @request GET:/api/trialexec/study/{studyId}/site/{id}/sidePanel
   * @secure
   */
  trialexecStudySiteSidePanelDetail = (
    studyId: string,
    id: string,
    query?: {
      /** role */
      role?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StudySiteSidePanel, void>({
      path: `/api/trialexec/study/${studyId}/site/${id}/sidePanel`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the plan definition for a study protocol by Study and Site
   *
   * @tags Study Plan Definition
   * @name TrialexecStudySiteStudyprotocolDetail
   * @summary Gets the plan definition for a study protocol
   * @request GET:/api/trialexec/study/{studyId}/site/{siteId}/studyprotocol
   * @secure
   */
  trialexecStudySiteStudyprotocolDetail = (
    studyId: string,
    siteId: string,
    params: RequestParams = {}
  ) =>
    this.request<OPStudyProtocol, void>({
      path: `/api/trialexec/study/${studyId}/site/${siteId}/studyprotocol`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update study site by studyId and payload
   *
   * @tags Study Site
   * @name TrialexecStudySiteUpdate
   * @summary Update study site
   * @request PUT:/api/trialexec/study/{studyId}/site
   * @secure
   */
  trialexecStudySiteUpdate = (
    studyId: string,
    data: StudySiteInput[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/study/${studyId}/site`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get SMOs for a given study
   *
   * @tags Execsvc SMO
   * @name TrialexecStudySmoDetail
   * @summary Get SMOs for a given study
   * @request GET:/api/trialexec/study/{studyId}/smo
   * @secure
   */
  trialexecStudySmoDetail = (studyId: string, params: RequestParams = {}) =>
    this.request<OutputSMO[], void>({
      path: `/api/trialexec/study/${studyId}/smo`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the participant forms of type ECONSENT available to the caller
   *
   * @tags Participant Forms
   * @name TrialexecStudyStudyIdParticipantFormList
   * @summary Lists the participant forms of type ECONSENT
   * @request GET:/api/trialexec/study/studyId/participantForm
   */
  trialexecStudyStudyIdParticipantFormList = (params: RequestParams = {}) =>
    this.request<OutputParticipantForm[], void>({
      path: `/api/trialexec/study/studyId/participantForm`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Create study's careplans by studyId and subjectId
   *
   * @tags Study Careplan
   * @name TrialexecStudySubjectCreate
   * @summary Create study careplan by studyId and subjectId
   * @request POST:/api/trialexec/study/{studyId}/subject/{subjectId}
   * @secure
   */
  trialexecStudySubjectCreate = (
    studyId: string,
    subjectId: string,
    data: string,
    params: RequestParams = {}
  ) =>
    this.request<CarePlan, void>({
      path: `/api/trialexec/study/${studyId}/subject/${subjectId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete study's careplan by studyId and tildaid
   *
   * @tags Study Careplan
   * @name TrialexecStudySubjectDelete
   * @summary Deletes careplan by studyId and tildaid
   * @request DELETE:/api/trialexec/study/{studyId}/subject/{tildaid}
   * @secure
   */
  trialexecStudySubjectDelete = (
    studyId: string,
    tildaid: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/study/${studyId}/subject/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets study's careplans by studyId and subjectId
   *
   * @tags Study Careplan
   * @name TrialexecStudySubjectDetail
   * @summary Gets careplan by studyId and subjectId
   * @request GET:/api/trialexec/study/{studyId}/subject/{subjectId}
   * @secure
   */
  trialexecStudySubjectDetail = (
    studyId: string,
    subjectId: string,
    query: {
      /** siteId */
      siteId: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<CarePlan, void>({
      path: `/api/trialexec/study/${studyId}/subject/${subjectId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists study's careplans by studyId
   *
   * @tags Study Careplan
   * @name TrialexecStudySubjectDetailsDetail
   * @summary Lists careplans by study
   * @request GET:/api/trialexec/study/{studyId}/subject/details
   * @secure
   */
  trialexecStudySubjectDetailsDetail = (
    studyId: string,
    query?: {
      /** number of entries to skip */
      skip?: number;
      /** number of entries per page */
      limit?: number;
      /** key to sort by */
      sort?: string;
      /** subjectId */
      subjectId?: string;
      /** number of entries per page */
      desc?: boolean;
      /** search key to search for in patient info. ex. 'name'. 'site-name' will search for careplans attached to site with passed searchstr name */
      searchkey?: string;
      /** search value to search for in patient info. ex. 'taylor' */
      searchstr?: string;
      /** filters by careplan status. ex. 'Init' */
      status?: string;
      /** filters by patient's email ('+' symbol must be ascii encoded) */
      email?: string;
      /** filter careplans by ones attached to site by site's name */
      'site-name'?: string;
      /** filter careplans by ones attached to site by site's tildaid */
      'site-id'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputCarePlanResponse, void>({
      path: `/api/trialexec/study/${studyId}/subject/details`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Rescreen subject for a given site
   *
   * @tags Study Careplan
   * @name TrialexecStudySubjectRescreenCreate
   * @summary Rescreen subject for a given site
   * @request POST:/api/trialexec/study/{studyId}/subject/{subjectId}/rescreen
   * @secure
   */
  trialexecStudySubjectRescreenCreate = (
    studyId: string,
    subjectId: string,
    data: CPCreatePayload,
    params: RequestParams = {}
  ) =>
    this.request<CarePlan, void>({
      path: `/api/trialexec/study/${studyId}/subject/${subjectId}/rescreen`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists visits for a study by studyId
   *
   * @tags Study Visits
   * @name TrialexecStudyVisitsDetail
   * @summary Lists visits for a study
   * @request GET:/api/trialexec/study/{studyId}/visits
   * @secure
   */
  trialexecStudyVisitsDetail = (studyId: string, params: RequestParams = {}) =>
    this.request<Visit[], void>({
      path: `/api/trialexec/study/${studyId}/visits`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists tasks by taskId
   *
   * @tags Task
   * @name TrialexecTaskDetail
   * @summary Lists tasks
   * @request GET:/api/trialexec/task/{taskId}
   * @secure
   */
  trialexecTaskDetail = (taskId: string, params: RequestParams = {}) =>
    this.request<
      | OutputTask
      | OutputDelegateTask
      | OutputSignoffTask
      | OutputChecklistTask
      | OutputQueryTask
      | OutputAdverseEventTask
      | OutputProtocolDeviationTask
      | OutputChecklistTaskV2,
      void
    >({
      path: `/api/trialexec/task/${taskId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Reviews tasks by taskId
   *
   * @tags Task
   * @name TrialexecTaskReviewUpdate
   * @summary Reviews tasks
   * @request PUT:/api/trialexec/task/{taskId}/review
   * @secure
   */
  trialexecTaskReviewUpdate = (
    taskId: string,
    data: ReviewTaskPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/task/${taskId}/review`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update todos in a task (ControlChecklist category)
   *
   * @tags Task
   * @name TrialexecTaskTodoUpdate
   * @summary Update todos in a task (ControlChecklist category)
   * @request PUT:/api/trialexec/task/{taskId}/todo
   * @secure
   */
  trialexecTaskTodoUpdate = (
    taskId: string,
    data: OutputTodo[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/task/${taskId}/todo`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Updates tasks by taskId
   *
   * @tags Task
   * @name TrialexecTaskUpdate
   * @summary Updates tasks
   * @request PUT:/api/trialexec/task/{taskId}
   * @secure
   */
  trialexecTaskUpdate = (
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
      path: `/api/trialexec/task/${taskId}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Get HRRF Activity details of a careplan
   *
   * @tags HRRF
   * @name TrialexecV2CareplanHrrfDetail
   * @summary Get HRRF Activity details of a careplan
   * @request GET:/api/trialexec/v2/careplan/{careplanId}/hrrf
   * @secure
   */
  trialexecV2CareplanHrrfDetail = (
    careplanId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputHRRFV2, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/hrrf`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the study protocol by careplanId
   *
   * @tags Study Protocol
   * @name TrialexecV2CareplanStudyprotocolDetail
   * @summary Gets the study protocol
   * @request GET:/api/trialexec/v2/careplan/{careplanId}/studyprotocol
   * @secure
   */
  trialexecV2CareplanStudyprotocolDetail = (
    careplanId: string,
    params: RequestParams = {}
  ) =>
    this.request<OPStudyProtocolV2, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/studyprotocol`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists questions from careplan activity by careplanId, activityId, and visitId
   *
   * @tags Careplan Activity
   * @name TrialexecV2CareplanVisitActivityAllQuestionsCreate
   * @summary Lists questions from careplan activity
   * @request POST:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/activity/allQuestions
   * @secure
   */
  trialexecV2CareplanVisitActivityAllQuestionsCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    query?: {
      /** edc-enabled */
      'edc-enabled'?: string;
      /** contains-text */
      'contains-text'?: string;
      /** formatTypeRequired */
      formatTypeRequired?: boolean;
      /** number of results to skip */
      skip?: number;
      /** set maximum amount of results per page */
      limit?: number;
      /** set true if review mode activity details are required */
      'review-mode'?: boolean;
      /** set true if edit mode activity details are required */
      'edit-mode'?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetailsV2, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/activity/allQuestions`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Abort edit activity by careplanId,visitId, participantVisitId, participantActivityId, optional (tableId, and rowId).
   *
   * @tags Careplan Question
   * @name TrialexecV2CareplanVisitActivityEditAbortCreate
   * @summary Abort edit activity
   * @request POST:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/activity/edit/abort
   * @secure
   */
  trialexecV2CareplanVisitActivityEditAbortCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/activity/edit/abort`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Complete edit activity by careplanId,visitId, participantVisitId, participantActivityId.
   *
   * @tags Careplan Question
   * @name TrialexecV2CareplanVisitActivityEditCompleteCreate
   * @summary Complete edit activity
   * @request POST:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/activity/edit/complete
   * @secure
   */
  trialexecV2CareplanVisitActivityEditCompleteCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIdsWithChangeLog,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetailsV2, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/activity/edit/complete`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Start edit activity by careplanId,visitID, participantVisitId, participantActivityId and pageId.
   *
   * @tags Careplan Question
   * @name TrialexecV2CareplanVisitActivityEditStartCreate
   * @summary Start edit activity
   * @request POST:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/activity/edit/start
   * @secure
   */
  trialexecV2CareplanVisitActivityEditStartCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetailsV2, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/activity/edit/start`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets Activity Graph V2 by carePlanID and visitId
   *
   * @tags Careplan Visit
   * @name TrialexecV2CareplanVisitActivitygraphDetail
   * @summary Gets Activity Graph V2
   * @request GET:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/activitygraph
   * @secure
   */
  trialexecV2CareplanVisitActivitygraphDetail = (
    careplanId: string,
    visitId: string,
    query?: {
      /** to specify the role context to fine-tune behavior */
      roleContext?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<VisitActivityGraphV2, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/activitygraph`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Insert row in table by careplanId, visitId, activityId, questionnaireID, questionId, and tableId
   *
   * @tags Table Row
   * @name TrialexecV2CareplanVisitActivityTableCreate
   * @summary Insert row in table
   * @request POST:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/activity/table
   * @secure
   */
  trialexecV2CareplanVisitActivityTableCreate = (
    careplanId: string,
    visitId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputTableDetailsV2, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/activity/table`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete row in table by careplanId, visitId, activityId, questionnaireID, tableId and hdmClassId
   *
   * @tags Table Row
   * @name TrialexecV2CareplanVisitActivityTableDelete
   * @summary Delete row in table
   * @request DELETE:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/activity/table
   * @secure
   */
  trialexecV2CareplanVisitActivityTableDelete = (
    careplanId: string,
    visitId: string,
    data: DeleteTable,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/activity/table`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update pre post visit  V2 todos by careplanId and visitID
   *
   * @tags Careplan Todo
   * @name TrialexecV2CareplanVisitPreVisitTodoCreate
   * @summary Update pre post visit V2 todos
   * @request POST:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/preVisitTodo
   * @secure
   */
  trialexecV2CareplanVisitPreVisitTodoCreate = (
    careplanId: string,
    visitId: string,
    data: UpdatePrePostVisitPayload[],
    query?: {
      /** taskID */
      taskID?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/preVisitTodo`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Gets visit summary version2 by careplanId and visitID
   *
   * @tags Careplan Visit
   * @name TrialexecV2CareplanVisitSummaryDetail
   * @summary Gets visit summary version2
   * @request GET:/api/trialexec/v2/careplan/{careplanId}/visit/{visitId}/summary
   * @secure
   */
  trialexecV2CareplanVisitSummaryDetail = (
    careplanId: string,
    visitId: string,
    query?: {
      /** edc-enabled */
      'edc-enabled'?: string;
      /** contains-text */
      'contains-text'?: string;
      /** aId */
      aId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputVisitSummaryV2, void>({
      path: `/api/trialexec/v2/careplan/${careplanId}/visit/${visitId}/summary`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the ObjectTypes
   *
   * @tags Object Details
   * @name TrialexecV2GetObjectTypesList
   * @summary Gets the ObjectTypes
   * @request GET:/api/trialexec/v2/getObjectTypes
   * @secure
   */
  trialexecV2GetObjectTypesList = (params: RequestParams = {}) =>
    this.request<ObjectDetailsMap, void>({
      path: `/api/trialexec/v2/getObjectTypes`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the study protocol by protocolVersionId
   *
   * @tags Study Protocol
   * @name TrialexecV2ProtocolStudyprotocolDetail
   * @summary Gets the study protocol
   * @request GET:/api/trialexec/v2/protocol/{protocolVersionId}/studyprotocol
   * @secure
   */
  trialexecV2ProtocolStudyprotocolDetail = (
    protocolVersionId: string,
    params: RequestParams = {}
  ) =>
    this.request<OPStudyProtocolV2, void>({
      path: `/api/trialexec/v2/protocol/${protocolVersionId}/studyprotocol`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the questions from an activity by protocolVersionId, visitId, and activityID
   *
   * @tags Questionnaire
   * @name TrialexecV2StudyProtocolVisitActivityAllQuestionsCreate
   * @summary Gets the questions from an activity
   * @request POST:/api/trialexec/v2/study/{studyId}/protocol/{protocolVersionId}/visit/{visitId}/activity/allQuestions
   * @secure
   */
  trialexecV2StudyProtocolVisitActivityAllQuestionsCreate = (
    studyId: string,
    protocolVersionId: string,
    visitId: string,
    data: ExecIds,
    query?: {
      /** formatTypeRequired */
      formatTypeRequired?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetailsV2, void>({
      path: `/api/trialexec/v2/study/${studyId}/protocol/${protocolVersionId}/visit/${visitId}/activity/allQuestions`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the activity graph V2 for a protocol version by protocolVersionId and visitId
   *
   * @tags Execsvc Activity Graph
   * @name TrialexecV2StudyProtocolVisitActivitygraphDetail
   * @summary Gets the activity graph V2 for a protocol version
   * @request GET:/api/trialexec/v2/study/{studyId}/protocol/{protocolVersionId}/visit/{visitId}/activitygraph
   * @secure
   */
  trialexecV2StudyProtocolVisitActivitygraphDetail = (
    studyId: string,
    protocolVersionId: string,
    visitId: string,
    params: RequestParams = {}
  ) =>
    this.request<VisitActivityGraphV2, void>({
      path: `/api/trialexec/v2/study/${studyId}/protocol/${protocolVersionId}/visit/${visitId}/activitygraph`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Gets the study protocol by Study and Site
   *
   * @tags Study Protocol
   * @name TrialexecV2StudySiteStudyprotocolDetail
   * @summary Gets the study protocol
   * @request GET:/api/trialexec/v2/study/{studyId}/site/{siteId}/studyprotocol
   * @secure
   */
  trialexecV2StudySiteStudyprotocolDetail = (
    studyId: string,
    siteId: string,
    params: RequestParams = {}
  ) =>
    this.request<OPStudyProtocolV2, void>({
      path: `/api/trialexec/v2/study/${studyId}/site/${siteId}/studyprotocol`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the forms available to the caller
   *
   * @tags Form
   * @name PublicTrialexecFormList
   * @summary Lists forms
   * @request GET:/api/public/trialexec/form
   * @secure
   */
  publicTrialexecFormList = (params: RequestParams = {}) =>
    this.request<Form[], void>({
      path: `/api/public/trialexec/form`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates participant form
   *
   * @tags Form
   * @name PublicTrialexecFormParticipantCreate
   * @summary Creates participant form
   * @request POST:/api/public/trialexec/form/{formId}/participant
   * @secure
   */
  publicTrialexecFormParticipantCreate = (
    formId: string,
    query?: {
      /** participantID */
      participantID?: string;
      /** Optional flag to link ParticipantForm to study (Required for Screener type) */
      'study-id'?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ParticipantForm, void>({
      path: `/api/public/trialexec/form/${formId}/participant`,
      method: 'POST',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the participant forms by participantId
   *
   * @tags Participant Forms
   * @name PublicTrialexecFormParticipantFormDetail
   * @summary Lists the participant forms
   * @request GET:/api/public/trialexec/form/participantForm/{participantId}
   * @secure
   */
  publicTrialexecFormParticipantFormDetail = (
    participantId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputParticipantForm[], void>({
      path: `/api/public/trialexec/form/participantForm/${participantId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List the participant form's questions by participantFormId and activityId
   *
   * @tags Participant Forms
   * @name PublicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate
   * @summary List the participant form's questions
   * @request POST:/api/public/trialexec/participantForm/{participantFormId}/activity/questionnaire/allQuestions
   * @secure
   */
  publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate = (
    participantFormId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/public/trialexec/participantForm/${participantFormId}/activity/questionnaire/allQuestions`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List the participant form's questionnaires by participantFormId and activityId
   *
   * @tags Participant Forms
   * @name PublicTrialexecParticipantFormActivityQuestionnaireCreate
   * @summary List the participant form's questionnaires
   * @request POST:/api/public/trialexec/participantForm/{participantFormId}/activity/questionnaire
   * @secure
   */
  publicTrialexecParticipantFormActivityQuestionnaireCreate = (
    participantFormId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputQuestionnaire[], void>({
      path: `/api/public/trialexec/participantForm/${participantFormId}/activity/questionnaire`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Eval the participant form's questionnaires by participantFormId and activityId
   *
   * @tags Participant Forms
   * @name PublicTrialexecParticipantFormActivityQuestionnaireResultCreate
   * @summary Eval the participant form's questionnaires
   * @request POST:/api/public/trialexec/participantForm/{participantFormId}/activity/questionnaire/result
   * @secure
   */
  publicTrialexecParticipantFormActivityQuestionnaireResultCreate = (
    participantFormId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<boolean, void>({
      path: `/api/public/trialexec/participantForm/${participantFormId}/activity/questionnaire/result`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Saves the participant form's questionnaire by participantFormId
   *
   * @tags Participant Forms
   * @name PublicTrialexecParticipantFormActivityQuestionnaireSaveCreate
   * @summary Saves the participant form's questionnaire
   * @request POST:/api/public/trialexec/participantForm/{participantFormId}/activity/questionnaire/save
   * @secure
   */
  publicTrialexecParticipantFormActivityQuestionnaireSaveCreate = (
    participantFormId: string,
    data: UpdateActivityPayload,
    query?: {
      /** completed */
      completed?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputActivityDetails, void>({
      path: `/api/public/trialexec/participantForm/${participantFormId}/activity/questionnaire/save`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Kicks off the participant forms activity by participantFormId and activityId
   *
   * @tags Participant Forms
   * @name PublicTrialexecParticipantFormActivityStartCreate
   * @summary Kicks off the participant forms activity
   * @request POST:/api/public/trialexec/participantForm/{participantFormId}/activity/start
   * @secure
   */
  publicTrialexecParticipantFormActivityStartCreate = (
    participantFormId: string,
    data: ExecIds,
    params: RequestParams = {}
  ) =>
    this.request<OutputActivity[], void>({
      path: `/api/public/trialexec/participantForm/${participantFormId}/activity/start`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists the participant forms by participantFormId
   *
   * @tags Participant Forms
   * @name PublicTrialexecParticipantFormSummaryDetail
   * @summary Lists the participant forms summary
   * @request GET:/api/public/trialexec/participantForm/{participantFormId}/summary
   * @secure
   */
  publicTrialexecParticipantFormSummaryDetail = (
    participantFormId: string,
    params: RequestParams = {}
  ) =>
    this.request<OutputPFormSummary, void>({
      path: `/api/public/trialexec/participantForm/${participantFormId}/summary`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
}
