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

/**
 *
 * Standalone object
 */
export interface UserMeta {
  altEmails?: string;
  bio?: string;
  capabilities?: string;
  /** deprecate this? */
  contact?: string;
  description?: string;
  /** empty or unique */
  email: string;
  firstName: string;
  gcalSyncToken?: string;
  lastName: string;
  location?: string;
  onboarded?: boolean;
  passwordSet?: boolean;
  /** empty or unique */
  phoneNumber: string;
  profilePicURL?: string;
  timezone?: string;
  userType?: string;
  username?: string;
}

/**
 *
 * Standalone object
 */
export interface HTTPError {
  /** @example 400 */
  code?: number;
  /** @example "status bad request" */
  message?: string;
}

/**
 *
 * Standalone object
 * Used in Objects[OutputSidePanelTask]
 */
export interface SidePanelTask {
  activity?: string;
  task?: Task;
}

/**
 *
 * Standalone object
 */
export interface OutputSignoffTask {
  object?: object;
  taskDetails?: OutputTask;
  type?:
    | 'VisitSummary'
    | 'VisitSummaryV2'
    | 'OutputTodoV2'
    | 'OutputTaskConfig'
    | 'OutputChecklistTask'
    | 'OutputActivityDetailsV2'
    | 'OutputActivityDetails'
    | 'Activity'
    | 'ActivityV2'
    | 'CheckList'
    | 'Question'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'Statement'
    | 'Questionnaire'
    | 'DocOverlay'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSet'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'Visit'
    | 'VisitV2';
  visitSummary?: OutputVisitSummary;
}

/**
 *
 * Standalone object
 */
export interface OutputSidePanelTask {
  activityTask?: SidePanelTask[];
  carePlanTask?: SidePanelTask[];
  visitTask?: SidePanelTask[];
}

/**
 *
 * Standalone object
 */
export interface OutputSidePanelProtocolDeviation {
  visitSidePanelProtocolDeviation?: ProtocolDeviation[];
}

/**
 *
 * Standalone object
 */
export interface OutputSidePanelChangeLog {
  activity?: string;
  clog?: ChangeLog;
  docFileName?: string;
  question?: string;
  specNode?: string;
}

/**
 *
 * Standalone object
 */
export interface OutputQueryTask {
  activityDetails?: OutputActivityDetails;
  object?: object;
  outputQuery?: OutputQuery;
  taskDetails?: OutputTask;
  type?:
    | 'VisitSummary'
    | 'VisitSummaryV2'
    | 'OutputTodoV2'
    | 'OutputTaskConfig'
    | 'OutputChecklistTask'
    | 'OutputActivityDetailsV2'
    | 'OutputActivityDetails'
    | 'Activity'
    | 'ActivityV2'
    | 'CheckList'
    | 'Question'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'Statement'
    | 'Questionnaire'
    | 'DocOverlay'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSet'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'Visit'
    | 'VisitV2';
}

/**
 *
 * Standalone object
 */
export interface OutputProtocolDeviationTask {
  availableActions?: 'Signoff'[];
  outputProtocolDeviation?: OutputProtocolDeviation;
  taskDetails?: OutputTask;
}

/**
 *
 * Standalone object
 */
export interface OutputDelegateTask {
  activityDetails?: OutputActivityDetails;
  taskDetails?: OutputTask;
}

/**
 *
 * Standalone object
 */
export interface OutputChecklistTaskV2 {
  object?: object;
  taskDetails?: OutputTask;
  type?:
    | 'VisitSummary'
    | 'VisitSummaryV2'
    | 'OutputTodoV2'
    | 'OutputTaskConfig'
    | 'OutputChecklistTask'
    | 'OutputActivityDetailsV2'
    | 'OutputActivityDetails'
    | 'Activity'
    | 'ActivityV2'
    | 'CheckList'
    | 'Question'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'Statement'
    | 'Questionnaire'
    | 'DocOverlay'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSet'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'Visit'
    | 'VisitV2';
}

/**
 *
 * Standalone object
 */
export interface OutputAdverseEventTask {
  adverseEventSummary?: AdverseEventSummary;
  availableActions?: ('SignOff' | 'Create' | 'Query' | 'Flag' | 'Edit')[];
  taskDetails?: OutputTask;
}

/**
 *
 * Standalone object
 * Used in Objects[OutputAdverseEventTask]
 */
export interface AdverseEventSummary {
  activitySummary?: OutputActivitySummary[];
  carePlanId?: string;
  createdat?: number;
  creator?: string;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  nodeId?: string;
  outcome?: string;
  outsideExecution?: boolean;
  serialNumber?: number;
  serious?: string;
  status?: 'Draft' | 'Pending' | 'Reviewed';
  term?: string;
  tildaid?: string;
  updatedat?: number;
  visitId?: string;
  visitTitle?: string;
}

/**
 *
 * Standalone object
 */
export interface OutputSidePanelQuery {
  activityId?: string;
  activityTitle?: string;
  assignTo?: string[];
  carePlanId?: string;
  createdat?: number;
  description?: string;
  id?: string;
  questionId?: string;
  questionnaireId?: string;
  state?: string;
  subject?: string;
  subjectid?: string;
  taskId?: string;
  visitId?: string;
  visitTitle?: string;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyConditionsList, publicAdvocacyConditionsList]
 */
export interface AdvpsvcConditionResponse {
  name?:
    | 'Alzheimers'
    | 'Cancer'
    | 'Cardiovascular'
    | 'Depression'
    | 'Diabetes'
    | 'Hypertension'
    | 'Immuno diseases'
    | 'Neurodegenerative diseases'
    | 'Pain treatment'
    | 'Pediatric';
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyMyPayoutsExportCreate]
 */
export interface AdvPayExportCfg {
  advocateid?: string;
  desc?: boolean;
  exportkeys?: string[];
  searchkey?: string;
  searchstr?: string;
  sort?: string;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyAdvocatesPaymentsDetail, advocacyMyPayoutsList]
 * Used in Objects[AdvocatePayoutResponse]
 */
export interface AdvPayoutInfo {
  amount?: number;
  campaignname?: string;
  event?: string;
  firstname?: string;
  lastname?: string;
  patientid?: string;
  portalorgid?: string;
  studyid?: string;
  studyname?: string;
  ufid?: number;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
  when?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyAdvocatesStatusCreate, advocacyOrganizationsStatusCreate]
 */
export interface AdvCfg {
  ids?: string[];
  isadvorg?: boolean;
  status?: '';
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyOrganizationsDetail]
 * Used in Objects[AdvOrgSummaryResponse]
 */
export interface AdvOrgSummaryInfo {
  avgpermonth?: number;
  createdat?: string;
  email?: string;
  ismedicalprovider?: boolean;
  name?: string;
  nummembers?: number;
  orgid?: string;
  payoutacct?: string;
  phone?: string;
  status?: 'pending' | 'approved' | 'rejected';
  tildaid?: string;
  totalearnings?: number;
  ufid?: number;
  unpaid?: number;
  website?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyOrganizationsList]
 */
export interface AdvOrgSummaryResponse {
  count?: number;
  organizations?: AdvOrgSummaryInfo[];
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyAdvocatesPaymentsDetail, advocacyMyPayoutsList]
 */
export interface AdvocatePayoutResponse {
  count?: number;
  ismedicalprovider?: boolean;
  payinfo?: AdvPayoutInfo[];
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyAdvocatesDetail]
 * Used in Objects[AdvocateSummaryResponse]
 */
export interface AdvocateSummaryInfo {
  contact?: string;
  earnings?: number;
  email?: string;
  joinedat?: string;
  lastseen?: string;
  leads?: number;
  name?: string;
  orgcity?: string;
  orgcountry?: string;
  orgid?: string;
  orgname?: string;
  orgstate?: string;
  postalcode?: string;
  role?: string;
  status?: 'pending' | 'active' | 'inactive';
  tildaid?: string;
  ufid?: number;
  unpaid?: number;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyAdvocatesList]
 */
export interface AdvocateSummaryResponse {
  advocates?: AdvocateSummaryInfo[];
  count?: number;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyCampaignsBookmarksCreate]
 */
export interface BookmarkCfg {
  add?: boolean;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyCampaignsCreate, advocacyCampaignsPartialUpdate, advocacyCampaignsUpdate]
 */
export interface CampaignCfg {
  action?: 'save' | 'publish' | 'deactivate' | 'activate' | 'discard';
  autositeupdate?: boolean;
  conditionids?: string[];
  conditions?: string;
  docids?: string[];
  duration?: number;
  durationperiod?: string;
  exclusioncriteria?: string;
  expirydate?: string;
  faqs?: AdvCampaignFAQ[];
  gender?: string;
  healthyvolunteers?: string;
  inclusioncriteria?: string;
  infotopatient?: string;
  intervention?: string;
  irbapprovaldate?: string;
  irbname?: string;
  irbrefnote?: string;
  isv2screener?: boolean;
  maxage?: number;
  medialinks?: AdvCampaignMediaLink[];
  minage?: number;
  name?: string;
  numvisits?: number;
  patientstipend?: number;
  portalorgid?: string;
  researchphase?: string;
  screener?: string;
  siteids?: string[];
  studydetails?: string;
  studyid?: string;
  summaryadv?: string;
  summarypatient?: string;
  titleadv?: string;
  titlepatient?: string;
  updateStatus?: boolean;
  usedefaultscreener?: boolean;
  website?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyCampaignsCodeDetail]
 */
export interface CampaignCodeResponse {
  code?: string;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsDetail, publicAdvocacyCampaignsDetail]
 * Used in Objects[CampaignDetailSwaggerResponse]
 */
export interface CampaignConfigDetails {
  advocatefee?: string;
  autositeupdate?: boolean;
  bookmarked?: string;
  conditionids?: string[];
  conditions?: string;
  defisv2screener?: boolean;
  defscreener?: string;
  docids?: string[];
  documents?: DocumentInfo[];
  duration?: number;
  durationperiod?: string;
  enrollrange?: PayoutRange;
  exclusioncriteria?: string;
  expirydate?: string;
  faqs?: AdvCampaignFAQ[];
  gender?: string;
  healthyvolunteers?: string;
  inclusioncriteria?: string;
  infotopatient?: string;
  intervention?: string;
  isv2screener?: boolean;
  lastupdated?: string;
  linkcode?: string;
  maxage?: number;
  medialinks?: AdvCampaignMediaLink[];
  minage?: number;
  name?: string;
  numvisits?: number;
  patientstipend?: number;
  prescreenrange?: PayoutRange;
  researchphase?: string;
  screener?: string;
  screenrange?: PayoutRange;
  sites?: SiteInfo[];
  sponsorid?: string;
  sponsorname?: string;
  studydetails?: string;
  studyid?: string;
  studyname?: string;
  summaryadv?: string;
  summarypatient?: string;
  titleadv?: string;
  titlepatient?: string;
  totalrange?: PayoutRange;
  usedefaultscreener?: boolean;
  website?: string;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsList, publicAdvocacyCampaignsList]
 * Used in Objects[CampaignSummaryInfo]
 */
export interface CampaignConfigSummary {
  advocatefee?: number;
  conditions?: string;
  isv2screener?: boolean;
  lastupdated?: string;
  medialinks?: AdvCampaignMediaLink[];
  name?: string;
  patientstipend?: number;
  protocolnumber?: string;
  protocolversion?: string;
  screenfails?: number;
  signups?: number;
  sites?: SiteInfo[];
  sponsorid?: string;
  sponsorname?: string;
  studyid?: string;
  studyname?: string;
  titleadv?: string;
  titlepatient?: string;
  views?: number;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyCampaignsDetail, publicAdvocacyCampaignsDetail]
 */
export interface CampaignDetailSwaggerResponse {
  active?: boolean;
  bookmarked?: boolean;
  croid?: string;
  draftconfig?: CampaignConfigDetails;
  orgalias?: string;
  orgid?: string;
  publishedconfig?: CampaignConfigDetails;
  tildaid: string;
  views?: number;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsStudiesList]
 * Used in Objects[CampaignStudyResponse]
 */
export interface CampaignStudyInfo {
  campaignid?: string;
  campaignname?: string;
  protocolnumber?: string;
  protocolversion?: string;
  sponsorid?: string;
  sponsorname?: string;
  studyid?: string;
  studyname?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyCampaignsStudiesList]
 */
export interface CampaignStudyResponse {
  count?: number;
  studies?: CampaignStudyInfo[];
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsList, publicAdvocacyCampaignsList]
 * Used in Objects[CampaignSummarySwaggerResponse]
 */
export interface CampaignSummaryInfo {
  active?: boolean;
  bookmarked?: boolean;
  croid?: string;
  draftconfig?: CampaignConfigSummary;
  orgalias?: string;
  publishedconfig?: CampaignConfigSummary;
  signups?: number;
  tildaid: string;
  views?: number;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyCampaignsList, publicAdvocacyCampaignsList]
 */
export interface CampaignSummarySwaggerResponse {
  agegroupcounts?: number[];
  campaigns?: CampaignSummaryInfo[];
  count?: number;
  numdraft?: number;
  numinactive?: number;
  numpublished?: number;
  numtotal?: number;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsDetail, publicAdvocacyCampaignsDetail]
 * Used in Objects[CampaignConfigDetails]
 */
export interface DocumentInfo {
  filename?: string;
  size?: number;
  tildaid?: string;
  uploadedat?: string;
  uploadedby?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyRatePlanEvalList]
 */
export interface EvalStatsResponse {
  lastdrafteval?: string;
  lastdraftevalsched?: string;
  lastdraftsched?: string;
  lasteval?: string;
  lastevalsched?: string;
  lastsched?: string;
  orgid?: string;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsDetail, publicAdvocacyCampaignsDetail]
 * Used in Objects[CampaignConfigDetails]
 */
export interface PayoutRange {
  max?: number;
  min?: number;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyRatePlanRulesList]
 */
export interface RuleBulkResponse {
  count?: number;
  rules?: RuleResponse[];
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyRatePlanRulesCreate]
 */
export interface RuleCfg {
  advocateid?: string;
  campaignid?: string;
  computedenrollpay?: number;
  computedprescreenpay?: number;
  computedscreenpay?: number;
  computedtotalpay?: number;
  createdat?: number;
  deleted?: boolean;
  delpending?: boolean;
  deltimestamp?: number;
  draft?: boolean;
  enddate?: string;
  enrollconstant?: number;
  enrollmultiplier?: number;
  enrollpaytype?: string;
  enrollpayval?: number;
  evaluateonly?: boolean;
  holdbitmap?: number;
  isdefault?: boolean;
  name?: string;
  nextruleid?: string;
  orgid?: string;
  portalorgid?: string;
  prescreenconstant?: number;
  prescreenmultiplier?: number;
  prescreenpaytype?: string;
  prescreenpayval?: number;
  redundant?: boolean;
  redundantdraft?: boolean;
  ruletype?: 'campaign' | 'study' | 'site' | 'org' | 'advocate' | 'date';
  screenconstant?: number;
  screenmultiplier?: number;
  screenpaytype?: string;
  screenpayval?: number;
  siteid?: string;
  startdate?: string;
  studyid?: string;
  studywildcard?: boolean;
  tildaid?: string;
  updatedat?: number;
  updruleid?: string;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyRatePlanRulesList]
 * Used in Objects[RuleBulkResponse]
 */
export interface RuleResponse {
  advocate?: string;
  advocateid?: string;
  campaign?: string;
  campaignid?: string;
  computedenrollpay?: number;
  computedprescreenpay?: number;
  computedscreenpay?: number;
  computedtotalpay?: number;
  createdat?: number;
  deleted?: boolean;
  delpending?: boolean;
  deltimestamp?: number;
  draft?: boolean;
  enddate?: string;
  enrollconstant?: number;
  enrollmultiplier?: number;
  enrollpaytype?: string;
  enrollpayval?: number;
  holdbitmap?: number;
  isdefault?: boolean;
  name?: string;
  org?: string;
  orgid?: string;
  portalorgid?: string;
  prescreenconstant?: number;
  prescreenmultiplier?: number;
  prescreenpaytype?: string;
  prescreenpayval?: number;
  redundant?: boolean;
  redundantdraft?: boolean;
  ruletype?: 'campaign' | 'study' | 'site' | 'org' | 'advocate' | 'date';
  screenconstant?: number;
  screenmultiplier?: number;
  screenpaytype?: string;
  screenpayval?: number;
  site?: string;
  siteid?: string;
  startdate?: string;
  study?: string;
  studyid?: string;
  studywildcard?: boolean;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyScreenersList]
 * Used in Objects[ScreenerInfo]
 */
export interface ScreenerCampaignInfo {
  campaignid?: string;
  name?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyScreenersLinkParticipantFormCreate, publicAdvocacyScreenersLinkParticipantFormCreate]
 */
export interface ScreenerCfg {
  campaigncode?: string;
  participantformid?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyScreenersList]
 * Used in Objects[ScreenerSummaryResponse]
 */
export interface ScreenerInfo {
  author?: string;
  campaigns?: ScreenerCampaignInfo[];
  conclusion?: string;
  description?: string;
  formid?: string;
  introduction?: string;
  isv2screener?: boolean;
  name?: string;
  title?: string;
  updatedat?: string;
  version?: string;
}

/**
 *
 * Service Root object
 * Module[advocacy]:Services[advocacyScreenersList]
 */
export interface ScreenerSummaryResponse {
  count?: number;
  screeners?: ScreenerInfo[];
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsDetail, publicAdvocacyCampaignsDetail]
 * Used in Objects[CampaignConfigDetails, CampaignConfigSummary]
 */
export interface SiteInfo {
  capacity?: string;
  city: string;
  contactEmail?: string;
  contactPhone?: string;
  country: string;
  /** Hours of operation */
  daysOfWeekStr: string;
  description?: string;
  distance?: number;
  googleMapUrl?: string;
  holidaysList?: string;
  latitude?: number;
  longitude?: number;
  name: string;
  postalCode: string;
  primaryLocationId?: string;
  siteLogo?: string;
  state: string;
  streetAddress: string;
  suite?: string;
  tildaid?: string;
  timeZone: string;
  twilioNumber?: string;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsCreate, advocacyCampaignsPartialUpdate, advocacyCampaignsUpdate]
 * Used in Objects[CampaignCfg, CampaignConfigDetails]
 */
export interface AdvCampaignFAQ {
  answer?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  pos?: number;
  question?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[advocacy]:Services[advocacyCampaignsCreate, advocacyCampaignsPartialUpdate, advocacyCampaignsUpdate]
 * Used in Objects[CampaignCfg, CampaignConfigDetails, CampaignConfigSummary]
 */
export interface AdvCampaignMediaLink {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  full?: string;
  holdbitmap?: number;
  raw?: string;
  regular?: string;
  small?: string;
  smalls3?: string;
  thumb?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[documents]:Services[documentsQueryDetail]
 * Used in Module[trialexec]:Services[trialexecCareplanAeActivityQuestionQueryCreate2, trialexecCareplanQueryCreate2, trialexecCareplanVisitActivityQuestionQueryCreate2]
 * Used in Objects[QueryDetails, OutputQuery]
 */
export interface QuerylibQueryActions {
  action?: string;
  state?: 'Open' | 'Answer' | 'Resolve' | 'Verify' | 'Delete';
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsQueryDelete]
 */
export interface QuerylibQueryDeletePayload {
  /** Reply to be delete. Empty replyId denotes the original query */
  replyId?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsQueryCreate2]
 */
export interface QuerylibQueryReplyPayload {
  /** Reply to be added */
  description?: string;
  /** If state of the query needs to be changed with new reply */
  state?: 'Open' | 'Answer' | 'Resolve' | 'Verify' | 'Delete';
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsQueryUpdate]
 */
export interface QuerylibQueryUpdatePayload {
  assignTo?: string;
  /** description/reply to be updated */
  description?: string;
  queryType?:
    | 'Missed Data/Missed signatures'
    | 'Confirmatory Queries'
    | 'Possible Lack of Information'
    | 'Transcription errors'
    | 'Possible protocol Deviation'
    | 'Possibly missed Adverse Event'
    | 'Missed lab report';
  /** Reply to be updated. replyId=queryId denotes the original query. Empty replyId denotes adding reply (execsvc only) */
  replyId?: string;
  /** state of the query to be updated */
  state?: 'Open' | 'Answer' | 'Resolve' | 'Verify' | 'Delete';
}

/**
 *
 * Used in Module[documents]:Services[docTypesDoaList]
 * Used in Objects[DoaLogData]
 */
export interface DoclibDoaLogDataEndOfStudy {
  date?: string;
  declaration?: string;
  piSignature?: UserSignature;
}

/**
 *
 * Used in Module[documents]:Services[docTypesDoaList]
 * Used in Objects[DoaLogData]
 */
export interface DoclibDoaLogDataOrganization {
  alias: string;
  name: string;
  tildaid: string;
}

/**
 *
 * Used in Module[documents]:Services[docTypesDoaList]
 * Used in Objects[DoaLogData]
 */
export interface DoclibDoaLogDataSite {
  name: string;
  number: string;
  tildaid: string;
}

/**
 *
 * Used in Module[documents]:Services[docTypesDoaList]
 * Used in Objects[DoaLogData]
 */
export interface DoclibDoaLogDataStartOfStudy {
  /** TODO: Date of SIV; Currently using timestamp for Study-Site addition */
  date: string;
  /** Custom content for declaration */
  declaration?: string;
  piSignature?: UserSignature;
}

/**
 *
 * Used in Module[documents]:Services[docTypesDoaList]
 * Used in Objects[DoaLogData]
 */
export interface DoclibDoaLogDataStudy {
  protocolNumber: string;
  sponsor: string;
  tildaid: string;
}

/**
 * number of records (after search) without pagination
 * Used in Module[documents]:Services[documentsScopesList]
 * Used in Objects[DocumentScopes]
 */
export interface DocumentDocumentScopesCounts {
  /** number of total date types */
  dateTypes: number;
  /** number of total languages */
  languages: number;
  /** number of total patients */
  patients: number;
  /** number of total sites */
  sites: number;
  /** number of total studies */
  studies: number;
  /** number of subjects (only valid for given study) */
  subjects: number;
  /** number of total users */
  users: number;
}

/**
 *
 * Used in Module[documents]:Services[documentsTasksDetail]
 * Used in Objects[DocTaskOutput]
 */
export interface ActorProfile {
  altEmails?: string;
  bio?: string;
  capabilities?: string;
  /** deprecate this? */
  contact?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  /** empty or unique */
  email: string;
  firstName: string;
  gcalSyncToken?: string;
  holdbitmap?: number;
  lastLogin?: string;
  lastName: string;
  location?: string;
  name?: string;
  onboarded?: boolean;
  /** associated organization */
  organization?: OrganizationAssignment;
  passwordSet?: boolean;
  /** empty or unique */
  phoneNumber: string;
  profilePicURL?: string;
  /** associated site */
  site?: SiteAssignment;
  status: 'Invited' | 'Active' | 'Deleted';
  /** associated study */
  study?: StudyAssignment;
  tildaid?: string;
  timezone?: string;
  ufid?: number;
  updatedat?: number;
  userType?: string;
  username?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsTasksDetail]
 */
export interface DocTaskOutput {
  /** List of actions possible with the task */
  actionList: (
    | 'DocTask_Close'
    | 'DocTask_Signoff'
    | 'DocTask_Submit'
    | 'DocTask_Complete'
    | 'DocTask_ESign'
    | 'Subject_Screenfail'
  )[];
  /** Task context object tildaid */
  associationId: string;
  /** Task context object type */
  associationType: string;
  /** attestation string used in case of signing the document in review (using DocumentSignoff task) */
  attestation?: string;
  /** Specific to RequestRecord: Type of the document to be uploaded */
  docTypeName?: string;
  /** List of document tildaids (1 or more depending on the task type) associated with a task */
  documents: string[];
  dueBy?: string;
  /** List of duties (valid for DOA Tasks only) */
  duties: UserDuties[];
  /** Details for context related to visit execution */
  execContext?: OutputTask;
  /** Specific to RequestRecord: folder (subcategory) of the document */
  folderId?: string;
  from?: string;
  initialReviewDone?: boolean;
  /** tildaid of the RequestRecord/DocumentReview peer task: valid only as output */
  peerTaskForReview?: string;
  /** purpose of the task: DocumentSignoff/DocumentReview */
  purpose?: string;
  queryDetails?: QueryDetails;
  /** tildaid for query: In case of DocumentQuery task category */
  queryId?: string;
  task?: Task;
  /** Use for multiple documents */
  taskDocuments: DocumentDetails[];
  /** 'type' attribute in DSL, to be used as docTypeName */
  type?: string;
  /** Details for context related to the user */
  userContext?: ActorProfile;
}

/**
 *
 * Used in Module[documents]:Services[docTypes1572List]
 * Used in Objects[Info1572]
 */
export interface AllPartners {
  other: RegPartner[];
  primary: RegPartner;
}

/**
 *
 * Used in Module[documents]:Services[docTypes1572List]
 * Used in Objects[Info1572]
 */
export interface AllSiteInfo {
  other: RegSiteInfo[];
  primary: RegSiteInfo;
  siteNumber: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsAssignmentsCreate]
 */
export interface CreateDocAssignmentInputs {
  /** list of tildaid of users to be assigned */
  assignees: string[];
  /** can describe about the purpose of the assignment */
  description?: string;
  /** purpose of the assignment */
  purpose: 'DocumentSignoff' | 'Other';
  /** title of the assignment */
  title?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[docTypesDoaList]
 */
export interface DoaLogData {
  allDuties: Duty[];
  duties: UserDuties[];
  endOfStudy?: DoclibDoaLogDataEndOfStudy;
  esignatures: ESign[];
  organization: DoclibDoaLogDataOrganization;
  pi: DoaUserType;
  site: DoclibDoaLogDataSite;
  startOfStudy: DoclibDoaLogDataStartOfStudy;
  study: DoclibDoaLogDataStudy;
}

/**
 *
 * Used in Module[documents]:Services[docTypesDoaList]
 * Used in Objects[DoaLogData, UserSignature]
 */
export interface DoaUserType {
  name: string;
  role: string;
  tildaid: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsPartialUpdate, documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocUpdateInputs, DocumentDetails]
 */
export interface DocAnnotationSpec {
  /** (unique) document tag which can be used in addition to docType to search the instance */
  documentName?: string;
  /** document type of the instance document which uses this template */
  documentType: string;
  /** annotation fields */
  fields: DocFieldSpec[];
  /** Optional document for end-user */
  optional?: boolean;
  /** annotation signers */
  signers: DocSignerSpec[];
  /** tildaid (in case of the existing annotation) */
  tildaid?: string;
  /** 0 - before document builder, 1 - with document builder */
  version?: number;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocumentDetails]
 */
export interface DocAnnotationVal {
  /** auditlog associated to instance document */
  auditLog: ChangeLog[];
  /** (unique) document tag which can be used in addition to docType to search the instance */
  documentName?: string;
  /** document type of the instance document which uses this template */
  documentType: string;
  /** annotation fields */
  fields: IODocFieldVal[];
  /** Optional document for end-user */
  optional?: boolean;
  /** annotation signers */
  signers: IODocSignerVal[];
  /** tildaid (in case of the existing annotation) */
  tildaid?: string;
  /** 0 - before document builder, 1 - with document builder */
  version?: number;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsTasksCreate]
 */
export interface DocTaskInputs {
  active_after?: string;
  /** assign to */
  assignTo?: string[];
  assignment?: 'manual' | 'automatic';
  /** Task context object tildaid */
  associationId: string;
  /** Task context object type */
  associationType: string;
  /** attestation string used in case of signing the document in review (using DocumentSignoff task) */
  attestation?: string;
  blob?: string;
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  /** assignee who completed(eSigned/rejected) the document task */
  closedBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  /** Specific to RequestRecord: Type of the document to be uploaded */
  docTypeName?: string;
  /** List of document tildaids (1 or more depending on the task type) associated with a task */
  documents: string[];
  dueBy?: string;
  due_before?: string;
  /** Specific to RequestRecord: folder (subcategory) of the document */
  folderId?: string;
  from?: string;
  holdbitmap?: number;
  /** tildaid of the RequestRecord/DocumentReview peer task: valid only as output */
  peerTaskForReview?: string;
  priority?: number;
  /** purpose of the task: DocumentSignoff/DocumentReview */
  purpose?: string;
  /** tildaid for query: In case of DocumentQuery task category */
  queryId?: string;
  /** Resource associated with task */
  relationshipContext?: string;
  state?: 'ready' | 'completed' | 'not applicable';
  tildaid?: string;
  title?: string;
  /** 'type' attribute in DSL, to be used as docTypeName */
  type?: string;
  /**
   * Relation: -[TaskToInboxEdgeLabel]->(Inbox)
   * Relation: -[TaskToContextEdgeLabel]->(Context)
   * Relation: -[TaskCreatedFromSpec]->(ParticipantDslSpecNode)
   */
  ufid?: number;
  updatedat?: number;
}

/**
 *
 * Used in Module[documents]:Services[documentsFoldersDetail, documentsFoldersList]
 * Used in Objects[FolderView]
 */
export interface DocView {
  /** tildaid of the document */
  id: string;
  /** name of the document */
  name: string;
}

/**
 *
 * Used in Module[documents]:Services[docTypesDoaList, docTypes1572List]
 * Used in Objects[DoaLogData, Info1572]
 */
export interface ESign {
  /** Application specific details for signature */
  fontDetail: string;
  fullName: string;
  /** signature string (in case of typed) or encoded string (in case of drawn) */
  signatureString: string;
  tildaid: string;
  type: 'Drawn' | 'Typed';
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsFoldersCreate, documentsFoldersUpdate]
 */
export interface FolderInput {
  /** name of the folder */
  name: string;
  /** tildaid of the parent folder(optional) */
  parentFolderId?: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsTypesCreate, documentsTypesList, documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[OutputDocTypeDetails, DocumentDetails]
 */
export interface FolderLocation {
  /** Type of the folder */
  folderType?: string;
  /** tildaid of the folder */
  id?: string;
  mandatoryFields?: (
    | 'studies'
    | 'sites'
    | 'patients'
    | 'users'
    | 'visits'
    | 'tags'
    | 'expiration-date'
    | 'language'
    | 'date'
    | 'dateType'
  )[];
  /** Name of the folder */
  name?: string;
  optionalFields?: (
    | 'studies'
    | 'sites'
    | 'patients'
    | 'users'
    | 'visits'
    | 'tags'
    | 'expiration-date'
    | 'language'
    | 'date'
    | 'dateType'
  )[];
  /** paths to the folder */
  paths?: string[];
  /** Scope of the folder */
  scope?: string;
  /** tildaid of the scope object */
  scopeId?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsFoldersDetail, documentsFoldersList]
 * Used in Objects[FolderView]
 */
export interface FolderView {
  /** number of documents associated with this folder */
  count: number;
  documents: DocView[];
  folders: FolderView[];
  /** tildaid of the folder */
  id: string;
  mandatoryFields?: (
    | 'studies'
    | 'sites'
    | 'patients'
    | 'users'
    | 'visits'
    | 'tags'
    | 'expiration-date'
    | 'language'
    | 'date'
    | 'dateType'
  )[];
  /** name of the folder */
  name: string;
  optionalFields?: (
    | 'studies'
    | 'sites'
    | 'patients'
    | 'users'
    | 'visits'
    | 'tags'
    | 'expiration-date'
    | 'language'
    | 'date'
    | 'dateType'
  )[];
  /** folder path; Populated only when folder structure(not content) is requested */
  path?: string;
  /** Scope of the folder */
  scope: string;
  /** Type of the folder */
  type: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsFoldersContentCreate]
 */
export interface FoldersAndDocuments {
  documents: string[];
  folders: string[];
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocAnnotationVal]
 */
export interface IODocFieldVal {
  /** whether this value was ever set by the app */
  isValid: boolean;
  /** tildaid of the field */
  tildaid?: string;
  /** Unique Id to match field */
  uniqueId?: string;
  /** Value (valid for instance only, "" in case of template) */
  value: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocAnnotationVal]
 */
export interface IODocSignerVal {
  /** tildaid of the signer */
  tildaid?: string;
  /** Unique Id to match signer */
  uniqueId?: string;
  /** Id of the user who plays as the signer */
  userId: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[docTypes1572List]
 */
export interface Info1572 {
  esignDetails?: ESign;
  investigator: Investigator;
  irbs: AllPartners;
  labs: AllPartners;
  reviewerESign?: UserSignature;
  site: AllSiteInfo;
  study: ProtocolInfo;
  subInvestigators: Investigator[];
}

/**
 *
 * Used in Module[documents]:Services[docTypes1572List]
 * Used in Objects[Info1572]
 */
export interface Investigator {
  address?: RegAddress;
  /** Possible values: "cv" */
  education?: string;
  id?: string;
  /** Whenever name is displayed, it will be displayed as "${Title} ${Name}, ${Qualifications}" */
  name?: string;
  /** To be added as postfix to the investigator name e.g. "MD" */
  qualifications?: string;
  /** To be added as prefix to the investigator name e.g "Dr." */
  title?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsTypesCreate, documentsTypesList]
 * Used in Objects[SuggestedDocTypeDetails, DocumentDetails]
 */
export interface OutputDocTypeDetails {
  context: 'Global' | 'Organization';
  /** empty for Global DocTypes */
  contextId?: string;
  kind: 'binary' | 'live' | 'form' | 'log' | 'table';
  mandatoryFields: (
    | 'studies'
    | 'sites'
    | 'patients'
    | 'users'
    | 'visits'
    | 'tags'
    | 'expiration-date'
    | 'language'
    | 'date'
    | 'dateType'
  )[];
  name: string;
  optionalFields: (
    | 'studies'
    | 'sites'
    | 'patients'
    | 'users'
    | 'visits'
    | 'tags'
    | 'expiration-date'
    | 'language'
    | 'date'
    | 'dateType'
  )[];
  reviewRequired?: boolean;
  reviewerRole?: string;
  scope?:
    | 'Organization'
    | 'User'
    | 'OrgUser'
    | 'Study'
    | 'Site'
    | 'StudySite'
    | 'Patient'
    | 'Subject';
  /** Deprecated in v2.1, will always be an empty list */
  suggestedFolders?: FolderLocation[];
  templateScope?: string;
  tildaid: string;
  version?: number;
}

/**
 *
 * Used in Module[documents]:Services[docTypes1572List]
 * Used in Objects[Info1572]
 */
export interface ProtocolInfo {
  description?: string;
  name?: string;
  phase?: string;
  protocolNumber?: string;
  protocolVersion?: string;
}

/**
 *
 * Used in Module[documents]:Services[docTypes1572List]
 * Used in Objects[Investigator]
 */
export interface RegAddress {
  city?: string;
  country?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  suite?: string;
}

/**
 *
 * Used in Module[documents]:Services[docTypes1572List]
 * Used in Objects[AllPartners]
 */
export interface RegPartner {
  city?: string;
  country?: string;
  name?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  suite?: string;
  tildaid?: string;
}

/**
 *
 * Used in Module[documents]:Services[docTypes1572List]
 * Used in Objects[AllSiteInfo]
 */
export interface RegSiteInfo {
  city?: string;
  country?: string;
  name?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  suite?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsTemplateSignersDetail]
 */
export interface SignerType {
  displayRole: string;
  isUser: boolean;
  role: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsMlTypesList]
 */
export interface SuggestedDocTypeDetails {
  docId: string;
  suggestedType?: OutputDocTypeDetails;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocumentDetails]
 */
export interface TemplateDetails {
  /** Current generation(version) of the template */
  currentGeneration: string;
  /** Generation(version) of the template used for the document */
  generationInUse: string;
  /** org tildaid of the template document */
  orgId: string;
  /** document signed url (external) for template (current generation) */
  signedUrl?: string;
  /** document tildaid of the template document */
  tildaid: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsAssignmentsUpdate]
 */
export interface UpdateDocAssignmentInputs {
  /** list of tildaid of users to be assigned */
  assignees: string[];
  /** task description */
  description?: string;
  /** state of the task */
  state?: 'ready' | 'completed' | 'not applicable';
  /** tildaid of the review task */
  taskId: string;
  /** title of the assignment */
  title?: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsTasksDetail, docTypesDoaList]
 * Used in Objects[DocTaskOutput, DoaLogData]
 */
export interface UserDuties {
  duties: UserDutyEntry[];
  name: string;
  role: string;
  tildaid: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsTasksDetail, docTypesDoaList]
 * Used in Objects[UserDuties]
 */
export interface UserDutyEntry {
  actionList?: string;
  dutyId?: string;
  dutyNumber: number;
  /** If None, the user is currently assigned */
  endDate?: number;
  /** If None, period.endDate should also be None. This is used, when duty is removed */
  endDatePISign?: UserSignature;
  startDate: number;
  /** If None, status Pending for PI */
  startDatePISign?: UserSignature;
  tildaid: string;
  title: string;
  /** tildaid of the user */
  userId: string;
  /** If None, status Pending for user */
  userSignature?: UserSignature;
}

/**
 *
 * Used in Module[documents]:Services[docTypes1572List]
 * Used in Objects[DoclibDoaLogDataEndOfStudy, DoclibDoaLogDataStartOfStudy, Info1572, UserDutyEntry]
 */
export interface UserSignature {
  comment?: string;
  date: number;
  signatureId: string;
  user: DoaUserType;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsQueryCreate]
 */
export interface AddQueryPayload {
  assignTo?: string;
  /** description/reply to be updated */
  description?: string;
  pointOnDocument?: DocumentLocation;
  queryType?:
    | 'Missed Data/Missed signatures'
    | 'Confirmatory Queries'
    | 'Possible Lack of Information'
    | 'Transcription errors'
    | 'Possible protocol Deviation'
    | 'Possibly missed Adverse Event'
    | 'Missed lab report';
  /** Reply to be updated. replyId=queryId denotes the original query. Empty replyId denotes adding reply (execsvc only) */
  replyId?: string;
  /** state of the query to be updated */
  state?: 'Open' | 'Answer' | 'Resolve' | 'Verify' | 'Delete';
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsAnnotationsUpdate]
 */
export interface AnnotationUpdate {
  /** logs to be added */
  activityLog: ChangeLog[];
  /** fields to be updated */
  fields: DocFieldUpdate[];
  /** signers to be updated */
  signers: DocSignerUpdate[];
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocumentVersion]
 */
export interface ChangeWithESign {
  changeLog: ChangeLog;
  eSignature: ESignature;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocumentDetails, DocumentSummary]
 */
export interface DocAssignment {
  /** tildaids of the users who are assigned the document */
  assignees?: AssigneeInfo[];
  /** category of the task */
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  /** assignee who closed the task; only valid for closed tasks */
  closedBy?: string;
  /** description of the task */
  description?: string;
  /** status of the task */
  status?: 'ready' | 'completed' | 'not applicable';
  /** tildaid of the task */
  taskId?: string;
  /** title of the task */
  title?: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[OutputDocumentComment]
 */
export interface DocCommentUser {
  name: string;
  profilePicURL: string;
  tildaid: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsAnnotationsUpdate]
 * Used in Objects[AnnotationUpdate]
 */
export interface DocFieldUpdate {
  /** unique id of the field */
  uniqueId: string;
  /** Value of the field */
  value: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsAnnotationsUpdate]
 * Used in Objects[AnnotationUpdate]
 */
export interface DocSignerUpdate {
  /** unique id of the signer */
  uniqueId: string;
  /** Id of the user who plays as the signer */
  userId: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsPartialUpdate]
 */
export interface DocUpdateInputs {
  allowDuplicate?: string;
  /** document annotation */
  annotation?: DocAnnotationSpec;
  /** attestation string to be used for certification */
  attestation?: string;
  autoRename?: string;
  changeType:
    | 'doctype'
    | 'association'
    | 'doctype_and_association'
    | 'annotation_change'
    | 'content_change';
  /** id of another document (template) to copy from */
  copyFrom?: string;
  folderIds?: string[];
  /** tildaid of the document to be updated */
  id: string;
  /** metadata to be updated */
  meta?: DocMeta;
  /** filename for the document to be uploaded/modified - Overrides FileName of the content */
  originalFileName?: string;
  /** Whether attestation should be skipped (since it is done inside the document) */
  skipAttestation?: string;
  /** list of tags to be added */
  tags?: string;
  /** generation(version) of template  This can be used with CopyFrom(internal copy) or w/o CopyFrom(the template is being used to update document by UI directly) */
  templateGeneration?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsVersionDetail]
 */
export interface DocumentContents {
  /** document content type */
  contentType: string;
  /** base64 encoded file contents */
  encodedFile: string;
  /** url of the template document: Only valid in case of GET operation on a live document */
  signedTemplateUrl?: string;
  /** document url (external): Only valid for GET operation for single document */
  signedUrl?: string;
  /** Use Id instead of DocumentId to normalize code with doclib and execlib */
  tildaid: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocTaskOutput]
 */
export interface DocumentDetails {
  /** List of actions possible with a document; present in individual document GET only */
  actionList: (
    | 'Document_Assign'
    | 'Document_Annotate'
    | 'Document_eSign'
    | 'Document_Reject'
    | 'Document_Certify'
    | 'Document_Categorize'
    | 'Document_Comment'
    | 'Document_Query'
    | 'Document_Replace'
    | 'Document_Archive'
    | 'Document_Unarchive'
    | 'Document_Delete'
    | 'Document_Download'
    | 'Document_Enhance'
  )[];
  /** whether the document is archived */
  archived: boolean;
  /** list of users the document is assigned to (comma separated tildaid's of users) */
  assignedToUsers: string[];
  /** tildaid of context object for  e.g. 'Study', 'User', 'Patient', etc. */
  associatedWithId?: string;
  /** type of context object for  e.g. 'Study', 'User', 'Patient', etc. */
  associatedWithType?: string;
  /** blinded access of the document */
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  /** comments; present in individual document GET only */
  comments?: OutputDocumentCommentThread[];
  /** document content type */
  contentType: string;
  /** created at */
  createdDate: number;
  /** date for the document(if applicable) */
  date?: string;
  /** type of date; applicable for the 'date' field */
  dateType?:
    | 'Application Date'
    | 'Approval Date'
    | 'Certification Date'
    | 'Change Control Date'
    | 'Complaint Date'
    | 'Correspondence Date'
    | 'Date Generated'
    | 'Destruction Date'
    | 'Document Date'
    | 'Effective Date'
    | 'Expiration Date'
    | 'File Date'
    | 'Filenote Date'
    | 'Issue Date'
    | 'Last Entry Date'
    | 'Last Visit Date'
    | 'Meeting Start Date'
    | 'Notification Date'
    | 'Other'
    | 'Recall Date'
    | 'Registration Date'
    | 'Release Date'
    | 'Report Date'
    | 'Return Date'
    | 'Shipment Date'
    | 'Signature Date'
    | 'Submission Date'
    | 'Training Date'
    | 'Transfer Date'
    | 'Version Date'
    | 'Visit Start Date';
  /** description */
  description?: string;
  /** Fields from Document */
  docKind?: 'binary' | 'live' | 'form' | 'log' | 'table';
  /** Details of doc type; present in individual document GET only. For listing, use DocTypeName */
  docTypeDetails?: OutputDocTypeDetails;
  /** document type (name) for document listing */
  docTypeName?: string;
  /** base64 encoded file contents: Only valid for GET operation for single document with keyword highlighting */
  encodedFile: string;
  /** expiration date of the document(if applicable) */
  expirationDate?: string;
  /** document url in case this is representing externally uploaded document (EHR, migration, etc.) */
  externalUrl?: string;
  /** Fields from DocMeta */
  fileName: string;
  /** folders in which this document is added */
  folders?: FolderLocation[];
  /** deprecate from API: Current generation(version) of the document */
  generation?: number;
  /** document annotation; present in individual document GET only */
  instanceAnnotation?: DocAnnotationVal;
  /** Whether the document should be public visible */
  isPublic?: boolean;
  /** language of the document */
  language?:
    | 'Arabic'
    | 'Bengali'
    | 'Chinese (Simplified)'
    | 'Chinese (Traditional)'
    | 'Dutch'
    | 'English'
    | 'Filipino'
    | 'French'
    | 'German'
    | 'Greek'
    | 'Hebrew'
    | 'Hindi'
    | 'Indonesian'
    | 'Italian'
    | 'Japanese'
    | 'Korean'
    | 'Malay'
    | 'Telugu'
    | 'Polish'
    | 'Portuguese'
    | 'Punjabi'
    | 'Russian'
    | 'Spanish'
    | 'Swedish'
    | 'Tamil'
    | 'Thai'
    | 'Turkish'
    | 'Ukrainian'
    | 'Urdu'
    | 'Vietnamese';
  /** deprecate from API: location key */
  location?: string;
  /** Metadata for highlighted keywords (json) indicating matched terms, page locations and colour: Only valid for GET operation for single document with keyword highlighting */
  meta?: object[];
  /** DocTypeName as per ML classification */
  mlDocType: string;
  /** live document json */
  objectDetails?: string;
  /** Fields from DocumentSummary */
  orgAlias: string;
  /** number of pages in the document */
  pages: number;
  /** associated patient (name) */
  patient?: string;
  /** associated patient (tildaid) */
  patientId?: string;
  /** queries attached to the document */
  queries?: QueryDetails[];
  /** last reviewed at */
  reviewDate?: number;
  /** list of document reviews */
  reviews: DocAssignment[];
  score?: number;
  /** list of reviewers (comma separated tildaid's of users) */
  signedByUsers: string[];
  /** document url (external): Only valid for GET operation for single document */
  signedUrl?: string;
  /** associated site (name) */
  site?: string;
  /** associated site (tildaid) */
  siteId?: string;
  /** document size */
  size: number;
  /** status of the document */
  status:
    | 'Draft'
    | 'Certified'
    | 'eSigned'
    | 'Rejected'
    | 'Deleted'
    | 'Uploaded'
    | 'Archived';
  /** associated study (name) */
  study?: string;
  /** associated study (tildaid) */
  studyId?: string;
  /** subjectId for patient - only valid with filtering on particular study */
  subjectId: string;
  /** tags associated with the document */
  tags: string;
  /** whether this document is a template */
  template: boolean;
  /** document annotation; present in individual document GET only */
  templateAnnotation?: DocAnnotationSpec;
  /** info about template used for the document (if any): Only valid for GET operation for single document */
  templateDetails?: TemplateDetails;
  /** Fields from DbCommon */
  tildaid: string;
  /** uploaded by (user tildaid) */
  uploadedBy: string;
  /** associated user (email) */
  user?: string;
  /** associated user (tildaid) */
  userId?: string;
  /** Version */
  versionNumber: number;
  /** Versions of the document; present in individual document GET only */
  versions: DocumentVersion[];
  /** associated visit (name) */
  visit?: string;
  /** associated visit (Visit or VisitV2: tildaid) */
  visitId?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsScopesList]
 */
export interface DocumentScopes {
  /** number of records (after search) without pagination */
  counts: DocumentDocumentScopesCounts;
  /** list of date types */
  dateTypes: string[];
  /** list of languages */
  languages: string[];
  /** list of patients */
  patients: Identifier[];
  /** list of sites */
  sites: Identifier[];
  /** list of studies */
  studies: StudyIdentifier[];
  /** list of subjects */
  subjects: Identifier[];
  /** list of users */
  users: Identifier[];
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsShareCreate, documentsShareUpdate]
 */
export interface DocumentShareInput {
  /** tildaid of the Document */
  documentId: string;
  /** tildaid of the Organization */
  orgId: string;
  /** status */
  status?:
    | 'Draft'
    | 'Certified'
    | 'eSigned'
    | 'Rejected'
    | 'Deleted'
    | 'Uploaded'
    | 'Archived';
}

/**
 *
 * Used in Module[documents]:Services[documentsList]
 * Used in Objects[ListDocumentResponse]
 */
export interface DocumentSummary {
  /** List of actions possible with a document; present in individual document GET only */
  actionList: (
    | 'Document_Assign'
    | 'Document_Annotate'
    | 'Document_eSign'
    | 'Document_Reject'
    | 'Document_Certify'
    | 'Document_Categorize'
    | 'Document_Comment'
    | 'Document_Query'
    | 'Document_Replace'
    | 'Document_Archive'
    | 'Document_Unarchive'
    | 'Document_Delete'
    | 'Document_Download'
    | 'Document_Enhance'
  )[];
  /** whether the document is archived */
  archived: boolean;
  /** list of users the document is assigned to (comma separated tildaid's of users) */
  assignedToUsers: string[];
  /** tildaid of context object for  e.g. 'Study', 'User', 'Patient', etc. */
  associatedWithId?: string;
  /** type of context object for  e.g. 'Study', 'User', 'Patient', etc. */
  associatedWithType?: string;
  /** blinded access of the document */
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  /** document content type */
  contentType: string;
  /** created at */
  createdDate: number;
  /** date for the document(if applicable) */
  date?: string;
  /** type of date; applicable for the 'date' field */
  dateType?:
    | 'Application Date'
    | 'Approval Date'
    | 'Certification Date'
    | 'Change Control Date'
    | 'Complaint Date'
    | 'Correspondence Date'
    | 'Date Generated'
    | 'Destruction Date'
    | 'Document Date'
    | 'Effective Date'
    | 'Expiration Date'
    | 'File Date'
    | 'Filenote Date'
    | 'Issue Date'
    | 'Last Entry Date'
    | 'Last Visit Date'
    | 'Meeting Start Date'
    | 'Notification Date'
    | 'Other'
    | 'Recall Date'
    | 'Registration Date'
    | 'Release Date'
    | 'Report Date'
    | 'Return Date'
    | 'Shipment Date'
    | 'Signature Date'
    | 'Submission Date'
    | 'Training Date'
    | 'Transfer Date'
    | 'Version Date'
    | 'Visit Start Date';
  /** description */
  description?: string;
  /** Fields from Document */
  docKind?: 'binary' | 'live' | 'form' | 'log' | 'table';
  /** document type (name) for document listing */
  docTypeName?: string;
  /** expiration date of the document(if applicable) */
  expirationDate?: string;
  /** document url in case this is representing externally uploaded document (EHR, migration, etc.) */
  externalUrl?: string;
  /** Fields from DocMeta */
  fileName: string;
  /** deprecate from API: Current generation(version) of the document */
  generation?: number;
  /** Whether the document should be public visible */
  isPublic?: boolean;
  /** language of the document */
  language?:
    | 'Arabic'
    | 'Bengali'
    | 'Chinese (Simplified)'
    | 'Chinese (Traditional)'
    | 'Dutch'
    | 'English'
    | 'Filipino'
    | 'French'
    | 'German'
    | 'Greek'
    | 'Hebrew'
    | 'Hindi'
    | 'Indonesian'
    | 'Italian'
    | 'Japanese'
    | 'Korean'
    | 'Malay'
    | 'Telugu'
    | 'Polish'
    | 'Portuguese'
    | 'Punjabi'
    | 'Russian'
    | 'Spanish'
    | 'Swedish'
    | 'Tamil'
    | 'Thai'
    | 'Turkish'
    | 'Ukrainian'
    | 'Urdu'
    | 'Vietnamese';
  /** deprecate from API: location key */
  location?: string;
  /** DocTypeName as per ML classification */
  mlDocType: string;
  /** live document json */
  objectDetails?: string;
  /** Fields from DocumentSummary */
  orgAlias: string;
  /** number of pages in the document */
  pages: number;
  /** associated patient (name) */
  patient?: string;
  /** associated patient (tildaid) */
  patientId?: string;
  /** last reviewed at */
  reviewDate?: number;
  /** list of document reviews */
  reviews: DocAssignment[];
  score?: number;
  /** list of reviewers (comma separated tildaid's of users) */
  signedByUsers: string[];
  /** associated site (name) */
  site?: string;
  /** associated site (tildaid) */
  siteId?: string;
  /** document size */
  size: number;
  /** status of the document */
  status:
    | 'Draft'
    | 'Certified'
    | 'eSigned'
    | 'Rejected'
    | 'Deleted'
    | 'Uploaded'
    | 'Archived';
  /** associated study (name) */
  study?: string;
  /** associated study (tildaid) */
  studyId?: string;
  /** subjectId for patient - only valid with filtering on particular study */
  subjectId: string;
  /** tags associated with the document */
  tags: string;
  /** whether this document is a template */
  template: boolean;
  /** Fields from DbCommon */
  tildaid: string;
  /** uploaded by (user tildaid) */
  uploadedBy: string;
  /** associated user (email) */
  user?: string;
  /** associated user (tildaid) */
  userId?: string;
  /** Version */
  versionNumber: number;
  /** associated visit (name) */
  visit?: string;
  /** associated visit (Visit or VisitV2: tildaid) */
  visitId?: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocumentDetails]
 */
export interface DocumentVersion {
  changeLog: ChangeWithESign[];
  fileName: string;
  generation: string;
  versionNumber: number;
}

/**
 *
 * Used in Module[documents]:Services[documentsScopesList]
 * Used in Objects[DocumentScopes, StudyIdentifier]
 */
export interface Identifier {
  /** tildaid */
  id: string;
  /** name (name in case of study and user, fullname or user-visible ids in case of patients) */
  name: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsTypesCreate]
 */
export interface InputDocTypeDetails {
  kind?: 'binary' | 'live' | 'form' | 'log' | 'table';
  mandatoryFields: (
    | 'studies'
    | 'sites'
    | 'patients'
    | 'users'
    | 'visits'
    | 'tags'
    | 'expiration-date'
    | 'language'
    | 'date'
    | 'dateType'
  )[];
  name: string;
  reviewRequired?: boolean;
  reviewerRole?: string;
  scope?:
    | 'Organization'
    | 'User'
    | 'OrgUser'
    | 'Study'
    | 'Site'
    | 'StudySite'
    | 'Patient'
    | 'Subject';
  /** scope to locate the template document: In case of live-document only */
  templateScope?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsCommentsCreate2, documentsCommentsUpdate]
 */
export interface InputDocumentComment {
  comment: string;
  resolve?: boolean;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsCommentsCreate]
 */
export interface InputDocumentCommentThread {
  comment: string;
  commentType: 'comment' | 'reject';
  pointOnDocument?: DocumentLocation;
  resolved: boolean;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsList]
 */
export interface ListDocumentResponse {
  /** Number of documents */
  count: number;
  /** List of documents */
  data: DocumentSummary[];
  /** Whether to display Phi information */
  phi: boolean;
  /** studyId selected when "auto" is passed */
  study: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[OutputDocumentCommentThread]
 */
export interface OutputDocumentComment {
  comment: string;
  createdat?: number;
  tildaid: string;
  updatedat?: number;
  user: DocCommentUser;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocumentDetails]
 */
export interface OutputDocumentCommentThread {
  commentType: 'comment' | 'reject';
  comments: OutputDocumentComment[];
  createdat: number;
  outdated: boolean;
  pointOnDocument?: DocumentLocation;
  resolved: boolean;
  tildaid: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsQueryDetail]
 * Used in Objects[DocTaskOutput, DocumentDetails]
 */
export interface QueryDetails {
  availableActions: Record<string, string>;
  availableActions2: QuerylibQueryActions[];
  changelog: ChangeLog[];
  commentCount?: number;
  createdBy: string;
  pointOnDocument?: DocumentLocation;
  query?: Query;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsRejectUpdate]
 */
export interface RejectComment {
  comment: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsScopesList]
 * Used in Objects[DocumentScopes]
 */
export interface StudyIdentifier {
  /** blindedAccessScopes (only valid for given study) */
  blindedAccessScopes?: Identifier[];
  /** tildaid */
  id: string;
  /** name (name in case of study and user, fullname or user-visible ids in case of patients) */
  name: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsCreate, documentsDetail, documentsLiveCreate]
 * Used in Objects[DocAssignment]
 */
export interface AssigneeInfo {
  email?: string;
  /** not for UI. used in Update flow */
  inboxId?: string;
  name?: string;
  profilePicURL?: string;
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsBindersCreate, documentsBindersList]
 */
export interface Binder {
  /** Possible values: `Scope` - scoped to some tildadb object, `Tag` - primarily for managing tag */
  binderType: 'Scope' | 'Tag' | 'Key';
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** Metadata      string `json:"metadata"`                                                         // Additional metadata associated with the binder */
  documentSetId?: string;
  holdbitmap?: number;
  /** Type of the tildadb object to which this binder relates to */
  scope: string;
  /** Id of the tildadb object to which this binder relates to */
  scopeId: string;
  /** Used by the application of the binder */
  status?: string;
  /** The tag (optional) associated with this binder */
  tag?: string;
  /** whether this binder is a template */
  template?: boolean;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsTemplateUpdate]
 */
export interface DocAnnotationCommon {
  /** (unique) document tag which can be used in addition to docType to search the instance */
  documentName?: string;
  /** document type of the instance document which uses this template */
  documentType: string;
  /** Optional document for end-user */
  optional?: boolean;
  /** 0 - before document builder, 1 - with document builder */
  version?: number;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsTemplateFieldsUpdate]
 * Used in Objects[DocAnnotationSpec]
 */
export interface DocFieldSpec {
  /** Whether this field needs to be filled-in automatically by the back-end */
  autoFill: boolean;
  boundsHeight: number;
  boundsWidth: number;
  boundsX: number;
  boundsY: number;
  /** Description */
  description?: string;
  /** Details of HDM key in the back-end (to be split into multiple attributes as part of HDM integration) */
  hdmDetails?: string;
  inputFormat?: string;
  /** To be decided as per UX: e.g. 'text' | 'checkbox' | 'radiogroup' | 'signature' | 'dropdown' */
  inputType: string;
  mandatory?: boolean;
  /** Name for the parameter */
  name: string;
  normalizedSize: number;
  /** UniqueId of the signer who is responsible to fill-up this field */
  signerId?: string;
  /** UniqueId of the parameter */
  uniqueId: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsPartialUpdate]
 * Used in Objects[DocUpdateInputs]
 */
export interface DocMeta {
  /** tildaid of the context object */
  associatedWithId?: string;
  associatedWithType?:
    | 'ProtocolDeviation'
    | 'Study'
    | 'DslPlanDefinition'
    | 'CarePlan'
    | 'ParticipantVisit'
    | 'ParticipantActivity'
    | 'ParticipantQuestion'
    | 'ParticipantDocOverlay'
    | 'ParticipantDocUpload'
    | 'ParticipantDslSpecNode'
    | 'Patient'
    | 'Actor'
    | 'Organization'
    | 'Task'
    | 'Site';
  /** blinded access of the document */
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  /** document content type: */
  contentType: string;
  /** date for the document(if applicable) */
  date?: string;
  /** type of date; applicable for the 'date' field */
  dateType?:
    | 'Application Date'
    | 'Approval Date'
    | 'Certification Date'
    | 'Change Control Date'
    | 'Complaint Date'
    | 'Correspondence Date'
    | 'Date Generated'
    | 'Destruction Date'
    | 'Document Date'
    | 'Effective Date'
    | 'Expiration Date'
    | 'File Date'
    | 'Filenote Date'
    | 'Issue Date'
    | 'Last Entry Date'
    | 'Last Visit Date'
    | 'Meeting Start Date'
    | 'Notification Date'
    | 'Other'
    | 'Recall Date'
    | 'Registration Date'
    | 'Release Date'
    | 'Report Date'
    | 'Return Date'
    | 'Shipment Date'
    | 'Signature Date'
    | 'Submission Date'
    | 'Training Date'
    | 'Transfer Date'
    | 'Version Date'
    | 'Visit Start Date';
  /** description */
  description?: string;
  /** name of document-type */
  docTypeName?: string;
  /** expiration date of the document(if applicable) */
  expirationDate?: string;
  /** filename of the document */
  fileName: string;
  /** whether the doc is publicly available */
  isPublic?: boolean;
  /** language of the document */
  language?:
    | 'Arabic'
    | 'Bengali'
    | 'Chinese (Simplified)'
    | 'Chinese (Traditional)'
    | 'Dutch'
    | 'English'
    | 'Filipino'
    | 'French'
    | 'German'
    | 'Greek'
    | 'Hebrew'
    | 'Hindi'
    | 'Indonesian'
    | 'Italian'
    | 'Japanese'
    | 'Korean'
    | 'Malay'
    | 'Telugu'
    | 'Polish'
    | 'Portuguese'
    | 'Punjabi'
    | 'Russian'
    | 'Spanish'
    | 'Swedish'
    | 'Tamil'
    | 'Thai'
    | 'Turkish'
    | 'Ukrainian'
    | 'Urdu'
    | 'Vietnamese';
  /** tildaid of the patient related to the document */
  patientId?: string;
  /** tildaid of the site related to the document */
  siteId?: string;
  /** tildaid of the study related to the document */
  studyId?: string;
  /** whether this document is a template */
  template: boolean;
  /** tildaid of the user related to the document */
  userId?: string;
  /** tildaid of the visit related to the document */
  visitId?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsTemplateSignersUpdate]
 * Used in Objects[DocAnnotationSpec]
 */
export interface DocSignerSpec {
  /** Specification of the roles that are eligible for this signer */
  allowedRoles?: string[];
  /** color to be used for the signer on UI */
  color?: string;
  /** Name of the signer */
  name: string;
  /** deprecated: To be used for backward compatibility with older UI */
  signerType?:
    | 'patient'
    | 'witness'
    | 'pregnant_partner'
    | 'legal_representative'
    | 'clinical_staff';
  /** Unique Id to match signer */
  uniqueId?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsUpdate]
 * Used in Objects[AffiliationOutput, PartnerOutput]
 */
export interface Document {
  /** whether the document is archived */
  archived: boolean;
  /** tildaid of the context object */
  associatedWithId?: string;
  associatedWithType?:
    | 'ProtocolDeviation'
    | 'Study'
    | 'DslPlanDefinition'
    | 'CarePlan'
    | 'ParticipantVisit'
    | 'ParticipantActivity'
    | 'ParticipantQuestion'
    | 'ParticipantDocOverlay'
    | 'ParticipantDocUpload'
    | 'ParticipantDslSpecNode'
    | 'Patient'
    | 'Actor'
    | 'Organization'
    | 'Task'
    | 'Site';
  /** blinded access of the document */
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  /** document checksum */
  cksum: string;
  /** whether ML classification is overridden by user */
  classOverridden?: boolean;
  /** whether document classification is done by ML */
  classifiedByML: boolean;
  /** document content type: */
  contentType: string;
  createdat?: number;
  /** date for the document(if applicable) */
  date?: string;
  /** type of date; applicable for the 'date' field */
  dateType?:
    | 'Application Date'
    | 'Approval Date'
    | 'Certification Date'
    | 'Change Control Date'
    | 'Complaint Date'
    | 'Correspondence Date'
    | 'Date Generated'
    | 'Destruction Date'
    | 'Document Date'
    | 'Effective Date'
    | 'Expiration Date'
    | 'File Date'
    | 'Filenote Date'
    | 'Issue Date'
    | 'Last Entry Date'
    | 'Last Visit Date'
    | 'Meeting Start Date'
    | 'Notification Date'
    | 'Other'
    | 'Recall Date'
    | 'Registration Date'
    | 'Release Date'
    | 'Report Date'
    | 'Return Date'
    | 'Shipment Date'
    | 'Signature Date'
    | 'Submission Date'
    | 'Training Date'
    | 'Transfer Date'
    | 'Version Date'
    | 'Visit Start Date';
  delpending?: boolean;
  deltimestamp?: number;
  /** description */
  description?: string;
  docKind?: 'binary' | 'live' | 'form' | 'log' | 'table';
  /** name of document-type */
  docTypeName?: string;
  /** expiration date of the document(if applicable) */
  expirationDate?: string;
  /** filename of the document */
  fileName: string;
  generation?: number;
  holdbitmap?: number;
  /** whether the doc is publicly available */
  isPublic?: boolean;
  /** language of the document */
  language?:
    | 'Arabic'
    | 'Bengali'
    | 'Chinese (Simplified)'
    | 'Chinese (Traditional)'
    | 'Dutch'
    | 'English'
    | 'Filipino'
    | 'French'
    | 'German'
    | 'Greek'
    | 'Hebrew'
    | 'Hindi'
    | 'Indonesian'
    | 'Italian'
    | 'Japanese'
    | 'Korean'
    | 'Malay'
    | 'Telugu'
    | 'Polish'
    | 'Portuguese'
    | 'Punjabi'
    | 'Russian'
    | 'Spanish'
    | 'Swedish'
    | 'Tamil'
    | 'Thai'
    | 'Turkish'
    | 'Ukrainian'
    | 'Urdu'
    | 'Vietnamese';
  /** key for internally managed documents, used to find duplicates */
  location?: string;
  /** classification (docType) given by ML */
  mlDocType: string;
  /** number of pages */
  pages: number;
  /** tildaid of the patient related to the document */
  patientId?: string;
  /** Identifier for semantic search indexing (ML) */
  searchMetaIdent?: string;
  /** tildaid of the site related to the document */
  siteId?: string;
  /** document size */
  size: number;
  /** status */
  status:
    | 'Draft'
    | 'Certified'
    | 'eSigned'
    | 'Rejected'
    | 'Deleted'
    | 'Uploaded'
    | 'Archived';
  /** tildaid of the study related to the document */
  studyId?: string;
  /** whether this document is a template */
  template: boolean;
  tildaid?: string;
  updatedat?: number;
  /** Note: If changing the name of this attribute also update the corresponding attribute for MedicalDocument */
  url?: string;
  /** tildaid of the user related to the document */
  userId?: string;
  versionNumber: number;
  /** tildaid of the visit related to the document */
  visitId?: string;
}

/**
 *
 * Used in Module[documents]:Services[documentsQueryCreate, documentsCommentsCreate, documentsQueryDetail]
 * Used in Objects[AddQueryPayload, InputDocumentCommentThread, OutputDocumentCommentThread, QueryDetails]
 */
export interface DocumentLocation {
  pageIndex: number;
  xCoordinate: number;
  yCoordinate: number;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsShareCreate, documentsShareUpdate]
 */
export interface DocumentShare {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** tildaid of the Document */
  documentId: string;
  holdbitmap?: number;
  /** tildaid of the Organization */
  orgId: string;
  /** status */
  status:
    | 'Draft'
    | 'Certified'
    | 'eSigned'
    | 'Rejected'
    | 'Deleted'
    | 'Uploaded'
    | 'Archived';
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[documents]:Services[docTypesDoaList]
 * Used in Module[trialexec]:Services[trialexecStudyDutyplanAdoptCreate, trialexecStudyDutyplanCopyCreate, trialexecStudyDutyplanCreate, trialexecStudyDutyplanDelete, trialexecStudyDutyplanDetail2, trialexecStudyDutyplanDutyCreate, trialexecStudyDutyplanDutyDelete, trialexecStudyDutyplanDutyUpdate, trialexecStudyDutyplanPublishCreate, trialexecStudyDutyplanUpdate, trialexecStudyDutyplanAdoptCreate, trialexecStudyDutyplanPublishCreate]
 * Used in Objects[DoaLogData, DutiesPlanResponse, DutyPlanPayload, GroupedDuties]
 */
export interface Duty {
  attributes?: string;
  blob?: string;
  capabilities?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** DutyID is the same value as the duty's tildaid. This is to help distinguish StudySiteDuties */
  dutyId?: string;
  holdbitmap?: number;
  location?: string;
  /** deprecating, use title instead */
  name?: string;
  nodeId?: string;
  notes?: string;
  number?: number;
  parentIds?: string[];
  position?: number;
  /** TODO: handle regular expressions */
  role?: string;
  status?: string;
  studyId?: string;
  tildaid?: string;
  title?: string;
  treeId?: string;
  type?: string;
  updatedat?: number;
  version?: number;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsFoldersCreate, documentsFoldersDuplicateCreate, documentsFoldersUpdate]
 */
export interface Folder {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** Applicable only for Org scoped folders */
  doctypes?: string[];
  /** Applicable only for Org scoped folders */
  folderManagerId?: string;
  /** Type of the folder */
  folderType: string;
  holdbitmap?: number;
  /** Flag to indicate if we should hide this folder from non-members */
  isInternal?: boolean;
  /** depth from the root folder */
  level?: number;
  /** Name of the folder */
  name: string;
  /** Scope of the folder. enum: ['Organization', 'Actor'] */
  scope: string;
  /** tildaid of the object to which this folder relates to */
  scopeId: string;
  tildaid?: string;
  updatedat?: number;
  /** folder version(for 'Organization' folders) */
  version?: number;
}

/**
 *
 * Used in Module[documents]:Services[documentsQueryDetail]
 * Used in Module[trialexec]:Services[trialexecCareplanAeActivityQuestionQueryCreate2, trialexecCareplanQueryCreate2, trialexecCareplanVisitActivityQuestionQueryCreate2]
 * Used in Objects[QueryDetails, UserWithQuery, OutputMonitorQueryPerSiteType, OutputQuery]
 */
export interface Query {
  assignTo?: string;
  careplanId?: string;
  /** Relationship with */
  context?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  /** MonitorFlag */
  externalFlag?: boolean;
  firstResponse?: number;
  hdmClassId?: string;
  holdbitmap?: number;
  notes?: string;
  notify?: string;
  notifyType?: string;
  queryType?:
    | 'Missed Data/Missed signatures'
    | 'Confirmatory Queries'
    | 'Possible Lack of Information'
    | 'Transcription errors'
    | 'Possible protocol Deviation'
    | 'Possibly missed Adverse Event'
    | 'Missed lab report';
  scopeId?: string;
  specNodes?: string;
  state?: 'Open' | 'Answer' | 'Resolve' | 'Verify' | 'Delete';
  teamType?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsAssignmentsCreate, documentsAssignmentsUpdate, documentsTasksCreate]
 * Used in Objects[PartnerOutput, DocTaskOutput, OutputMessage, TaskO, OutputActivityDetails, OutputActivityDetailsV2, OutputDslTaskSpec, OutputTaskConfig, SidePanelTask, OutputTask]
 */
export interface Task {
  active_after?: string;
  assignment?: 'manual' | 'automatic';
  blob?: string;
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  /** assignee who completed(eSigned/rejected) the document task */
  closedBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  due_before?: string;
  holdbitmap?: number;
  priority?: number;
  /** Resource associated with task */
  relationshipContext?: string;
  state?: 'ready' | 'completed' | 'not applicable';
  tildaid?: string;
  title?: string;
  /**
   * Relation: -[TaskToInboxEdgeLabel]->(Inbox)
   * Relation: -[TaskToContextEdgeLabel]->(Context)
   * Relation: -[TaskCreatedFromSpec]->(ParticipantDslSpecNode)
   */
  ufid?: number;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[documents]:Services[documentsUsersDetail]
 * Module[myprofile]:Services[myprofileUpdate]
 * Module[users]:Services[usersList]
 * Used in Objects[UserWithFlag, UserWithQuery, OutputMonitorQueryFilter, GroupedUsers]
 */
export interface User {
  altEmails?: string;
  bio?: string;
  capabilities?: string;
  /** deprecate this? */
  contact?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  /** empty or unique */
  email: string;
  firstName: string;
  gcalSyncToken?: string;
  holdbitmap?: number;
  lastLogin?: string;
  lastName: string;
  location?: string;
  name?: string;
  onboarded?: boolean;
  passwordSet?: boolean;
  /** empty or unique */
  phoneNumber: string;
  profilePicURL?: string;
  status: 'Invited' | 'Active' | 'Deleted';
  tildaid?: string;
  timezone?: string;
  ufid?: number;
  updatedat?: number;
  userType?: string;
  username?: string;
}

/**
 *
 * Used in Module[ehrRuns]:Services[ehrRunsList]
 * Used in Objects[RunInfoSummaryResponse]
 */
export interface RunInfoSummary {
  runid?: string;
  rxelapsedtime?: string;
  rxerrs?: number;
  rxtotal?: number;
  txelapsedtime?: string;
  txerrs?: number;
  txtotal?: number;
}

/**
 *
 * Service Root object
 * Module[ehrRuns]:Services[ehrRunsList]
 */
export interface RunInfoSummaryResponse {
  count?: number;
  runs?: RunInfoSummary[];
}

/**
 *
 * Service Root object
 * Module[emrs]:Services[emrsList]
 */
export interface EmrSummaryResponse {
  count?: number;
  emrs?: Emr[];
}

/**
 *
 * Used in Module[emrs]:Services[emrsList]
 * Used in Objects[EmrSummaryResponse]
 */
export interface Emr {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  emrname?: string;
  emrversion?: string;
  holdbitmap?: number;
  integrationtype?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[esign]:Services[esignCreate]
 * Module[myprofile]:Services[myprofileSignatureCreate]
 */
export interface ESignatureESignDetails {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** Application specific details for signature */
  fontDetail?: Record<string, string>;
  fullName?: string;
  holdbitmap?: number;
  /** signature string (in case of typed) or encoded string (in case of drawn) */
  signatureString: string;
  tildaid?: string;
  type: 'Drawn' | 'Typed';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[esign]:Services[esignApplyUpdate]
 * Module[myprofile]:Services[myprofileSignatureApplyUpdate]
 */
export interface ESignatureObjectToESign {
  /** tildaid of the object */
  resourceId: string;
  /** Type of object */
  resourceType: string;
}

/**
 *
 * Service Root object
 * Module[esign]:Services[esignApplyUpdate, esignCreate]
 * Module[myprofile]:Services[myprofileSignatureApplyUpdate, myprofileSignatureCreate, myprofileSignatureList]
 * Used in Objects[ChangeWithESign]
 */
export interface ESignature {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** Application specific details for signature */
  fontDetail?: string;
  fullName?: string;
  holdbitmap?: number;
  /** signature string (in case of typed) or encoded string (in case of drawn) */
  signatureString: string;
  tildaid?: string;
  type: 'Drawn' | 'Typed';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[events]:Services[eventsList]
 */
export interface EventResponse {
  count?: number;
  events?: ObjEventResponse[];
}

/**
 *
 * Used in Module[events]:Services[eventsList]
 * Used in Objects[EventResponse]
 */
export interface ObjEventResponse {
  blob?: string;
  eventtype?: string;
  objid?: string;
  objtype?: string;
  orgid?: string;
  svcname?: string;
  userid?: string;
  when?: string;
}

/**
 *
 * Used in Module[filters]:Services[filtersCreate, filtersUpdate]
 * Used in Objects[ConditionGroupCfg]
 */
export interface ConditionCfg {
  attribute?: string;
  createdat?: number;
  cypher?: string;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  operator?: string;
  pos?: number;
  subconditions?: FilterCondition[];
  tildaid?: string;
  updatedat?: number;
  value1?: string;
  value2?: string;
}

/**
 *
 * Used in Module[filters]:Services[filtersCreate, filtersUpdate]
 * Used in Objects[FilterCfg]
 */
export interface ConditionGroupCfg {
  conditions?: ConditionCfg[];
  createdat?: number;
  cypher?: string;
  cypherlastupdated?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  matchany?: boolean;
  pos?: number;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[filters]:Services[filtersCreate, filtersUpdate]
 */
export interface FilterCfg {
  cgcfgupdate?: boolean;
  conditiongroupsall?: ConditionGroupCfg[];
  conditiongroupsany?: ConditionGroupCfg[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  draft?: boolean;
  holdbitmap?: number;
  lastupdatedby?: string;
  name?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[filters]:Services[filtersStudiesDetail]
 */
export interface FilterStudyResponse {
  studies?: ReportStudyInfo[];
}

/**
 *
 * Used in Module[filters]:Services[filtersStudiesDetail]
 * Used in Module[reports]:Services[reportsStudiesDetail]
 * Used in Objects[FilterStudyResponse, ReportStudyResponse]
 */
export interface ReportStudyInfo {
  logolink?: string;
  name?: string;
  sponsor?: string;
  sponsorid?: string;
  status?: string;
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[filters]:Services[filterEvalCreate]
 * Module[reports]:Services[reportEvalCreate]
 * Module[studies]:Services[studyEvalCreate]
 */
export interface ScanParams {
  draft?: boolean;
  evaluate?: boolean;
  reportids?: string[];
  scan?: boolean;
}

/**
 *
 * Used in Module[filters]:Services[filtersCreate, filtersUpdate]
 * Used in Objects[ConditionCfg]
 */
export interface FilterCondition {
  attribute?: string;
  createdat?: number;
  cypher?: string;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  operator?: string;
  pos?: number;
  tildaid?: string;
  updatedat?: number;
  value1?: string;
  value2?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinBudgetsCreate, v1FinBudgetsHierarchyDetail, v1FinBudgetsLinkedDetail]
 * Used in Objects[BudgetCfg]
 */
export interface FinlibVisitO {
  id?: string;
  name?: string;
  studyPeriod?: string;
  title?: string;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinCardsAccountBalanceList]
 */
export interface HttpAccountBalanceResponse {
  accountId?: string;
  balance?: string;
  currency?: string;
  description?: string;
  lastUpdated?: string;
  message?: string;
  status?: string;
  success?: boolean;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinCardsCreate]
 */
export interface HttpAssignCardRequest {
  cardId: string;
  participantId: string;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinCardsDelete]
 */
export interface HttpCancelCardRequest {
  reason: string;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinCardsBalanceDetail]
 */
export interface HttpCardBalanceResponse {
  balance?: string;
  cardId?: string;
  currency?: string;
  description?: string;
  lastUpdated?: string;
  message?: string;
  status?: string;
  success?: boolean;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinCardsCreate, v1FinCardsDetail, v1FinCardsPayCreate]
 */
export interface HttpCardDetailsResponse {
  balance?: string;
  cardId?: string;
  cardStatus?: string;
  createdAt?: string;
  currency?: string;
  description?: string;
  email?: string;
  expiryDate?: string;
  firstName?: string;
  lastFour?: string;
  lastName?: string;
  message?: string;
  phone?: string;
  status?: string;
  success?: boolean;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinCardsDelete, v1FinCardsEchoList]
 */
export interface HttpCardEchoResponse {
  description?: string;
  message?: string;
  status?: string;
  success?: boolean;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinCardsPayCreate]
 */
export interface HttpPayCardRequest {
  amount: number;
  description?: string;
  /** Format: MM/DD/YYYY HH:MM:SS */
  paymentDate?: string;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetsCreate, v1FinBudgetsHierarchyDetail, v1FinBudgetsLinkedDetail]
 * Used in Objects[BudgetCfg, BudgetList, TaskO]
 */
export interface BudgetCfg {
  budgetVersions?: BudgetCfg[];
  configuredBy?: string;
  configuredByName?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  effectiveDate?: string;
  error?: string;
  holdbitmap?: number;
  name: string;
  orgAlias?: string;
  protocolVersionId: string;
  screenFailureAllowance?: number;
  screenFailureCalculationMode?: 'Manual' | 'Automatic';
  screenFailureRatioEnrolled?: number;
  screenFailureRatioScreenFailed?: number;
  sections?: SectionCfg[];
  siteInfo?: SiteLite[];
  sourceBudgetId?: string;
  sponsor?: string;
  /** Active, Archived,Scheduled */
  status?: 'Draft' | 'Active' | 'Archived' | 'Scheduled' | 'NeedsReview';
  studyId: string;
  studyName?: string;
  tildaid?: string;
  updatedat?: number;
  version?: number;
  visits?: FinlibVisitO[];
}

/**
 *
 * Used in Module[fin]:Services[v1FinStudySiteOptionsDetail]
 * Used in Objects[BudgetOptions]
 */
export interface BudgetEntryShort {
  budget?: number;
  data?: Record<string, number>;
  name?: string;
  /** PerVisit,Override/Percentage,PerOccurrence,PerHour,PerChart,PerRecord */
  settings?:
    | 'PerVisit'
    | 'PerVisit_Invoiceable'
    | 'Override'
    | 'Total'
    | 'Percentage'
    | 'Fixed'
    | 'PerOccurrence'
    | 'PerHour'
    | 'PerChart'
    | 'PerRecord'
    | 'OneTimeOnStart'
    | 'OneTimeOnClosure'
    | 'OneTime'
    | 'PerYearly';
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetsCreate, v1FinBudgetsUpdate]
 */
export interface BudgetI {
  /**
   * ActionType determines the action to be performed on the budget.
   * When creating a budget, allowed values are:
   * - Duplicate: Creates a duplicate of an existing budget.
   * - NewVersion: Creates a new version of an existing budget.
   * - DuplicateWithNoValues: Duplicates the budget but zeroes out budget values.
   *
   * When editing a budget, allowed values are:
   * - Publish: Publishes the budget to make it active.
   *
   * Required when duplicating or versioning a budget.
   */
  actionType?: 'Duplicate' | 'NewVersion' | 'DuplicateWithNoValues' | 'Publish';
  configuredBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  effectiveDate?: string;
  error?: string;
  holdbitmap?: number;
  name: string;
  orgAlias?: string;
  protocolVersionId: string;
  screenFailureAllowance?: number;
  screenFailureCalculationMode?: 'Manual' | 'Automatic';
  screenFailureRatioEnrolled?: number;
  screenFailureRatioScreenFailed?: number;
  /**
   * SiteIds is a list of site identifiers associated with the budget.
   * This field is optional and can be omitted if not applicable.
   */
  siteIds?: string[];
  sourceBudgetId?: string;
  /** Active, Archived,Scheduled */
  status?: 'Draft' | 'Active' | 'Archived' | 'Scheduled' | 'NeedsReview';
  studyId: string;
  tildaid?: string;
  updatedat?: number;
  version?: number;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetsList]
 */
export interface BudgetList {
  budgets?: BudgetCfg[];
  count?: number;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinStudySiteOptionsDetail]
 */
export interface BudgetOptions {
  budgetId?: string;
  studyEventOptionMap?: Record<string, BudgetEntryShort[]>;
  subjectOptionMap?: Record<string, BudgetEntryShort[]>;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetReportsCreate]
 */
export interface BudgetReportI {
  date: string;
  event: string;
  siteId: string;
  studyId: string;
  timeSpentInHrs?: number;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetReportsList]
 */
export interface BudgetReportList {
  budgetReports?: OBudgetReport[];
  count?: number;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Objects[TaskO]
 */
export interface BudgetSiteInfo {
  budgetId?: string;
  budgetName?: string;
  budgetVersion?: number;
  siteId?: string;
  siteName?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinBudgetReportsList]
 * Used in Objects[SectionDetails]
 */
export interface OBudgetEntryInstance {
  amount?: number;
  amountFromBudgetEntry?: number;
  amountWithOverHead?: number;
  budgetReportId?: string;
  createdat?: number;
  dateIncurred?: string;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  name?: string;
  nonEditable?: boolean;
  receiptUrl?: string;
  sectionType?: string;
  settings?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[fin]:Services[v1FinBudgetReportsList]
 * Used in Objects[BudgetReportList]
 */
export interface OBudgetReport {
  /** Unique budget ID (e.g., "12345") */
  budgetId?: string;
  /** Name of the budget (e.g., "Budget for Study 1") */
  budgetName?: string;
  cpStatus?:
    | 'ScreenSchedulePending'
    | 'ScreenScheduled'
    | 'ScreenInProgress'
    | 'ScreenFailed'
    | 'NotEligible'
    | 'ScreenPass'
    | 'Enrolled'
    | 'Completed'
    | 'OnHold'
    | 'Discontinued';
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** Details of the budget report */
  details?: string;
  /** Amount held back if applicable */
  holdback?: number;
  holdbitmap?: number;
  isUserCreated?: boolean;
  /** dont use this field */
  linkedReports?: BudgetReport[];
  /** Revenue missed due to screen failure ratio exceeded */
  missedRevenue?: number;
  name?: string;
  notes?: string;
  /** Type of payment (e.g., "Invoice") */
  paymentType?: 'Invoice';
  reportId?: string;
  /** Revenue amount (e.g., "$100") */
  revenue?: number;
  /** Type of revenue (e.g., "Subject Visit") */
  revenueType?: 'SubjectVisit' | 'Study';
  sectionDetails?: SectionDetails[];
  setting?: string;
  /** Site of the study (e.g., "Tilda Research: Birmingham") */
  site?: string;
  /** Unique site ID (e.g., "12345") */
  siteId?: string;
  /** Status of the budget report (e.g., "Pending") */
  status?:
    | 'Pending'
    | 'InReview'
    | 'Missing'
    | 'Completed'
    | 'Screen Failure Exceeded';
  /** Name or ID of the study (e.g., "I5T-MC-AACM") */
  study?: string;
  /** Unique study ID (e.g., "12345") */
  studyId?: string;
  /** Unique subject ID (e.g., "12345") */
  subjectId?: string;
  /** Name of the subject (e.g., "Gary Garrison") */
  subjectName?: string;
  /** Unique task ID (e.g., "12345") */
  taskId?: string;
  /** Status of the task (e.g., "Active") */
  taskStatus?: 'ready' | 'completed' | 'not applicable';
  tildaid?: string;
  timeSpentInHrs?: number;
  updatedat?: number;
  /** Upfront payment amount */
  upfront?: number;
  /** Visit name (e.g., "Screening") */
  visit?: string;
  /** Date of the visit */
  visitDate?: string;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetEntriesUpdate, v1FinSectionsUpdate]
 * Used in Objects[BudgetCfg]
 */
export interface SectionCfg {
  allowedSettings?: (
    | 'PerVisit'
    | 'PerVisit_Invoiceable'
    | 'Override'
    | 'Total'
    | 'Percentage'
    | 'Fixed'
    | 'PerOccurrence'
    | 'PerHour'
    | 'PerChart'
    | 'PerRecord'
    | 'OneTimeOnStart'
    | 'OneTimeOnClosure'
    | 'OneTime'
    | 'PerYearly'
  )[];
  budgetEntries?: BudgetEntry[];
  budgetId?: string;
  /** Procedure,Visit */
  budgetType?: 'Procedure' | 'Visit';
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  items?: number;
  name?: string;
  revenueMax?: number;
  revenueMin?: number;
  tildaid?: string;
  /** NonProceduralSite,Stipend,OptionalProcedural,RequiredProcedural,Study,Custom */
  type?:
    | 'RequiredProcedural'
    | 'Stipend'
    | 'NonProceduralSite'
    | 'OptionalProcedural'
    | 'StudyEventBased'
    | 'StudyLevel'
    | 'Custom';
  updatedat?: number;
}

/**
 *
 * Used in Module[fin]:Services[v1FinBudgetReportsList]
 * Used in Objects[OBudgetReport]
 */
export interface SectionDetails {
  amount?: number;
  amountWithOverHead?: number;
  name?: string;
  numberOfItems?: number;
  oBudgetEntryInstances?: OBudgetEntryInstance[];
  overHeadType?: string;
  overhead?: number;
  type?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinBudgetsCreate, v1FinBudgetsHierarchyDetail, v1FinBudgetsLinkedDetail]
 * Used in Objects[BudgetCfg]
 */
export interface SiteLite {
  id?: string;
  name?: string;
}

/**
 * SiteShort represents a simplified site object with only essential identification fields
 * Service Root object
 * Module[fin]:Services[v1FinSitesWithBudgetList]
 */
export interface SiteShort {
  /** @Description Unique identifier of the site */
  id?: string;
  /** @Description Name of the site */
  name?: string;
}

/**
 * StudyShort represents a simplified study object with only essential identification fields
 * Service Root object
 * Module[fin]:Services[v1FinStudiesWithBudgetList]
 */
export interface StudyShort {
  /** @Description Unique identifier of the study */
  id?: string;
  /** @Description Name of the study */
  name?: string;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinTasksDetail]
 */
export interface TaskO {
  /** List of actions possible with the task */
  actionList?: ('View' | 'Edit')[];
  activity?: OPActivity;
  assignedUser?: OPUser[];
  budgetId?: string;
  budgetSiteInfos?: BudgetSiteInfo[];
  budgets?: BudgetCfg[];
  carePlan?: OPCarePlan;
  completionDate?: string;
  controlTitle?: string;
  createdUser?: OPUser;
  documentSetId?: string;
  phi?: OPPhi;
  scopeId?: string;
  site?: OPSite;
  study?: OPStudy;
  task?: Task;
  taskData?: TaskData;
  user?: OPUser;
  visit?: OPVisit;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[trialexec]:Services[trialexecTaskDetail]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[TaskO, OPActivityDetails, OutputTask]
 */
export interface OPActivity {
  activityType?: string;
  paId?: string;
  status?:
    | 'Init'
    | 'Executable'
    | 'InProgress'
    | 'PatientInProgress'
    | 'Skipped'
    | 'Completed'
    | 'Paused'
    | 'Removed'
    | 'InProgressOfflineMode'
    | 'CompletedOffline';
  tildaid?: string;
  title?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[trialexec]:Services[trialexecTaskDetail]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[TaskO, OPUserWithFlag, OPUserWithQuery, OutputTask]
 */
export interface OPUser {
  email?: string;
  name?: string;
  profilePicURL?: string;
  tildaid?: string;
  username?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[trialexec]:Services[trialexecTaskDetail]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[TaskO, OutputTask]
 */
export interface TaskData {
  from?: string;
  /** List of Types */
  type?: string;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetEntriesUpdate, v1FinSectionsBudgetEntriesCreate]
 * Used in Objects[SectionCfg]
 */
export interface BudgetEntry {
  allowedSettings?: string[];
  amount?: number;
  budget?: number;
  budgetId?: string;
  capAmount?: number;
  /** PerHour,PerOccurrence */
  capType?: 'PerHour' | 'PerOccurrence';
  createdat?: number;
  data?: Record<string, number>;
  delpending?: boolean;
  deltimestamp?: number;
  estimatedOccurrence?: number;
  holdbitmap?: number;
  isSettingsEditable?: boolean;
  name?: string;
  sectionId?: string;
  /** PerVisit,Override/Percentage,PerOccurrence,PerHour,PerChart,PerRecord */
  settings?:
    | 'PerVisit'
    | 'PerVisit_Invoiceable'
    | 'Override'
    | 'Total'
    | 'Percentage'
    | 'Fixed'
    | 'PerOccurrence'
    | 'PerHour'
    | 'PerChart'
    | 'PerRecord'
    | 'OneTimeOnStart'
    | 'OneTimeOnClosure'
    | 'OneTime'
    | 'PerYearly';
  /** Starting occurrence for the entry by default 0 means all any positive value means that only after that many occurrences are already done , budget entry will start */
  startingOccurrence?: number;
  tildaid?: string;
  trigger?: string;
  /** NonProceduralSite,Stipend,OptionalProcedural,RequiredProcedural,Study,Custom */
  type?:
    | 'NonProceduralSite'
    | 'Stipend'
    | 'OptionalProcedural'
    | 'RequiredProcedural'
    | 'StudyEventBased'
    | 'StudyLevel'
    | 'Custom';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetReportsEntryInstancesCreate, v1FinBudgetReportsEntryInstancesDetail, v1FinEntryInstancesUpdate]
 */
export interface BudgetEntryInstance {
  amount?: number;
  budgetReportId?: string;
  createdat?: number;
  dateIncurred?: string;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  name?: string;
  receiptUrl?: string;
  sectionType?: string;
  settings?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetReportCreate, v1FinBudgetReportsCreate, v1FinBudgetReportsUpdate]
 * Used in Objects[OBudgetReport]
 */
export interface BudgetReport {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** Details of the budget report */
  details?: string;
  holdbitmap?: number;
  isUserCreated?: boolean;
  /** Revenue missed due to screen failure ratio exceeded */
  missedRevenue?: number;
  name?: string;
  notes?: string;
  /** Type of payment (e.g., "Invoice") */
  paymentType?: 'Invoice';
  reportId?: string;
  /** Revenue amount (e.g., "$100") */
  revenue?: number;
  /** Type of revenue (e.g., "Subject Visit") */
  revenueType?: 'SubjectVisit' | 'Study';
  setting?: string;
  /** Status of the budget report (e.g., "Pending") */
  status?:
    | 'Pending'
    | 'InReview'
    | 'Missing'
    | 'Completed'
    | 'Screen Failure Exceeded';
  tildaid?: string;
  timeSpentInHrs?: number;
  updatedat?: number;
  /** Upfront payment amount */
  upfront?: number;
  /** Date of the visit */
  visitDate?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[trialexec]:Services[trialexecTaskDetail, trialexecCareplanDetail, trialexecCareplanDiscontinueCreate, trialexecCareplanUpdate]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[TaskO, OutputTask, OutputCarePlan]
 */
export interface OPCarePlan {
  amendstatus?:
    | 'AmendCompleted'
    | 'AmendInProgress'
    | 'AmendFailed'
    | 'Skipped';
  arm?: string;
  participantid?: string;
  status?:
    | 'ScreenSchedulePending'
    | 'ScreenScheduled'
    | 'ScreenInProgress'
    | 'ScreenFailed'
    | 'NotEligible'
    | 'ScreenPass'
    | 'Enrolled'
    | 'Completed'
    | 'OnHold'
    | 'Discontinued';
  subjectid?: string;
  tildaid?: string;
  version?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[trialexec]:Services[trialexecFormParticipantFormDetail, trialexecParticipantFormList, trialexecStudyStudyIdParticipantFormList, publicTrialexecFormParticipantFormDetail, trialexecCareplanAeCreate, trialexecCareplanAeDetail, trialexecCareplanAeDetail2, trialexecCareplanVisitAeCreate, trialexecCareplanVisitAeDetail, trialexecStudyAeDetail, trialexecCareplanConMedsDetail, trialexecCareplanConMedsDetail2, trialexecCareplanConMedsExportDetail, trialexecCareplanConMedsSaveCreate, trialexecCareplanMedicalHistoryDetail, trialexecCareplanMedicalHistoryDetail2, trialexecCareplanMedicalHistoryExportDetail, trialexecCareplanMedicalHistorySaveCreate, trialexecCareplanPdCreate, trialexecCareplanPdUpdate, trialexecCareplanVisitPdCreate, trialexecCareplanVisitPdUpdate, trialexecCareplanConMedsListRowsDetail, trialexecCareplanMedicalHistoryListRowsDetail, trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail, trialexecTaskDetail, trialexecCareplanDetail, trialexecCareplanDiscontinueCreate, trialexecCareplanUpdate]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[TaskO, OutputParticipantForm, CpDetails, OPVisitActivityGraph, OutputAdverseEvent, OutputAdverseEventV2, OutputConMed, OutputMedHist, OutputPDType, TableOutput, VisitActivityGraph, VisitActivityGraphV2, VisitApptDetails, OutputTask, OutputCarePlan]
 */
export interface OPPhi {
  displayname?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  mobilephone?: string;
  patientid?: string;
  subjectid?: string;
  tildaid?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[trialexec]:Services[trialexecTaskDetail, trialexecCareplanDetail, trialexecCareplanDiscontinueCreate, trialexecCareplanUpdate]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[TaskO, OutputTask, OutputCarePlan]
 */
export interface OPSite {
  city?: string;
  country?: string;
  name?: string;
  tildaid?: string;
  version?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail, trialexecCareplanConMedsDetail, trialexecCareplanConMedsDetail2, trialexecCareplanConMedsExportDetail, trialexecCareplanConMedsSaveCreate, trialexecCareplanMedicalHistoryDetail, trialexecCareplanMedicalHistoryDetail2, trialexecCareplanMedicalHistoryExportDetail, trialexecCareplanMedicalHistorySaveCreate, trialexecProtocolCrfDetail, trialexecProtocolStudyprotocolDetail, trialexecCareplanConMedsListRowsDetail, trialexecCareplanMedicalHistoryListRowsDetail, trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail, trialexecTaskDetail, trialexecCareplanDetail, trialexecCareplanDiscontinueCreate, trialexecCareplanUpdate]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[TaskO, OPStudyProtocol, OPStudyProtocolV2, OPVisitActivityGraph, OutputConMed, OutputMedHist, StudyProtocol, TableOutput, VisitActivityGraph, VisitActivityGraphV2, OutputTask, OutputCarePlan]
 */
export interface OPStudy {
  isBlinded?: boolean;
  name?: string;
  sponsor?: string;
  sponsorId?: string;
  tildaid?: string;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[trialexec]:Services[trialexecTaskDetail, trialexecCareplanDetail, trialexecCareplanDiscontinueCreate, trialexecCareplanUpdate]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[TaskO, OutputTask, OutputCarePlan]
 */
export interface OPVisit {
  allowedActions?: ('CompletedOffline' | 'PartiallyCompletedOffline')[];
  appointmentDate?: string | null;
  appointmentDateRange?: DateRange | null;
  appointmentDaysRange?: DayRange | null;
  completedOffline?: VisitOffline | null;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  durationInMins?: number;
  holdbitmap?: number;
  interval?: string;
  isAnchorVisit?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  notes?: string;
  numOfDaysFromAnchor?: number;
  /** "8:00-12:00,13:00-15:00" */
  preferredTime?: string;
  pvId?: string;
  readyForCompletion?: boolean;
  reason?: string;
  signOffProgressList?: SignOffProgressList[];
  status?:
    | 'Init'
    | 'Executable'
    | 'SchedulingInProgress'
    | 'SchedulingFailed'
    | 'ScheduleCancelled'
    | 'Scheduled'
    | 'NoShow'
    | 'PreVisitInProgress'
    | 'InProgress'
    | 'Completed'
    | 'ScreenFailed'
    | 'CompletedOffline'
    | 'PartiallyCompletedOffline'
    | 'Paused'
    | 'Locked';
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  tildaid?: string;
  title?: string;
  updatedat?: number;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinPatientPayoutsCreate]
 */
export interface PatientPayout {
  amount?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  patientId?: string;
  paymentBy?: string;
  paymentDate?: string;
  status?: 'Paid' | 'Processing';
  tildaid?: string;
  transactionId?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinPaymentAccountsCreate, v1FinPaymentAccountsUpdate]
 */
export interface PaymentAccount {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  email?: string;
  holdbitmap?: number;
  patientId?: string;
  paymentMethod?: 'Paypal' | 'Debit';
  phone?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[fin]:Services[v1FinBudgetsSectionsCreate, v1FinSectionsUpdate]
 */
export interface Section {
  budgetId?: string;
  /** Procedure,Visit */
  budgetType?: 'Procedure' | 'Visit';
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  name?: string;
  tildaid?: string;
  /** NonProceduralSite,Stipend,OptionalProcedural,RequiredProcedural,Study,Custom */
  type?:
    | 'RequiredProcedural'
    | 'Stipend'
    | 'NonProceduralSite'
    | 'OptionalProcedural'
    | 'StudyEventBased'
    | 'StudyLevel'
    | 'Custom';
  updatedat?: number;
}

/**
 *
 * Used in Module[fin]:Services[v1FinTasksDetail]
 * Used in Module[leads]:Services[leadsTasksDetail]
 * Used in Module[tasks]:Services[tasksHomeList]
 * Used in Module[trialexec]:Services[trialexecTaskDetail, trialexecCareplanDetail, trialexecCareplanDiscontinueCreate, trialexecCareplanUpdate]
 * Used in Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[OPVisit]
 */
export interface VisitOffline {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  source?: 'Paper' | 'External vendor' | 'External system';
  status?: string;
  tildaid?: string;
  updatedat?: number;
  userId?: string[];
  when?: string;
}

/**
 *
 * Used in Module[inboxes]:Services[inboxesList]
 * Used in Objects[InboxesResp]
 */
export interface InboxesInfo {
  category?: string;
  count?: number;
  name?: string;
  tildaId?: string;
}

/**
 *
 * Service Root object
 * Module[inboxes]:Services[inboxesList]
 */
export interface InboxesResp {
  myTasksCount?: number;
  siteInboxCount?: number;
  siteInboxesInfo?: InboxesInfo[];
  studyInboxCount?: number;
  studyInboxesInfo?: InboxesInfo[];
  userInboxCount?: number;
  userInboxesInfo?: InboxesInfo[];
}

/**
 *
 * Service Root object
 * Module[inboxes]:Services[inboxesUserList]
 */
export interface Inbox {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  name?: string;
  tildaid?: string;
  type?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsAssignRecruiterCreate]
 */
export interface LeadAssignCfg {
  leadids?: string[];
  recruiterid?: string;
}

/**
 *
 * Used in Module[leads]:Services[leadsAssigneesList]
 * Used in Objects[LeadAssigneeResponse]
 */
export interface LeadAssigneeInfo {
  name?: string;
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsAssigneesList]
 */
export interface LeadAssigneeResponse {
  assignees?: LeadAssigneeInfo[];
  count?: number;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsAdvocateExportCreate, leadsExportCreate, leadsPortalAdminExportCreate]
 */
export interface LeadExportCfg {
  advocateid?: string;
  desc?: boolean;
  exportkeys?: string[];
  leadtype?: 'active' | 'inactive' | 'all';
  orgleads?: boolean;
  searchkey?: string;
  searchstr?: string;
  sort?: string;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsPartialUpdate]
 */
export interface LeadPatchCfg {
  failedattempt?: boolean;
  failedattemptreason?: string;
  isv2screener?: boolean;
  newduedate?: string;
  nocontact?: boolean;
  participantformid?: string;
  patientid?: string;
  reason?: string;
  reasonnote?: string;
  recruiter?: string;
  siteid?: string;
  sourceinfo?: string;
  sourcetype?: 'advocate' | 'Typeform Migration';
  srcadvocateid?: string;
  srccampaigncode?: string;
  srccampaignid?: string;
  status?:
    | 'pre-screen pending'
    | 'pre-screen success'
    | 'pre-screen failed'
    | 'pre-screen skipped'
    | 'screen scheduled'
    | 'scheduled offline'
    | 'screen in progress'
    | 'screen success'
    | 'screen disqualified'
    | 'screen failed'
    | 'enrolled'
    | 'withdrew'
    | 'not interested'
    | 'mark interested';
  studyid?: string;
  suppressNotification?: boolean;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
}

/**
 *
 * Used in Module[leads]:Services[leadsAdvocateList, leadsPortalAdminList]
 * Used in Objects[LeadPortalAdminSummaryResponse]
 */
export interface LeadPortalAdminSummaryInfo {
  advocateid?: string;
  advocatename?: string;
  campaignid?: string;
  campaignname?: string;
  createdat?: string;
  firstname?: string;
  lastname?: string;
  protocolnumber?: string;
  protocolversion?: string;
  sponsor?: string;
  sponsorid?: string;
  status?:
    | 'pre-screen pending'
    | 'pre-screen success'
    | 'pre-screen failed'
    | 'pre-screen skipped'
    | 'screen scheduled'
    | 'scheduled offline'
    | 'screen in progress'
    | 'screen success'
    | 'screen disqualified'
    | 'screen failed'
    | 'enrolled'
    | 'withdrew'
    | 'not interested'
    | 'mark interested';
  statuschangeat?: string;
  studyid?: string;
  studyname?: string;
  tildaid?: string;
  ufid?: number;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsAdvocateList, leadsPortalAdminList]
 */
export interface LeadPortalAdminSummaryResponse {
  count?: number;
  ismedicalprovider?: boolean;
  leads?: LeadPortalAdminSummaryInfo[];
  numactive?: number;
  numinactive?: number;
  numtotal?: number;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsStatusHistoryDetail]
 */
export interface LeadStatusHistory {
  count?: number;
  statushistory?: LeadStatusLog[];
}

/**
 *
 * Used in Module[leads]:Services[leadsStatusHistoryDetail]
 * Used in Objects[LeadStatusHistory]
 */
export interface LeadStatusLog {
  msg?: string;
  reason?: string;
  reasonnote?: string;
  status?: string;
  title?: string;
  type?:
    | 'State Change'
    | 'Data Change'
    | 'SignOff Change'
    | 'Certification Change'
    | 'Init Data Change'
    | 'Protocol Change'
    | 'Workflow Change'
    | 'Process Change'
    | 'Study Change'
    | 'Organization Change'
    | 'Site Change'
    | 'CarePlan Change'
    | 'Patient status change'
    | 'Patient no-PCP status change'
    | 'Patient profile change'
    | 'Patient provider added'
    | 'Patient provider updated'
    | 'Patient provider deleted'
    | 'Lead status change'
    | 'Recruiter assigned'
    | 'Advocate assigned'
    | 'Message sent'
    | 'Message received'
    | 'Advocate payout event'
    | 'Page Viewed'
    | 'Page Understood'
    | 'Page Queries'
    | 'Signature Added'
    | 'Task Comment'
    | 'Delete Node'
    | 'Amend Change'
    | ''
    | 'PasswordChange'
    | 'Study Create'
    | 'Study Update'
    | 'Study Config Generate'
    | 'Study Gen Details Update'
    | 'Study IE Update'
    | 'Study Protocol Add'
    | 'Study Duty Plan Add'
    | 'Study Config Gen Err'
    | 'Study Duty Plan Update'
    | 'FormV2 create'
    | 'FormV2 update'
    | 'QuestionV2 create'
    | 'QuestionV2 update'
    | 'QuestionV2 patch'
    | 'BranchV2 create'
    | 'BranchV2 update'
    | 'Action create'
    | 'Action update'
    | 'Statement create'
    | 'Statement update'
    | 'Variable create'
    | 'Variable delete'
    | 'Form instance create'
    | 'Form instance save'
    | 'Form instance revert'
    | 'Form instance reset'
    | 'Graph node action'
    | 'ActivityV2 create'
    | 'ActivityV2 update'
    | 'Table create'
    | 'Table update'
    | 'VisitV2 create'
    | 'VisitV2 update'
    | 'WorkflowV2 create'
    | 'WorkflowV2 update'
    | 'WorkflowV2 add trigger'
    | 'WorkflowV2 remove trigger'
    | 'Training create'
    | 'Training update'
    | 'ControlV2 create'
    | 'ControlV2 update'
    | 'Task create'
    | 'Task update'
    | 'Task delete'
    | 'TodoV2 create'
    | 'TodoV2 update'
    | 'TodoV2 delete'
    | 'DocOverlayV2 create'
    | 'DocOverlayV2 update'
    | 'DocOverlayV2 delete'
    | 'DocumentReview create'
    | 'DocumentReview update'
    | 'DocumentReview delete'
    | 'DocumentUpload create'
    | 'DocumentUpload update'
    | 'DocumentUpload delete'
    | 'Trigger create'
    | 'Trigger update'
    | 'Trigger delete'
    | 'Snellen chart create'
    | 'Snellen chart update'
    | 'Snellen chart delete'
    | 'Media create'
    | 'Media update'
    | 'Bcva Test update'
    | 'Refraction data update';
  when?: string;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsDetail]
 * Used in Objects[LeadSummaryResponse]
 */
export interface LeadSummaryInfo {
  advocate?: string;
  advocateid?: string;
  assigned?: string;
  assignedid?: string;
  carePlanId?: string;
  carePlanStatus?: string;
  createdat?: string;
  firstname?: string;
  isv2screener?: boolean;
  lastname?: string;
  middlename?: string;
  nocontact?: boolean;
  numfailedattempts?: number;
  orgid?: string;
  orgname?: string;
  participantformid?: string;
  patientid?: string;
  protocolnumber?: string;
  protocolversion?: string;
  reason?: string;
  reasonnote?: string;
  siteid?: string;
  skipscheduling?: boolean;
  skipsiteselection?: boolean;
  sourceinfo?: string;
  sourcetype?: 'advocate' | 'Typeform Migration';
  sponsor?: string;
  sponsorid?: string;
  srcadvocateid?: string;
  srccampaigncode?: string;
  srccampaignid?: string;
  status?:
    | 'pre-screen pending'
    | 'pre-screen success'
    | 'pre-screen failed'
    | 'pre-screen skipped'
    | 'screen scheduled'
    | 'scheduled offline'
    | 'screen in progress'
    | 'screen success'
    | 'screen disqualified'
    | 'screen failed'
    | 'enrolled'
    | 'withdrew'
    | 'not interested'
    | 'mark interested';
  studyid?: string;
  studyname?: string;
  suppressNotification?: boolean;
  taskid?: string;
  tildaid?: string;
  ufid?: number;
  updatedat?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsList]
 */
export interface LeadSummaryResponse {
  count?: number;
  leads?: LeadSummaryInfo[];
  nummyactive?: number;
  numtotal?: number;
  numunassigned?: number;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsTasksDetail]
 * Module[tasks]:Services[tasksHomeList]
 * Module[trialexec]:Services[trialexecTaskDetail]
 * Module[notif]:Services[v1NotifPatientTasksCreate, v1NotifTaskDetail]
 * Used in Objects[MonitorTaskResp, TestOp, DocTaskOutput, OutputAdverseEventTask, OutputChecklistTask, OutputChecklistTaskV2, OutputDelegateTask, OutputProtocolDeviationTask, OutputQueryTask, OutputSignoffTask, TaskDetails]
 */
export interface OutputTask {
  activity?: OPActivity;
  assignedUser?: OPUser[];
  budgetId?: string;
  carePlan?: OPCarePlan;
  completionDate?: string;
  controlTitle?: string;
  createdUser?: OPUser;
  documentSetId?: string;
  phi?: OPPhi;
  scopeId?: string;
  site?: OPSite;
  study?: OPStudy;
  task?: Task;
  taskData?: TaskData;
  user?: OPUser;
  visit?: OPVisit;
}

/**
 *
 * Service Root object
 * Module[leads]:Services[leadsCreate]
 */
export interface LeadCreateUpdateCfg {
  isv2screener?: boolean;
  nocontact?: boolean;
  participantformid?: string;
  patientid?: string;
  reason?: string;
  reasonnote?: string;
  siteid?: string;
  sourceinfo?: string;
  sourcetype?: 'advocate' | 'Typeform Migration';
  srcadvocateid?: string;
  srccampaigncode?: string;
  srccampaignid?: string;
  status?:
    | 'pre-screen pending'
    | 'pre-screen success'
    | 'pre-screen failed'
    | 'pre-screen skipped'
    | 'screen scheduled'
    | 'scheduled offline'
    | 'screen in progress'
    | 'screen success'
    | 'screen disqualified'
    | 'screen failed'
    | 'enrolled'
    | 'withdrew'
    | 'not interested'
    | 'mark interested';
  studyid?: string;
  suppressNotification?: boolean;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
}

/**
 *
 * Service Root object
 * Module[medicalGroups]:Services[medicalGroupsList]
 */
export interface MedicalGroupSummaryResponse {
  count?: number;
  medicalgroups?: MedicalGroup[];
}

/**
 *
 * Used in Module[medicalGroups]:Services[medicalGroupsList]
 * Used in Objects[MedicalGroupSummaryResponse]
 */
export interface MedicalGroup {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  emrname?: string;
  emrversion?: string;
  holdbitmap?: number;
  integrationtype?: string;
  isDeleted?: boolean;
  practiceaddress?: string;
  practicecity?: string;
  practicecountry?: string;
  practicename?: string;
  practicestate?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[monitor]:Services[monitorCategoriesDetail]
 * Used in Objects[MCategoryList]
 */
export interface CategoryOp {
  completedControls?: number;
  name?: string;
  subcategories?: SubCategoryOp[];
  totalControls?: number;
}

/**
 *
 * Used in Module[monitor]:Services[monitorControlsDetail]
 * Used in Objects[MonitorControlResp]
 */
export interface ControlOp {
  category?: string;
  completedTests?: number;
  description?: string;
  failedInfo?: string[];
  numSiteStatusNeedAttention?: number;
  numSiteStatusOk?: number;
  numSiteStatusOverdue?: number;
  status?: boolean;
  subcategory?: string;
  tests?: TestOp[];
  title?: string;
  totalTasks?: number;
  totalTests?: number;
}

/**
 *
 * Used in Module[monitor]:Services[monitorSidepanelDetail]
 * Used in Objects[TestOp]
 */
export interface DocumentOp {
  fileName?: string;
  signedUrl?: string;
  tildaid?: string;
  type?: string;
  url?: string;
}

/**
 *
 * Service Root object
 * Module[monitor]:Services[monitorCategoriesDetail]
 */
export interface MCategoryList {
  categories?: CategoryOp[];
}

/**
 *
 * Service Root object
 * Module[monitor]:Services[monitorControlsDetail]
 */
export interface MonitorControlResp {
  completedControls?: number;
  controls?: ControlOp[];
  totalControls?: number;
}

/**
 *
 * Service Root object
 * Module[monitor]:Services[monitorFiltersDetail]
 */
export interface MonitorFilterList {
  controlNames?: string[];
  priority?: number[];
  states?: string[];
  users?: string[];
}

/**
 *
 * Service Root object
 * Module[monitor]:Services[monitorSidepanelDetail]
 */
export interface MonitorSidePanelResp {
  category?: string;
  completedTests?: number;
  description?: string;
  failedInfo?: string[];
  numSiteStatusNeedAttention?: number;
  numSiteStatusOk?: number;
  numSiteStatusOverdue?: number;
  status?: boolean;
  subcategory?: string;
  tests?: TestOp[];
  title?: string;
  totalTasks?: number;
  totalTests?: number;
}

/**
 *
 * Service Root object
 * Module[monitor]:Services[monitorSitesDetail]
 */
export interface MonitorSiteResp {
  numSiteStatusNeedAttention?: number;
  numSiteStatusOk?: number;
  numSiteStatusOverdue?: number;
  sites?: SiteOp[];
  subCategories?: SubCategoryOp[];
  totalSites?: number;
}

/**
 *
 * Service Root object
 * Module[monitor]:Services[monitorTasksDetail]
 */
export interface MonitorTaskResp {
  count?: number;
  countCompleted?: number;
  countReady?: number;
  tasks?: OutputTask[];
}

/**
 *
 * Used in Module[monitor]:Services[monitorSitesDetail]
 * Used in Objects[MonitorSiteResp]
 */
export interface SiteOp {
  completedControls?: number;
  siteId?: string;
  siteName?: string;
  totalControls?: number;
}

/**
 *
 * Used in Module[monitor]:Services[monitorSitesDetail]
 * Used in Objects[CategoryOp, MonitorSiteResp]
 */
export interface SubCategoryOp {
  completedControls?: number;
  name?: string;
  totalControls?: number;
}

/**
 *
 * Used in Module[monitor]:Services[monitorSidepanelDetail]
 * Used in Objects[ControlOp, MonitorSidePanelResp]
 */
export interface TestOp {
  completedTasks?: number;
  description?: string;
  documents?: DocumentOp[];
  failedNeedAtt?: string[];
  failedOverdue?: string[];
  name?: string;
  numSiteStatusNeedAttention?: number;
  numSiteStatusOk?: number;
  numSiteStatusOverdue?: number;
  status?: boolean;
  tasks?: OutputTask[];
  title?: string;
  totalTasks?: number;
}

/**
 *
 * Service Root object
 * Module[monitor]:Services[monitorStudysitepanelDetail]
 * Used in Objects[OutputActorSidePanel]
 */
export interface ActivityInfo {
  completedDate?: string;
  completedUser?: string;
  status?: string;
  title?: string;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofileMfaList]
 */
export interface AuthlibUserAuthFactor {
  connection?:
    | 'email'
    | 'google-oauth2'
    | 'Username-Password-Authentication'
    | 'sms'
    | 'sense-pin';
  email?: string;
  phoneNumber?: string;
  userId?: string;
  verified?: boolean;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofileVisibilityStudyBlindedScopesDetail]
 */
export interface HealthBlindedAccessScope {
  id?: string;
  name?: string;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofileVisibilityList, myprofileVisibilityV2List, myprofileVisibilityV2StudyDetail]
 */
export interface AppVisibility {
  'advocate-portal'?: boolean;
  advocates?: boolean;
  calendar?: boolean;
  canCreateStudy?: boolean;
  chartReview?: boolean;
  documentOps?: DocumentVisibility;
  documents?: boolean;
  finance?: boolean;
  financeOps?: FinanceVisibility;
  home?: boolean;
  isExternal?: boolean;
  messenger?: boolean;
  myTasks?: boolean;
  partners?: boolean;
  patients?: boolean;
  sites?: boolean;
  studies?: boolean;
  studio?: boolean;
  /**
   * Following cleopatra flags should not be used at all:
   * 		canViewOrganizations  // settings->organization: Currently switched-off for monitor, which is wrong since monitor role is study-specific
   * 		canViewUserSettings   // settings->user: Currently switched-off for monitor, which is wrong since monitor role is study-specific
   */
  studyOps?: StudyVisibility;
  subjects?: boolean;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofilePinUpdate]
 */
export interface ChangePinRequest {
  newPin?: string;
  oldPin?: string;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofilePinCreate]
 */
export interface CreatePinRequest {
  pin?: string;
}

/**
 *
 * Used in Module[myprofile]:Services[myprofileVisibilityList, myprofileVisibilityV2List, myprofileVisibilityV2StudyDetail]
 * Used in Objects[AppVisibility]
 */
export interface DocumentVisibility {
  canArchiveOrDelete?: boolean;
  canAssign?: boolean;
  canFilterPatient?: boolean;
  canFilterSubject?: boolean;
  /** ability to add/edit/delete doc types */
  canManageDocTypes?: boolean;
  canUploadAndCertify?: boolean;
  canUseCollections?: boolean;
  canViewArchived?: boolean;
  canViewCollections?: boolean;
}

/**
 *
 * Used in Module[myprofile]:Services[myprofileVisibilityList, myprofileVisibilityV2List, myprofileVisibilityV2StudyDetail]
 * Used in Objects[AppVisibility]
 */
export interface FinanceVisibility {
  canChangeFinance?: boolean;
  canViewFinance?: boolean;
}

/**
 *
 * Used in Module[myprofile]:Services[myprofileCreate, myprofileList]
 * Used in Module[users]:Services[usersDetail]
 * Used in Objects[ActorProfile, UserProfile]
 */
export interface OrganizationAssignment {
  capabilities?: string;
  displayRoles?: string[];
  endDate?: string;
  orgAlias?: string;
  orgId?: string;
  orgName?: string;
  orgType?: string;
  role?: string;
  startDate?: string;
}

/**
 *
 * Used in Module[myprofile]:Services[myprofilePinCreate, myprofilePinResetCreate, myprofilePinUpdate, myprofilePinVerifyCreate]
 * Used in Objects[PinResponse]
 */
export interface PinAttemptDetails {
  remainingAttempts?: number;
  waitPeriod?: number;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofilePinCreate, myprofilePinResetCreate, myprofilePinUpdate, myprofilePinVerifyCreate]
 */
export interface PinResponse {
  details?: PinAttemptDetails;
  status?: 'success' | 'invalid' | 'not set';
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofilePinResetCreate]
 */
export interface ResetPinRequest {
  newPin?: string;
  secondFactorToken?: string;
}

/**
 *
 * Used in Module[myprofile]:Services[myprofileCreate, myprofileList]
 * Used in Module[users]:Services[usersDetail]
 * Used in Objects[ActorProfile, UserProfile]
 */
export interface SiteAssignment {
  contactEmail?: string;
  contactPhone?: string;
  displayRoles?: string[];
  orgAlias?: string;
  orgId?: string;
  orgName?: string;
  role?: string;
  siteCity?: string;
  siteId?: string;
  siteName?: string;
}

/**
 *
 * Used in Module[myprofile]:Services[myprofileCreate, myprofileList]
 * Used in Module[users]:Services[usersDetail]
 * Used in Objects[ActorProfile, UserProfile]
 */
export interface StudyAssignment {
  displayRoles?: string[];
  endDate?: string;
  isBlinded?: boolean | null;
  orgAlias?: string;
  orgId?: string;
  orgName?: string;
  role?: string;
  startDate?: string;
  studyId?: string;
  studyName?: string;
  studySponsor?: string;
}

/**
 *
 * Used in Module[myprofile]:Services[myprofileVisibilityList, myprofileVisibilityV2List, myprofileVisibilityV2StudyDetail]
 * Used in Objects[AppVisibility]
 */
export interface StudyVisibility {
  canAdoptProtocol?: boolean;
  canChangeStudyDetails?: boolean;
  /** needs careplan-edit */
  canChangeSubjectStatus?: boolean;
  /** needs careplan-edit */
  canDoActivityActions?: boolean;
  /** this is being used inconsistently, and in huge number of places. Need to test with UI engineer */
  canDoStudyActions?: boolean;
  /** needs careplan-edit */
  canDoVisitActions?: boolean;
  canViewLeads?: boolean;
  canViewStudyDetails?: boolean;
  /** May need per-careplan permissions */
  canViewSubjectDetails?: boolean;
  studyId?: string;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofileCreate, myprofileUpdate]
 */
export interface UserInputs {
  altEmails?: string;
  bio?: string;
  capabilities?: string;
  /** deprecate this? */
  contact?: string;
  description?: string;
  /** empty or unique */
  email: string;
  firstName: string;
  gcalSyncToken?: string;
  lastName: string;
  location?: string;
  onboarded?: boolean;
  passwordSet?: boolean;
  patientId?: string;
  /** empty or unique */
  phoneNumber: string;
  profilePicURL?: string;
  timezone?: string;
  userType?: string;
  username?: string;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofileCreate, myprofileList]
 * Module[users]:Services[usersDetail]
 */
export interface UserProfile {
  altEmails?: string;
  bio?: string;
  capabilities?: string;
  /** deprecate this? */
  contact?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  /** empty or unique */
  email: string;
  firstName: string;
  gcalSyncToken?: string;
  holdbitmap?: number;
  lastLogin?: string;
  lastName: string;
  location?: string;
  name?: string;
  needs2Factor?: boolean;
  onboarded?: boolean;
  organizations?: OrganizationAssignment[];
  passwordSet?: boolean;
  /** empty or unique */
  phoneNumber: string;
  pinSet?: boolean;
  profilePicURL?: string;
  sites?: SiteAssignment[];
  status: 'Invited' | 'Active' | 'Deleted';
  studies?: StudyAssignment[];
  tildaid?: string;
  timezone?: string;
  ufid?: number;
  updatedat?: number;
  userType?: string;
  username?: string;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofileMfaVerifyUpdate]
 */
export interface VerifyFactorRequest {
  token?: string;
}

/**
 *
 * Service Root object
 * Module[myprofile]:Services[myprofilePinVerifyCreate]
 */
export interface VerifyPinRequest {
  pin?: string;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifShorturlCreate]
 */
export interface NotiflibShortUrlRequest {
  longUrl?: string;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifShorturlCreate]
 */
export interface NotiflibShortUrlResponse {
  shortUrl?: string;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifAccesstokenList]
 */
export interface AccessToken {
  twilioAccessToken?: string;
}

/**
 *
 * Used in Module[notif]:Services[v1NotifPatientEngagementProfilesDetail]
 * Used in Objects[PatientEngagementProfile]
 */
export interface LeadStudyInfo {
  careplanId?: string;
  id?: string;
  leadCreatedAt?: number;
  leadId?: string;
  leadUpdatedAt?: number;
  name?: string;
  siteId?: string;
  sponsor?: string;
  status?: string;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifPatientMessagesDetail]
 */
export interface ListMessagesResponse {
  count?: number;
  data?: OutputMessage[];
  skip?: number;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifPatientEngagementProfilesList]
 */
export interface ListPatientEngagementResponse {
  count?: number;
  data?: PatientEngagementProfile[];
}

/**
 *
 * Used in Module[notif]:Services[v1NotifPatientMessagesDetail, v1NotifPatientEngagementProfilesDetail]
 * Used in Objects[OutputMessage]
 */
export interface Media {
  type?: string;
  url?: string;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifPatientMessagesCreate]
 */
export interface MessageInput {
  /** key could be like DBTypeLead */
  contextMap?: Record<string, string>;
  docIds?: string[];
  mediaBlob?: string;
  msg?: string;
  /** twilio */
  providerId?: string;
  template?: string;
  /** key/value are used for email/sms templates replacements */
  templateMap?: Record<string, string>;
  /** for email subject , for task title et */
  title?: string;
  /** Chat ,Audio,Video,Email,Task,StatusEvent,VisitApptEvent */
  type: string;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifMessengerCountList]
 */
export interface MessagesCountResp {
  count?: number;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifMessengerAppSearchList]
 */
export interface MsgAppSearchResponse {
  count?: number;
  data?: PatientEngagementProfile[];
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifPatientEngagementResolvedCreate]
 */
export interface NoteInput {
  note?: string;
}

/**
 *
 * Used in Module[notif]:Services[v1NotifPatientMessagesDetail, v1NotifPatientEngagementProfilesDetail]
 * Used in Objects[OutputMessage]
 */
export interface OVoiceCall {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  durationInSecs?: number;
  holdbitmap?: number;
  /** twilio TODO add index */
  providerId?: string;
  recordingId?: string;
  recordingStatus?: string;
  recordingUrl?: string;
  status?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifPatientEngagementProfilesChangedList, v1NotifPatientMessagesChangedDetail]
 */
export interface OutputChanged {
  changed?: boolean;
}

/**
 *
 * Used in Module[notif]:Services[v1NotifPatientMessagesDetail, v1NotifPatientEngagementProfilesDetail]
 * Used in Objects[ListMessagesResponse, PatientEngagementProfile]
 */
export interface OutputMessage {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  docIds?: string[];
  holdbitmap?: number;
  mediaBlob?: string;
  mediaCollection?: Media[];
  msg?: string;
  outbound?: boolean;
  participantForm?: ParticipantForm;
  profilePicURL?: string;
  /** twilio */
  providerId?: string;
  read?: boolean;
  /** json blob of related object */
  relObj?: string;
  subjectAppointment?: SubjectAppointment;
  task?: Task;
  template?: string;
  tildaid?: string;
  /** for email subject , for task title etå */
  title?: string;
  type?: string;
  updatedat?: number;
  userName?: string;
  voiceCall?: OVoiceCall;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifPatientEngagementProfilesDetail]
 * Used in Objects[ListPatientEngagementResponse, MsgAppSearchResponse]
 */
export interface PatientEngagementProfile {
  currentCallStatus?: string;
  email?: string;
  engagementComplete?: string;
  firstname?: string;
  fullname?: string;
  lastMessage?: OutputMessage;
  lastname?: string;
  leadStudyInfo?: LeadStudyInfo[];
  middlename?: string;
  mobilephone?: string;
  openTaskCount?: number;
  patientId?: string;
  studyInfo?: StudyInfo[];
  type?: string;
  unreadMessageCount?: number;
}

/**
 *
 * Used in Module[notif]:Services[v1NotifPatientEngagementProfilesDetail]
 * Used in Module[patients]:Services[patientsProfileDetail]
 * Used in Objects[PatientEngagementProfile, PatientFullProfile]
 */
export interface StudyInfo {
  careplanId?: string;
  cpstatus?:
    | 'ScreenSchedulePending'
    | 'ScreenScheduled'
    | 'ScreenInProgress'
    | 'ScreenFailed'
    | 'NotEligible'
    | 'ScreenPass'
    | 'Enrolled'
    | 'Completed'
    | 'OnHold'
    | 'Discontinued';
  id?: string;
  leadId?: string;
  lstatus?:
    | 'pre-screen pending'
    | 'pre-screen success'
    | 'pre-screen failed'
    | 'pre-screen skipped'
    | 'screen scheduled'
    | 'scheduled offline'
    | 'screen in progress'
    | 'screen success'
    | 'screen disqualified'
    | 'screen failed'
    | 'enrolled'
    | 'withdrew'
    | 'not interested'
    | 'mark interested';
  name?: string;
  site?: string;
  sponsor?: string;
  subjectid?: string;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifPatientMessagesCreate]
 */
export interface Message {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  docIds?: string[];
  holdbitmap?: number;
  mediaBlob?: string;
  msg?: string;
  outbound?: boolean;
  /** twilio */
  providerId?: string;
  read?: boolean;
  /** json blob of related object */
  relObj?: string;
  template?: string;
  tildaid?: string;
  /** for email subject , for task title etå */
  title?: string;
  type?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[notif]:Services[v1NotifCallDetailsDetail, v1NotifPatientSchedulingLinkInfoDetail]
 */
export interface VoiceCall {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  durationInSecs?: number;
  from?: string;
  holdbitmap?: number;
  /** twilio CallSid */
  providerId?: string;
  recordingId?: string;
  recordingStatus?: string;
  recordingSummary?: string;
  recordingTranscription?: string;
  recordingUrl?: string;
  status?: string;
  tildaid?: string;
  to?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[organizations]:Services[organizationsDetail]
 * Used in Objects[OrganizationDetails]
 */
export interface AffiliationOutput {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  direction?: string;
  documents?: Document[];
  healthcareProvider?: boolean;
  holdbitmap?: number;
  otherOrg?: string;
  state?: string;
  tildaid?: string;
  type: 'Advocate';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsDetail]
 */
export interface OrganizationDetails {
  affiliations?: AffiliationOutput[];
  /** Allowed regex [a-zA-Z][a-zA-Z0-9] */
  alias: string;
  bio?: string;
  bucket?: string;
  capabilities?: number;
  city?: string;
  contactPhone?: string;
  country?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  email?: string;
  emailSyncPoint?: string;
  enableNotifications?: boolean | null;
  filename?: string;
  holdbitmap?: number;
  mfaSettings?: string;
  name?: string;
  orgType?: string;
  platformSettings?: string;
  postalCode?: string;
  state?: string;
  status?: 'Deleted' | 'Active';
  streetAddress?: string;
  suite?: string;
  tildaid?: string;
  twilioNumber?: string;
  ufid?: number;
  updatedat?: number;
  url?: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsList]
 */
export interface OrganizationWithRole {
  /** Allowed regex [a-zA-Z][a-zA-Z0-9] */
  alias: string;
  bio?: string;
  bucket?: string;
  capabilities?: number;
  city?: string;
  contactPhone?: string;
  country?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  displayRoles?: string[];
  email?: string;
  emailSyncPoint?: string;
  enableNotifications?: boolean | null;
  filename?: string;
  holdbitmap?: number;
  mfaSettings?: string;
  name?: string;
  orgType?: string;
  platformSettings?: string;
  postalCode?: string;
  roles?: string;
  state?: string;
  status?: 'Deleted' | 'Active';
  streetAddress?: string;
  suite?: string;
  tildaid?: string;
  twilioNumber?: string;
  ufid?: number;
  updatedat?: number;
  url?: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsMembersCreate]
 * Module[sites]:Services[sitesSitemembersCreate, sitesSitemembersUpdate]
 */
export interface Actor {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  endDate?: string;
  holdbitmap?: number;
  isBlinded?: boolean;
  roles?: string;
  scopeId: string;
  startDate?: string;
  state?: 'Active' | 'Invited' | 'Inactive';
  tildaid?: string;
  updatedat?: number;
  userId: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsMembersCreate, organizationsMembersUpdate]
 * Used in Objects[OrganizationWithMembers]
 */
export interface ActorMeta {
  altEmails?: string;
  bio?: string;
  capabilities?: string;
  /** deprecate this? */
  contact?: string;
  /** valid only for site-member - it is working weekdays data {"mon":"9.00-17.00","tue":"9.00-17.00","wed":"9.00-17.00"} */
  daysOfWeek?: Record<string, string>;
  description?: string;
  /** empty or unique */
  email: string;
  endDate?: string;
  firstName: string;
  gcalSyncToken?: string;
  isBlinded?: boolean;
  lastName: string;
  location?: string;
  onboarded?: boolean;
  passwordSet?: boolean;
  /** empty or unique */
  phoneNumber: string;
  profilePicURL?: string;
  /** comma separated list of roles */
  role?: 'staff' | 'site_admin';
  startDate?: string;
  timezone?: string;
  /** valid only for org-members: Title given by the organization */
  title?: string;
  userId?: string;
  userType?: string;
  username?: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsAffiliationCreate]
 */
export interface AffiliationMeta {
  healthcareProvider?: boolean;
  state?: string;
  type: 'Advocate';
}

/**
 *
 * Used in Module[organizations]:Services[organizationsActorsRecommendedCreate]
 * Used in Objects[RecommendedSiteActorResponse]
 */
export interface GroupedUsers {
  items?: User[];
  title?: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsMembersOutputDetail]
 * Module[sites]:Services[sitesSitemembersOutputDetail]
 */
export interface ListActorsOutput {
  count?: number;
  orgActors?: OrgActorResponse[];
  siteActors?: SiteActorResponse[];
  studyActors?: StudyActorResponse[];
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsMembersDetail]
 * Used in Objects[ListActorsOutput, ListActorsOutput2]
 */
export interface OrgActorResponse {
  /** TBD based on UX */
  capabilities?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  displayRoles?: string[];
  docStudyPref?: string;
  endDate?: string;
  holdbitmap?: number;
  id?: string;
  isBlinded?: boolean | null;
  lastLogin?: string;
  profilePicId?: string;
  role?: string;
  roles?: string[];
  scope?: string;
  startDate?: string;
  state?: 'Active' | 'Invited' | 'Inactive';
  tildaid?: string;
  title?: string;
  updatedat?: number;
  userContact?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userTitle?: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsCreate, organizationsUpdate]
 * Used in Objects[ValidateIDs]
 */
export interface Organization {
  /** Allowed regex [a-zA-Z][a-zA-Z0-9] */
  alias: string;
  bio?: string;
  bucket?: string;
  capabilities?: number;
  city?: string;
  contactPhone?: string;
  country?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  email?: string;
  emailSyncPoint?: string;
  enableNotifications?: boolean | null;
  filename?: string;
  holdbitmap?: number;
  mfaSettings?: string;
  name?: string;
  orgType?: string;
  platformSettings?: string;
  postalCode?: string;
  state?: string;
  status?: 'Deleted' | 'Active';
  streetAddress?: string;
  suite?: string;
  tildaid?: string;
  twilioNumber?: string;
  ufid?: number;
  updatedat?: number;
  url?: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsDetail, organizationsUpdate]
 */
export interface OrganizationMeta {
  bio?: string;
  city?: string;
  contactPhone?: string;
  country?: string;
  email?: string;
  emailSyncPoint?: string;
  enableNotifications?: boolean | null;
  mfaSettings?: string;
  name?: string;
  orgType?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  suite?: string;
  twilioNumber?: string;
  url?: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsCreate]
 */
export interface OrganizationWithMembers {
  alias?: string;
  bio?: string;
  city?: string;
  contactPhone?: string;
  country?: string;
  email?: string;
  emailSyncPoint?: string;
  enableNotifications?: boolean | null;
  members?: ActorMeta[];
  mfaSettings?: string;
  name?: string;
  orgType?: string;
  postalCode?: string;
  state?: string;
  streetAddress?: string;
  suite?: string;
  twilioNumber?: string;
  url?: string;
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsActorsRecommendedCreate]
 */
export interface RecommendedSiteActorResponse {
  users?: GroupedUsers[];
}

/**
 *
 * Service Root object
 * Module[organizations]:Services[organizationsActorsRecommendedCreate]
 */
export interface RecommendedSiteMembersPayload {
  roleSites?: RoleSitesPayload[];
  studyId?: string;
}

/**
 *
 * Used in Module[organizations]:Services[organizationsActorsRecommendedCreate]
 * Used in Objects[RecommendedSiteMembersPayload]
 */
export interface RoleSitesPayload {
  applyToStudy?: boolean;
  role?: string;
  siteDetails?: SiteDetails[];
}

/**
 *
 * Used in Module[partners]:Services[partnersDetail]
 * Used in Objects[ApiPartnerOutputStudiesAssociated]
 */
export interface ApiPartnerOutputSitesSummary {
  siteId?: string;
  siteName?: string;
}

/**
 *
 * Used in Module[partners]:Services[partnersDetail]
 * Used in Objects[PartnerOutput]
 */
export interface ApiPartnerOutputStudiesAssociated {
  partnershipStatus?: 'Pending' | 'Approved' | 'Rejected';
  partnershipType?: 'Central' | 'Local';
  sitesSummary?: ApiPartnerOutputSitesSummary[];
  studyId?: string;
  studyName?: string;
}

/**
 *
 * Used in Module[partners]:Services[partnersDetail]
 * Used in Objects[SiteAssociated]
 */
export interface ApiSiteAssociatedStudiesSummary {
  studyId?: string;
  studyName?: string;
}

/**
 *
 * Used in Module[partners]:Services[partnersSitePartnerDetail]
 * Used in Objects[SitePartnershipOverview]
 */
export interface ApiSitePartnershipOverviewStudiesAssociated {
  partnershipStatus?: 'Pending' | 'Approved' | 'Rejected';
  partnershipType?: 'Central' | 'Local';
  studyId?: string;
  studyName?: string;
}

/**
 *
 * Used in Module[partners]:Services[partnersStudyCreate]
 * Used in Objects[StudyPartnersInput]
 */
export interface ApiStudyPartnersInputPartners {
  partnerId?: string;
  partnershipStatus?: 'Pending' | 'Approved' | 'Rejected';
  partnershipType?: 'Central' | 'Local';
  sitesList?: string[];
}

/**
 *
 * Used in Module[partners]:Services[partnersStudyPartnerDetail]
 * Used in Objects[StudyPartnershipOverview]
 */
export interface ApiStudyPartnershipOverviewSitesList {
  /** SitePartnershipStatus string `json:"sitePartnershipStatus"` */
  onboardingDate?: string;
  siteId?: string;
  siteName?: string;
}

/**
 *
 * Used in Module[partners]:Services[partnersStudyPartnerSitesCreate, partnersStudyPartnerSitesDelete]
 * Used in Objects[StudyPartnershipSites]
 */
export interface ApiStudyPartnershipSitesSites {
  siteId?: string;
  status?: 'Pending' | 'Active' | 'Inactive';
}

/**
 *
 * Used in Module[partners]:Services[partnersList]
 * Used in Objects[PartnersOverview]
 */
export interface PartnerBrief {
  city: string;
  country: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description: string;
  holdbitmap?: number;
  name: string;
  postalCode: string;
  sitesCount?: number;
  state: string;
  status?: 'Active' | 'Inactive';
  streetAddress: string;
  studiesCount?: number;
  suite?: string;
  tildaid?: string;
  type: 'IRB' | 'Lab' | 'Imaging Center';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersDetail]
 */
export interface PartnerOutput {
  city: string;
  country: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description: string;
  documentsAssociated?: Document[];
  /** Documents and Tasks are not supported yet */
  documentsCount?: number;
  holdbitmap?: number;
  name: string;
  postalCode: string;
  sitesAssociated?: SiteAssociated[];
  sitesCount?: number;
  state: string;
  status?: 'Active' | 'Inactive';
  streetAddress: string;
  studiesAssociated?: ApiPartnerOutputStudiesAssociated[];
  studiesCount?: number;
  suite?: string;
  tasksAssociated?: Task[];
  tasksCount?: number;
  tildaid?: string;
  type: 'IRB' | 'Lab' | 'Imaging Center';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersPartialUpdate]
 */
export interface PartnerPatch {
  city?: string;
  description?: string;
  postalCode?: string;
  state?: string;
  status?: 'Active' | 'Inactive';
  streetAddress?: string;
  suite?: string;
  type?: 'IRB' | 'Lab' | 'Imaging Center';
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersList]
 */
export interface PartnersOverview {
  numActive?: number;
  numInactive?: number;
  numTotal?: number;
  partnersList?: PartnerBrief[];
}

/**
 *
 * Used in Module[partners]:Services[partnersDetail]
 * Used in Objects[PartnerOutput]
 */
export interface SiteAssociated {
  siteId?: string;
  siteName?: string;
  studiesSummary?: ApiSiteAssociatedStudiesSummary[];
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersSiteDetail]
 */
export interface SitePartnerBrief {
  city: string;
  country: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description: string;
  holdbitmap?: number;
  name: string;
  postalCode: string;
  state: string;
  status?: 'Active' | 'Inactive';
  streetAddress: string;
  studiesCount?: number;
  suite?: string;
  tildaid?: string;
  type: 'IRB' | 'Lab' | 'Imaging Center';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersSitePartnerDetail]
 */
export interface SitePartnershipOverview {
  city: string;
  country: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description: string;
  holdbitmap?: number;
  name: string;
  postalCode: string;
  state: string;
  status?: 'Active' | 'Inactive';
  streetAddress: string;
  studiesAssociated?: ApiSitePartnershipOverviewStudiesAssociated[];
  studiesCount?: number;
  suite?: string;
  tildaid?: string;
  type: 'IRB' | 'Lab' | 'Imaging Center';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersSiteCreate]
 */
export interface SitePartnershipsInput {
  partners?: string[];
  siteId?: string;
}

/**
 *
 * Used in Module[partners]:Services[partnersStudyDetail]
 * Used in Objects[StudyPartnersOverview]
 */
export interface StudyPartnerBrief {
  city: string;
  country: string;
  partnerId?: string;
  partnerName?: string;
  partnerType?: 'IRB' | 'Lab' | 'Imaging Center';
  partnershipStatus?: 'Pending' | 'Approved' | 'Rejected';
  partnershipType?: 'Central' | 'Local';
  postalCode: string;
  sitesCount?: number;
  state: string;
  streetAddress: string;
  suite?: string;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersStudyCreate]
 */
export interface StudyPartnersInput {
  partners?: ApiStudyPartnersInputPartners[];
  studyId?: string;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersStudyCreate]
 */
export interface StudyPartnersOutput {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  partnerId?: string;
  sitesList?: string[];
  status?: 'Pending' | 'Approved' | 'Rejected';
  studyId?: string;
  tildaid?: string;
  type?: 'Central' | 'Local';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersStudyDetail]
 */
export interface StudyPartnersOverview {
  numApproved?: number;
  numPending?: number;
  numRejected?: number;
  numTotal?: number;
  partnersList?: StudyPartnerBrief[];
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersStudyPartnerDetail]
 */
export interface StudyPartnershipOverview {
  partnerInfo?: Partner;
  partnershipStatus?: 'Pending' | 'Approved' | 'Rejected';
  partnershipType?: 'Central' | 'Local';
  sitesCount?: number;
  sitesList?: ApiStudyPartnershipOverviewSitesList[];
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersStudyPartnerSitesCreate, partnersStudyPartnerSitesDelete]
 */
export interface StudyPartnershipSites {
  partnerId?: string;
  sites?: ApiStudyPartnershipSitesSites[];
  studyId?: string;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersCreate, partnersPartialUpdate, partnersUpdate]
 * Used in Objects[StudyPartnershipOverview]
 */
export interface Partner {
  city: string;
  country: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description: string;
  holdbitmap?: number;
  name: string;
  postalCode: string;
  state: string;
  status?: 'Active' | 'Inactive';
  streetAddress: string;
  suite?: string;
  tildaid?: string;
  type: 'IRB' | 'Lab' | 'Imaging Center';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersUpdate]
 */
export interface PartnerMeta {
  city: string;
  country: string;
  description: string;
  postalCode: string;
  state: string;
  status?: 'Active' | 'Inactive';
  streetAddress: string;
  suite?: string;
  type: 'IRB' | 'Lab' | 'Imaging Center';
}

/**
 *
 * Service Root object
 * Module[partners]:Services[partnersStudyPartnerUpdate]
 */
export interface StudyPartnership {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  partnerId?: string;
  status?: 'Pending' | 'Approved' | 'Rejected';
  studyId?: string;
  tildaid?: string;
  type?: 'Central' | 'Local';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsAuditlogsDetail]
 */
export interface PatientAuditLogResponse {
  auditLogs?: ChangeLog[];
  count?: number;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsLeadsDetail]
 */
export interface PatientLeadResponse {
  count?: number;
  leads?: PatientLeadInfo[];
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientPhisList]
 */
export interface PatientPhiResponse {
  count?: number;
  phis?: PatientPhiInfo[];
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsProvidersCreate, patientsProvidersUpdate]
 * Used in Objects[PatientProviderSummaryResponse]
 */
export interface PatientProviderCfg {
  createdat?: string;
  createdby?: string;
  isprimarycare?: boolean;
  name?: string;
  officename?: string;
  officephone?: string;
  phonenumber?: string;
  specialty?: string;
  specialtyother?: string;
  tildaid?: string;
  updatedat?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsProvidersDetail]
 */
export interface PatientProviderSummaryResponse {
  count?: number;
  providers?: PatientProviderCfg[];
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsStudiesDetail]
 */
export interface PatientStudyResponse {
  count?: number;
  studies?: PatientStudyInfo[];
}

/**
 *
 * Used in Module[patients]:Services[patientsList]
 * Used in Objects[PatientSummaryResponse]
 */
export interface PatientSummary {
  age?: number;
  gender?: string;
  homephone?: string;
  lastappointment?: string;
  mobilephone?: string;
  practicename?: string;
  tildaid?: string;
  ufid?: number;
  workphone?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsList]
 */
export interface PatientSummaryResponse {
  result?: PatientSummary[];
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsAllergiesDetail]
 */
export interface PatientAllergyInfo {
  allergies?: AllergyCommon[];
  count?: number;
}

/**
 *
 * Used in Module[patients]:Services[patientsLabreportsDetail]
 * Used in Objects[PatientAnalyteInfo]
 */
export interface PatientAnalyte {
  name?: string;
  notes?: string;
  resultdate?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsLabreportsDetail]
 */
export interface PatientAnalyteInfo {
  count?: number;
  labreports?: PatientAnalyte[];
}

/**
 *
 * Used in Module[patients]:Services[patientsAppointmentsDetail]
 * Used in Objects[PatientAppointmentInfo]
 */
export interface PatientAppointment {
  date?: string;
  reason?: string;
  starttime?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsAppointmentsDetail]
 */
export interface PatientAppointmentInfo {
  appointments?: PatientAppointment[];
  count?: number;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsCreate, patientsUpdate]
 */
export interface PatientCfg {
  address1?: string;
  address2?: string;
  advocateid?: string;
  advocateorgid?: string;
  badcontactmethods?: string[];
  bucketname?: string;
  campaigncode?: string;
  city?: string;
  contactpreference?: string;
  country?: string;
  csvLoad?: boolean;
  /** @format date */
  dob?: string;
  email?: string;
  emergencycontactemail?: string;
  emergencycontactname?: string;
  emergencycontactphonenumber?: string;
  emergencycontactrelation?: string;
  emrname?: string;
  emrversion?: string;
  filename?: string;
  firstname?: string;
  /** to be filled in RPA scenarios where the full name is readily extractable */
  fullname?: string;
  haspowerofattorney?: boolean;
  hasstudypartner?: boolean;
  homephone?: string;
  integrationtype?: string;
  interestedconditionids?: string[];
  interestedsiteids?: string[];
  lastdoctorvisit?: string;
  lastname?: string;
  latitude?: number;
  longitude?: number;
  middlename?: string;
  mobilephone?: string;
  mriwilling?: boolean;
  nickname?: string;
  nopcp?: boolean;
  objtype?: string;
  patchUpdate?: boolean;
  patientid?: string;
  patientuserid?: string;
  pofaisemergencycontact?: boolean;
  powerofattorneyname?: string;
  powerofattorneyrelation?: string;
  practicename?: string;
  preferredlanguage?: string;
  preferredname?: string;
  primaryphonetype?: string;
  reason?: string;
  secondaryphonetype?: string;
  sex?: string;
  source?: string;
  sourcedetail?: string;
  ssn?: string;
  state?: string;
  status?:
    | 'Prospect'
    | 'Bad Contact Info'
    | 'Do not Contact'
    | 'Do Not Enroll'
    | 'Marked For Deletion';
  studypartneraddress1?: string;
  studypartneraddress2?: string;
  studypartnercity?: string;
  studypartnercountry?: string;
  studypartneremail?: string;
  studypartnerisemergencycontact?: boolean;
  studypartnername?: string;
  studypartnerphone?: string;
  studypartnerrelation?: string;
  studypartnerstate?: string;
  studypartnerzipcode?: string;
  suffix?: string;
  timepreference?: string;
  workphone?: string;
  zippostalcode?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsProfileDetail]
 */
export interface PatientFullProfile {
  address1?: string;
  address2?: string;
  allergiescount?: number;
  city?: string;
  contactpreference?: string;
  country?: string;
  /** @format date */
  dob?: string;
  email?: string;
  emergencycontactemail?: string;
  emergencycontactname?: string;
  emergencycontactphonenumber?: string;
  emergencycontactrelation?: string;
  firstname?: string;
  /** to be filled in RPA scenarios where the full name is readily extractable */
  fullname?: string;
  gender?: string;
  haspowerofattorney?: boolean;
  hasstudypartner?: boolean;
  homephone?: string;
  hospitalizationscount?: number;
  interestedconditionids?: string[];
  lastappointment?: string;
  lastname?: string;
  latitude?: number;
  longitude?: number;
  medicalconditionscount?: number;
  medicationscount?: number;
  middlename?: string;
  mobilephone?: string;
  nickname?: string;
  patientId?: string;
  phiId?: string;
  pofaisemergencycontact?: boolean;
  powerofattorneyname?: string;
  powerofattorneyrelation?: string;
  preferredlanguage?: string;
  preferredname?: string;
  primaryphonetype?: string;
  procedurescount?: number;
  secondaryphonetype?: string;
  ssn?: string;
  state?: string;
  studyInfo?: StudyInfo[];
  studypartneraddress1?: string;
  studypartneraddress2?: string;
  studypartnercity?: string;
  studypartnercountry?: string;
  studypartneremail?: string;
  studypartnerisemergencycontact?: boolean;
  studypartnername?: string;
  studypartnerphone?: string;
  studypartnerrelation?: string;
  studypartnerstate?: string;
  studypartnerzipcode?: string;
  suffix?: string;
  timepreference?: string;
  workphone?: string;
  zippostalcode?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsHospitalizationsDetail]
 */
export interface PatientHospitalizationInfo {
  count?: number;
  hospitalizations?: HospitalizationCommon[];
}

/**
 *
 * Used in Module[patients]:Services[patientsLeadsDetail]
 * Used in Objects[PatientLeadResponse]
 */
export interface PatientLeadInfo {
  prescreenattempted?: boolean;
  protocolnumber?: string;
  protocolversion?: string;
  sponsor?: string;
  status?: string;
  studyid?: string;
  studyname?: string;
}

/**
 *
 * Used in Module[patients]:Services[patientsMedicalConditionsDetail]
 * Used in Objects[PatientMedicalConditionInfo]
 */
export interface PatientMedicalCondition {
  medicalcondition?: string;
  start?: string;
  stop?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsMedicalConditionsDetail]
 */
export interface PatientMedicalConditionInfo {
  count?: number;
  medicalconditions?: PatientMedicalCondition[];
}

/**
 *
 * Used in Module[patients]:Services[patientsMedicationsDetail]
 * Used in Objects[PatientMedicationInfo]
 */
export interface PatientMedication {
  name?: string;
  start?: string;
  stop?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsMedicationsDetail]
 */
export interface PatientMedicationInfo {
  count?: number;
  medications?: PatientMedication[];
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsPartialUpdate]
 */
export interface PatientPatchCfg {
  badcontactmethods?: string[];
  lastdoctorvisit?: string;
  nopcp?: boolean;
  reason?: string;
  status?:
    | 'Prospect'
    | 'Bad Contact Info'
    | 'Do not Contact'
    | 'Do Not Enroll'
    | 'Marked For Deletion';
}

/**
 *
 * Used in Module[patients]:Services[patientPhisList]
 * Used in Objects[PatientPhiResponse]
 */
export interface PatientPhiInfo {
  address1?: string;
  address2?: string;
  advocateid?: string;
  advocateorgid?: string;
  badcontactmethods?: string[];
  bucketname?: string;
  campaigncode?: string;
  city?: string;
  contactpreference?: string;
  conversationSID?: string;
  country?: string;
  createdat?: string;
  csvLoad?: boolean;
  /** @format date */
  dob?: string;
  email?: string;
  emergencycontactemail?: string;
  emergencycontactname?: string;
  emergencycontactphonenumber?: string;
  emergencycontactrelation?: string;
  emrname?: string;
  emrversion?: string;
  filename?: string;
  firstname?: string;
  /** to be filled in RPA scenarios where the full name is readily extractable */
  fullname?: string;
  haspowerofattorney?: boolean;
  hasstudypartner?: boolean;
  homephone?: string;
  hrrfsigned?: boolean;
  integrationtype?: string;
  interestedconditionids?: string[];
  interestedsiteids?: string[];
  isadvocate?: boolean;
  lastcontacted?: string;
  lastdoctorvisit?: string;
  lastname?: string;
  latitude?: number;
  longitude?: number;
  medicalgroupid?: string;
  middlename?: string;
  mobilephone?: string;
  mriwilling?: boolean;
  mrn?: string;
  nickname?: string;
  nopcp?: boolean;
  objtype?: string;
  patchUpdate?: boolean;
  patientid?: string;
  patientuserid?: string;
  pofaisemergencycontact?: boolean;
  powerofattorneyname?: string;
  powerofattorneyrelation?: string;
  practicename?: string;
  preferredlanguage?: string;
  preferredname?: string;
  primaryphonetype?: string;
  reason?: string;
  secondaryphonetype?: string;
  sex?: string;
  source?: string;
  sourcedetail?: string;
  ssn?: string;
  state?: string;
  status?: string;
  studypartneraddress1?: string;
  studypartneraddress2?: string;
  studypartnercity?: string;
  studypartnercountry?: string;
  studypartneremail?: string;
  studypartnerisemergencycontact?: boolean;
  studypartnername?: string;
  studypartnerphone?: string;
  studypartnerrelation?: string;
  studypartnerstate?: string;
  studypartnerzipcode?: string;
  suffix?: string;
  timepreference?: string;
  ufid?: number;
  workphone?: string;
  zippostalcode?: string;
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsProceduresDetail]
 */
export interface PatientProcedureInfo {
  count?: number;
  procedures?: ProcedureCommon[];
}

/**
 *
 * Service Root object
 * Module[patients]:Services[patientsDetail]
 */
export interface PatientProfile {
  age?: number;
  conversationSID?: string;
  createdat?: string;
  gender?: string;
  homephone?: string;
  mobilephone?: string;
  tildaid?: string;
  ufid?: number;
  workphone?: string;
}

/**
 *
 * Used in Module[patients]:Services[patientsStudiesDetail]
 * Used in Objects[PatientStudyResponse]
 */
export interface PatientStudyInfo {
  nextvisit?: string;
  protocolnumber?: string;
  protocolversion?: string;
  site?: string;
  sponsor?: string;
  status?: string;
  stipend?: number;
  studyid?: string;
  studyname?: string;
}

/**
 *
 * Used in Module[patients]:Services[patientsAllergiesDetail]
 * Used in Objects[PatientAllergyInfo]
 */
export interface AllergyCommon {
  encounterdate?: string;
  name?: string;
  patientmrn?: number;
  patientmrnstring?: string;
  phiid?: string;
  /** @format date */
  startdate?: string;
  status?: string;
  /** @format date */
  stopdate?: string;
}

/**
 *
 * Used in Module[patients]:Services[patientsHospitalizationsDetail]
 * Used in Objects[PatientHospitalizationInfo]
 */
export interface HospitalizationCommon {
  admissiondate?: string;
  dischargedate?: string;
  encounterdate?: string;
  phiid?: string;
  reason?: string;
  status?: string;
}

/**
 *
 * Used in Module[patients]:Services[patientsProceduresDetail]
 * Used in Objects[PatientProcedureInfo]
 */
export interface ProcedureCommon {
  /** @format date */
  date?: string;
  description?: string;
  encounterdate?: string;
  name?: string;
  phiid?: string;
  reason?: string;
  standardizedcodes?: string;
  status?: string;
  tag?: string;
  tagvalue?: string;
}

/**
 *
 * Service Root object
 * Module[register]:Services[verifyEmailCreate]
 */
export interface HandlersAuth0Identity {
  subject?: string;
}

/**
 *
 * Service Root object
 * Module[register]:Services[userList]
 */
export interface HandlersUserCheck {
  exists?: boolean;
  passwordSet?: boolean;
}

/**
 *
 * Service Root object
 * Module[register]:Services[checkauthList]
 */
export interface CheckAuthzParam {
  email?: string;
  id?: string;
  object?: string;
  operation?: string;
  role?: string;
}

/**
 *
 * Service Root object
 * Module[register]:Services[passwordResetCompleteCreate]
 */
export interface NewPasswordInput {
  password: string;
  ticketId: string;
}

/**
 *
 * Service Root object
 * Module[register]:Services[passwordResetTriggerUpdate]
 */
export interface ResetPasswordRequest {
  email: string;
  platform: 'portal' | 'sense';
}

/**
 *
 * Used in Module[reports]:Services[reportsFiltersDetail]
 * Used in Objects[ReportFilterResponse]
 */
export interface FilterSummary {
  createdat?: string;
  createdby?: string;
  draftnumpatients?: number;
  lastdraftevaluated?: string;
  lastdraftrunscheduledat?: string;
  lastevaluated?: string;
  lastrunscheduledat?: string;
  lastupdatedby?: string;
  name?: string;
  numpatients?: number;
  numreports?: number;
  numstudies?: number;
  saved?: boolean;
  savedupdatedat?: string;
  tildaid?: string;
  updatedat?: string;
}

/**
 *
 * Service Root object
 * Module[reports]:Services[reportsCreate, reportsUpdate, reportDupCreate]
 */
export interface ReportCfg {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  discard?: boolean;
  draft?: boolean;
  duplicate?: boolean;
  exclusionfilterids?: string[];
  filtercfgupdate?: boolean;
  holdbitmap?: number;
  inclusionfilterids?: string[];
  lastupdatedby?: string;
  name?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[reports]:Services[reportsFiltersDetail]
 */
export interface ReportFilterResponse {
  draftexclusionfilters?: FilterSummary[];
  draftinclusionfilters?: FilterSummary[];
  exclusionfilters?: FilterSummary[];
  inclusionfilters?: FilterSummary[];
}

/**
 *
 * Used in Module[reports]:Services[reportsPatientsDetail]
 * Used in Objects[ReportPatientResponse]
 */
export interface ReportPatientInfo {
  lastappointment?: string;
  tildaid?: string;
  ufid?: number;
}

/**
 *
 * Service Root object
 * Module[reports]:Services[reportsPatientsDetail]
 */
export interface ReportPatientResponse {
  count?: number;
  patients?: ReportPatientInfo[];
}

/**
 *
 * Service Root object
 * Module[reports]:Services[reportsStudiesDetail]
 */
export interface ReportStudyResponse {
  studies?: ReportStudyInfo[];
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedGenerateSchedulesCreate]
 */
export interface ApptRequest {
  carePlanId?: string;
  from?: string;
  numOfSuggestions?: number;
  oldVisitId?: string;
  org?: string;
  taskId?: string;
  timeZone?: string;
  user?: string;
  visitId?: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedCalenderCreate]
 */
export interface CalendarRequest {
  from?: string;
  /** MONTHLY/DAILY/WEEKLY */
  granularity?: 'WEEKLY' | 'MONTHLY' | 'DAILY';
  resourceId?: string;
  /** STAFF/ROOM/EQUIPMENT */
  resourceType?: 'STAFF' | 'ROOM' | 'EQUIPMENT';
  timeZone?: string;
  /** Flag to use 'from' date as is without any adjustment */
  useExactStartDate?: boolean;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedCalenderCreate]
 */
export interface CalendarResp {
  SMOs?: Smo[];
  events?: Record<string, ResourceAppt[]>;
  outOfOfficeEvents?: OutOfOffice[];
  resourceId?: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedManualVisitAppointmentsCreate]
 */
export interface ManualVisitApptRequest {
  attendees: string[];
  carePlanId: string;
  description?: string;
  from: string;
  outOfWindowNote?: string;
  room?: string;
  to: string;
  visitId: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedOutOfOfficeRequestCreate]
 */
export interface OOORequest {
  description?: string;
  from: string;
  resourceId?: string;
  /** STAFF/ROOM/EQUIPMENT */
  resourceType?: 'STAFF' | 'ROOM' | 'EQUIPMENT';
  to: string;
}

/**
 *
 * Used in Module[sched]:Services[v1SchedUserAppointmentsCreate]
 * Used in Objects[SimpleApptRequest]
 */
export interface ROption {
  bymonth?: number[];
  bymonthday?: number[];
  byweekday?: string[];
  byyearday?: number[];
  count?: number;
  freq?: string;
  interval?: number;
  until?: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedVisitCarePlanSchedRoleInfoDetail]
 */
export interface SchedRoleInfoResp {
  carePlanId?: string;
  /** map of role and number of participants */
  roles?: Record<string, number>;
  siteId?: string;
  siteTimeZone?: string;
  studyId?: string;
  visitDurationInMin?: number;
  visitId?: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedUserAppointmentsCreate]
 */
export interface SimpleApptRequest {
  attendees?: string[];
  description?: string;
  enableVideo?: boolean;
  from: string;
  recurringInfo?: ROption;
  room?: string;
  siteName?: string;
  title?: string;
  to: string;
  /** by default=EVENT , EVENT/FOCUS_TIME */
  type?: 'EVENT' | 'FOCUS_TIME' | 'OOO';
  user?: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedSubjectVisitAppointmentsCreate]
 */
export interface SiteCalendarResp {
  events?: Record<string, SubjectAppointment[]>;
  outOfOfficeEvents?: OutOfOffice[];
  summary?: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedVisitApptResourceAvailabilityInfoCreate]
 */
export interface AvailableResourcesReq {
  appointmentId: string;
  role: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedVisitApptResourceAvailabilityInfoCreate]
 */
export interface AvailableResourcesResp {
  appointmentId?: string;
  resources?: Resource[];
  role?: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedCalendarPrefFilterCreate, v1SchedCalendarPrefFilterList]
 */
export interface CalendarPrefFilterResp {
  apptStates?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  siteInfo?: OSite[];
  staffId?: string;
  studyInfo?: Info[];
  tildaid?: string;
  updatedat?: number;
  userInfo?: OUser[];
}

/**
 *
 * Used in Module[sched]:Services[v1SchedCalendarPrefFilterCreate, v1SchedCalendarPrefFilterList]
 * Used in Objects[CalendarPrefFilterResp]
 */
export interface Info {
  id?: string;
  name?: string;
}

/**
 *
 * Used in Module[sched]:Services[v1SchedCalendarPrefFilterCreate, v1SchedCalendarPrefFilterList]
 * Used in Objects[CalendarPrefFilterResp]
 */
export interface OSite {
  city: string;
  country: string;
  id?: string;
  name?: string;
  postalCode: string;
  state: string;
  streetAddress: string;
  suite?: string;
}

/**
 *
 * Used in Module[sched]:Services[v1SchedCalendarPrefFilterCreate, v1SchedCalendarPrefFilterList]
 * Used in Objects[CalendarPrefFilterResp]
 */
export interface OUser {
  id?: string;
  name?: string;
  profilePicUrl?: string;
  roles?: string;
}

/**
 *
 * Used in Module[sched]:Services[v1SchedVisitApptResourceAvailabilityInfoCreate]
 * Used in Objects[AvailableResourcesResp]
 */
export interface Resource {
  available?: boolean;
  email?: string;
  id?: string;
  name?: string;
}

/**
 *
 * Used in Module[sched]:Services[v1SchedGenerateSchedulesCreate, v1SchedManualVisitAppointmentsCreate, v1SchedParticipantVisitUpdateVisitAppointmentUpdate, v1SchedResourceAppointmentsDetail, v1SchedVisitAppointmentsCreate, v1SchedVisitAppointmentsDetail, v1SchedVisitAppointmentsUpdate]
 * Used in Objects[SubjectAppointment]
 */
export interface ApptDetails {
  dietaryRestrictions?: string;
  otherSubjectInfo?: string;
  transportPlan?: string;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedCalendarPrefFilterCreate]
 */
export interface CalendarPrefFilter {
  apptStates?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  siteIDs?: string[];
  staffId?: string;
  studyIDs?: string[];
  tildaid?: string;
  updatedat?: number;
  userIDs?: string[];
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedSubjectVisitAppointmentsCreate]
 */
export interface CalendarPrefFilterReq {
  apptStates?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  fetchSummary?: boolean;
  holdbitmap?: number;
  patientId?: string;
  siteIDs?: string[];
  staffId?: string;
  studyIDs?: string[];
  tildaid?: string;
  updatedat?: number;
  userIDs?: string[];
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedOutOfOfficeRequestCreate]
 * Used in Objects[CalendarResp, SiteCalendarResp]
 */
export interface OutOfOffice {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  endTime?: string;
  holdbitmap?: number;
  resourceId?: string;
  /** STAFF/ROOM/EQUIPMENT//SITE */
  resourceType?: string;
  startTime?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[sched]:Services[v1SchedGenerateSchedulesCreate, v1SchedManualVisitAppointmentsCreate, v1SchedParticipantVisitUpdateVisitAppointmentUpdate, v1SchedResourceAppointmentsDetail, v1SchedVisitAppointmentsCreate, v1SchedVisitAppointmentsDetail, v1SchedVisitAppointmentsUpdate]
 * Used in Objects[ResourceAppt, SubjectAppointment]
 */
export interface PHIShortInfo {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  email?: string;
  firstname?: string;
  fullname?: string;
  holdbitmap?: number;
  lastname?: string;
  middlename?: string;
  mobilephone?: string;
  mrn?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedUserAppointmentsCreate]
 */
export interface ResourceAppointment {
  attendees?: string;
  carePlanId?: string;
  conferenceData?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  distinguishedName?: string;
  email?: string;
  endTime?: string;
  holdbitmap?: number;
  name?: string;
  owner?: string;
  participantActivityGroupId?: string;
  recurringInfo?: string;
  resourceId?: string;
  resourceType?: string;
  role?: string;
  /** stores the dsl expression for back referencing during reschedule of staff */
  roleExpression?: string;
  room?: string;
  siteName?: string;
  startTime?: string;
  state?: string;
  studyId?: string;
  studyName?: string;
  tildaid?: string;
  title?: string;
  /** by default=EVENT , EVENT/FOCUS_TIME */
  type?: 'EVENT' | 'FOCUS_TIME' | 'OOO';
  updatedat?: number;
  userCreated?: boolean;
  visitName?: string;
}

/**
 *
 * Used in Module[sched]:Services[v1SchedCalenderCreate]
 * Used in Objects[CalendarResp]
 */
export interface ResourceAppt {
  apptConfirmState?: string;
  apptId?: string;
  apptState?: string;
  apptTitle?: string;
  attendees?: string;
  calendarId?: string;
  carePlanId?: string;
  conferenceData?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  distinguishedName?: string;
  email?: string;
  endTime?: string;
  holdbitmap?: number;
  name?: string;
  owner?: string;
  participantActivityGroupId?: string;
  phiinfo?: PHIShortInfo;
  recurringInfo?: string;
  resourceId?: string;
  resourceType?: string;
  role?: string;
  /** stores the dsl expression for back referencing during reschedule of staff */
  roleExpression?: string;
  room?: string;
  siteId?: string;
  siteName?: string;
  startTime?: string;
  state?: string;
  studyAccess?: boolean;
  studyId?: string;
  studyName?: string;
  tildaid?: string;
  title?: string;
  /** by default=EVENT , EVENT/FOCUS_TIME */
  type?: 'EVENT' | 'FOCUS_TIME' | 'OOO';
  updatedat?: number;
  userCreated?: boolean;
  visitId?: string;
  visitName?: string;
}

/**
 *
 * Used in Module[sched]:Services[v1SchedCalenderCreate]
 * Used in Objects[CalendarResp]
 */
export interface Smo {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  name: string;
  orgId?: string;
  status?: 'Deleted' | 'Active';
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[sched]:Services[v1SchedGenerateSchedulesCreate, v1SchedManualVisitAppointmentsCreate, v1SchedParticipantVisitUpdateVisitAppointmentUpdate, v1SchedResourceAppointmentsDetail, v1SchedVisitAppointmentsCreate, v1SchedVisitAppointmentsDetail, v1SchedVisitAppointmentsUpdate]
 * Used in Objects[SiteCalendarResp, OutputMessage]
 */
export interface SubjectAppointment {
  ApptDetails?: ApptDetails;
  PHIInfo?: PHIShortInfo;
  assignedResources?: string[];
  attendeeIds?: string[];
  attendees?: string;
  carePlanId?: string;
  conferenceData?: string;
  /** keeps track of either it was confirmed or is in pending state */
  confirmState?: string;
  cpStatus?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  distinguishedName?: string;
  endTime?: string;
  gcalIdMap?: string;
  holdbitmap?: number;
  isCurrent?: boolean;
  isManual?: boolean;
  isSecondaryAppt?: boolean;
  isVisitLevelAppt?: boolean;
  note?: string;
  outOfWindowNote?: string;
  owner?: string;
  participantVisitId?: string;
  remote?: boolean;
  room?: string;
  roomId?: string;
  siteId?: string;
  siteLocationId?: string;
  siteLocationName?: string;
  siteName?: string;
  siteTimeZone?: string;
  startTime?: string;
  /** current status of the visit appointment */
  state?: string;
  studyAccess?: boolean;
  studyId?: string;
  studyName?: string;
  studyPeriod?: string;
  subjectId?: string;
  tempId?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
  visitId?: string;
  visitName?: string;
  visitStatus?: string;
  visitTitle?: string;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesCreate]
 * Module[register]:Services[checkauthList]
 */
export interface CheckAuthzResponse {
  /** Only in case of Conditional allow */
  condition?: string;
  /** Allow, Deny, Conditional allow */
  decision?: string;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesSitemembersCreate, sitesSitemembersUpdate]
 * Used in Objects[SiteInput]
 */
export interface SiteActorInput {
  /** it is working weekdays data {"mon":"9.00-17.00","tue":"9.00-17.00","wed":"9.00-17.00"} */
  daysOfWeek?: Record<string, string>;
  email?: string;
  endDate?: string;
  /** list of roles */
  role?: ('staff' | 'site_admin')[];
  siteId?: string;
  startDate?: string;
  userId?: string;
}

/**
 *
 * Used in Module[sites]:Services[sitesList, sitesRoomsDetail]
 * Used in Objects[SitesOverview]
 */
export interface SiteBrief {
  address?: string;
  capacity?: string;
  city: string;
  contactEmail?: string;
  contactPhone?: string;
  country: string;
  createdat?: number;
  /** Hours of operation */
  daysOfWeekStr: string;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  googleMapUrl?: string;
  holdbitmap?: number;
  holidaysList?: string;
  latitude?: number;
  longitude?: number;
  name: string;
  orgId: string;
  outstandingQueries?: number;
  postalCode: string;
  primaryLocationId?: string;
  siteLogo?: string;
  smoId?: string;
  state: string;
  status?: 'Active' | 'Archived' | 'Onboarding';
  streetAddress: string;
  studiesSummary?: StatusCount[];
  subjectsCount?: number;
  suite?: string;
  tildaid?: string;
  timeZone: string;
  twilioNumber?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesCreate]
 */
export interface SiteInput {
  capacity?: string;
  city: string;
  contactEmail?: string;
  contactPhone?: string;
  country: string;
  daysOfWeek?: Record<string, string>;
  /** Hours of operation */
  daysOfWeekStr: string;
  description?: string;
  /** Only for site creation */
  equipments?: Equipment[];
  googleMapUrl?: string;
  holidaysList?: string;
  latitude?: number;
  longitude?: number;
  name: string;
  postalCode: string;
  primaryLocationId?: string;
  /** Only for site creation */
  rooms?: Room[];
  siteLogo?: string;
  state: string;
  streetAddress: string;
  suite?: string;
  /** Only for site creation */
  team?: SiteActorInput[];
  timeZone: string;
  twilioNumber?: string;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesDetail]
 */
export interface SiteOutput {
  address?: string;
  capacity?: string;
  city: string;
  contactEmail?: string;
  contactPhone?: string;
  country: string;
  createdat?: number;
  /** Hours of operation */
  daysOfWeekStr: string;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  equipmentSummary?: Equipment[];
  googleMapUrl?: string;
  holdbitmap?: number;
  holidaysList?: string;
  latitude?: number;
  longitude?: number;
  name: string;
  orgId: string;
  postalCode: string;
  primaryLocationId?: string;
  roomSummary?: Room[];
  siteLogo?: string;
  smoId?: string;
  staffSummary?: SiteStaff[];
  state: string;
  status?: 'Active' | 'Archived' | 'Onboarding';
  streetAddress: string;
  studiesSummary?: StatusCount[];
  suite?: string;
  tildaid?: string;
  timeZone: string;
  twilioNumber?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[sites]:Services[sitesDetail]
 * Used in Objects[SiteOutput]
 */
export interface SiteStaff {
  role?: string;
  users?: string[];
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesStudiesDetail]
 */
export interface SiteStudiesOverview {
  numClosed?: number;
  numEnrolling?: number;
  numOngoing?: number;
  numPaused?: number;
  numStartup?: number;
  numTotal?: number;
  studiesList?: SiteStudyOutput[];
}

/**
 *
 * Used in Module[sites]:Services[sitesStudiesDetail]
 * Used in Objects[SiteStudiesOverview]
 */
export interface SiteStudyOutput {
  blindingTerm?: 'mask_and_unmask' | 'blind_and_unblind';
  category?: string;
  createdat?: number;
  crioid?: string;
  /** dbkey:"croId" */
  croId?: string;
  defscreenerid?: string;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  isBlinded?: boolean;
  isv2screener?: boolean;
  label?: string;
  maxRecruits?: number;
  /** dbkey:"name" */
  name?: string;
  outstandingQueries?: number;
  phase?: string;
  protocolnumber?: string;
  protocolversion?: string;
  screeneroptional?: boolean;
  siteId?: string;
  skipscheduling?: boolean;
  skipsiteselection?: boolean;
  /** dbkey:"sponsor" */
  sponsor?: string;
  sponsorid?: string;
  srcorgid?: string;
  staffSummary?: StudyStaff[];
  status?:
    | 'startup'
    | 'enrolling'
    | 'paused'
    | 'closed'
    | 'ongoing'
    | 'draft'
    | 'maintenance';
  subjectSummary?: StatusCount[];
  targetRegion?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesList, sitesRoomsDetail]
 */
export interface SitesOverview {
  numActive?: number;
  numArchived?: number;
  numDraft?: number;
  numMaintenance?: number;
  numOnboarding?: number;
  numTotal?: number;
  sitesList?: SiteBrief[];
}

/**
 *
 * Used in Module[sites]:Services[sitesDetail]
 * Used in Objects[SiteBrief, SiteOutput, SiteStudyOutput]
 */
export interface StatusCount {
  count?: number;
  status?: string;
}

/**
 *
 * Used in Module[sites]:Services[sitesStudiesDetail]
 * Used in Objects[SiteStudyOutput]
 */
export interface StudyStaff {
  email?: string;
  location?: string;
  profilePicURL?: string;
  roles?: string[];
  userName?: string;
}

/**
 *
 * Used in Module[sites]:Services[sitesCreate, sitesDetail]
 * Used in Objects[SiteInput, SiteOutput]
 */
export interface Equipment {
  /** skillset */
  capabilities?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  name: string;
  siteId: string;
  status?: 'Deleted' | 'Active' | 'Idle';
  tildaid?: string;
  type?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesRoomsCreate, sitesRoomsDetail2, sitesRoomsUpdate]
 * Used in Objects[SiteInput, SiteOutput]
 */
export interface Room {
  /** activity groups that can be performed */
  capabilities?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description: string;
  holdbitmap?: number;
  name: string;
  siteId: string;
  status?: 'Deleted' | 'Active';
  tildaid?: string;
  type: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesUpdate]
 * Used in Objects[OutputAdverseEvent, OutputAdverseEventV2]
 */
export interface Site {
  address?: string;
  capacity?: string;
  city: string;
  contactEmail?: string;
  contactPhone?: string;
  country: string;
  createdat?: number;
  /** Hours of operation */
  daysOfWeekStr: string;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  googleMapUrl?: string;
  holdbitmap?: number;
  holidaysList?: string;
  latitude?: number;
  longitude?: number;
  name: string;
  orgId: string;
  postalCode: string;
  primaryLocationId?: string;
  siteLogo?: string;
  smoId?: string;
  state: string;
  status?: 'Active' | 'Archived' | 'Onboarding';
  streetAddress: string;
  suite?: string;
  tildaid?: string;
  timeZone: string;
  twilioNumber?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesSitemembersDetail]
 * Used in Objects[ListActorsOutput, ListActorsOutput2]
 */
export interface SiteActorResponse {
  /** TBD based on UX */
  capabilities?: string;
  createdat?: number;
  /** {"mon":"9.00-17.00","tue":"9.00-17.00","wed":"9.00-17.00"} */
  daysOfWeekStr?: string;
  delpending?: boolean;
  deltimestamp?: number;
  displayRoles?: string[];
  endDate?: string;
  holdbitmap?: number;
  id?: string;
  isBlinded?: boolean | null;
  lastLogin?: string;
  profilePicId?: string;
  role?: string;
  roles?: string[];
  scope?: string;
  startDate?: string;
  state?: 'Active' | 'Invited' | 'Inactive';
  tildaid?: string;
  updatedat?: number;
  userContact?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userTitle?: string;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesLocationsCreate, sitesLocationsDelete, sitesLocationsDetail, sitesLocationsDetail2, sitesLocationsUpdate]
 */
export interface SiteLocation {
  city: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  isPrimary?: boolean;
  name?: string;
  postalCode: string;
  siteId: string;
  state: string;
  status?: 'Active' | 'Inactive';
  streetAddress: string;
  suite?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[sites]:Services[sitesLocationsCreate, sitesLocationsUpdate]
 */
export interface SiteLocationMeta {
  city: string;
  description?: string;
  isPrimary?: boolean;
  name?: string;
  postalCode: string;
  state: string;
  status?: 'Active' | 'Inactive';
  streetAddress: string;
  suite?: string;
}

/**
 *
 * Used in Module[studies]:Services[studiesAuditlogDetail]
 * Used in Objects[StudyLogHistory]
 */
export interface StudyAuditLog {
  msg?: string;
  reason?: string;
  reasonnote?: string;
  status?: string;
  title?: string;
  type?:
    | 'State Change'
    | 'Data Change'
    | 'SignOff Change'
    | 'Certification Change'
    | 'Init Data Change'
    | 'Protocol Change'
    | 'Workflow Change'
    | 'Process Change'
    | 'Study Change'
    | 'Organization Change'
    | 'Site Change'
    | 'CarePlan Change'
    | 'Patient status change'
    | 'Patient no-PCP status change'
    | 'Patient profile change'
    | 'Patient provider added'
    | 'Patient provider updated'
    | 'Patient provider deleted'
    | 'Lead status change'
    | 'Recruiter assigned'
    | 'Advocate assigned'
    | 'Message sent'
    | 'Message received'
    | 'Advocate payout event'
    | 'Page Viewed'
    | 'Page Understood'
    | 'Page Queries'
    | 'Signature Added'
    | 'Task Comment'
    | 'Delete Node'
    | 'Amend Change'
    | ''
    | 'PasswordChange'
    | 'Study Create'
    | 'Study Update'
    | 'Study Config Generate'
    | 'Study Gen Details Update'
    | 'Study IE Update'
    | 'Study Protocol Add'
    | 'Study Duty Plan Add'
    | 'Study Config Gen Err'
    | 'Study Duty Plan Update'
    | 'FormV2 create'
    | 'FormV2 update'
    | 'QuestionV2 create'
    | 'QuestionV2 update'
    | 'QuestionV2 patch'
    | 'BranchV2 create'
    | 'BranchV2 update'
    | 'Action create'
    | 'Action update'
    | 'Statement create'
    | 'Statement update'
    | 'Variable create'
    | 'Variable delete'
    | 'Form instance create'
    | 'Form instance save'
    | 'Form instance revert'
    | 'Form instance reset'
    | 'Graph node action'
    | 'ActivityV2 create'
    | 'ActivityV2 update'
    | 'Table create'
    | 'Table update'
    | 'VisitV2 create'
    | 'VisitV2 update'
    | 'WorkflowV2 create'
    | 'WorkflowV2 update'
    | 'WorkflowV2 add trigger'
    | 'WorkflowV2 remove trigger'
    | 'Training create'
    | 'Training update'
    | 'ControlV2 create'
    | 'ControlV2 update'
    | 'Task create'
    | 'Task update'
    | 'Task delete'
    | 'TodoV2 create'
    | 'TodoV2 update'
    | 'TodoV2 delete'
    | 'DocOverlayV2 create'
    | 'DocOverlayV2 update'
    | 'DocOverlayV2 delete'
    | 'DocumentReview create'
    | 'DocumentReview update'
    | 'DocumentReview delete'
    | 'DocumentUpload create'
    | 'DocumentUpload update'
    | 'DocumentUpload delete'
    | 'Trigger create'
    | 'Trigger update'
    | 'Trigger delete'
    | 'Snellen chart create'
    | 'Snellen chart update'
    | 'Snellen chart delete'
    | 'Media create'
    | 'Media update'
    | 'Bcva Test update'
    | 'Refraction data update';
  when?: string;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[studies]:Services[studiesAuditlogDetail]
 */
export interface StudyLogHistory {
  auditlog?: StudyAuditLog[];
  count?: number;
}

/**
 *
 * Used in Module[studies]:Services[studiesDetail, studiesSitesDetail]
 * Used in Objects[StudyDetails]
 */
export interface ReportSummary {
  createdat?: string;
  draftinprogress?: boolean;
  draftnumfilters?: number;
  draftnumpatients?: number;
  lastdraftevaluated?: string;
  lastdraftrunscheduledat?: string;
  lastevaluated?: string;
  lastrunscheduledat?: string;
  lastupdatedby?: string;
  name?: string;
  numfilters?: number;
  numpatients?: number;
  numstudies?: number;
  savedupdatedat?: string;
  tildaid?: string;
  updatedat?: string;
}

/**
 *
 * Service Root object
 * Module[studies]:Services[studiesCreate]
 */
export interface StudyCfg {
  archivecriteria?: StudyCriterion[];
  blindingTerm?: 'mask_and_unmask' | 'blind_and_unblind';
  category?: string;
  createdat?: number;
  crioid?: string;
  /** dbkey:"croId" */
  croId?: string;
  defscreenerid?: string;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  documentids?: string[];
  draft?: boolean;
  exclusioncriteria?: StudyCriterion[];
  holdbitmap?: number;
  inclusioncriteria?: StudyCriterion[];
  isBlinded?: boolean;
  isCfgGen?: boolean;
  isv2screener?: boolean;
  label?: string;
  maxRecruits?: number;
  /** dbkey:"name" */
  name?: string;
  orgid?: string;
  phase?: string;
  protocolnumber?: string;
  protocolversion?: string;
  reportids?: string[];
  screeneroptional?: boolean;
  skipscheduling?: boolean;
  skipsiteselection?: boolean;
  /** dbkey:"sponsor" */
  sponsor?: string;
  sponsorid?: string;
  srcorgid?: string;
  status?:
    | 'startup'
    | 'enrolling'
    | 'paused'
    | 'closed'
    | 'ongoing'
    | 'draft'
    | 'maintenance';
  targetRegion?: string;
  tildaid?: string;
  token?: string;
  updatedat?: number;
  userid?: string;
}

/**
 *
 * Service Root object
 * Module[studies]:Services[studiesGenerateCreate]
 */
export interface StudyCfgGen {
  documentids?: string[];
}

/**
 *
 * Service Root object
 * Module[studies]:Services[studiesDetail, studiesSitesDetail]
 */
export interface StudyDetails {
  archivecriteria?: StudyCriterion[];
  blindingTerm?: 'mask_and_unmask' | 'blind_and_unblind';
  createdat?: string;
  defscreenerid?: string;
  description?: string;
  draftlastevaluated?: string;
  draftnumpatients?: number;
  draftrunscheduledat?: string;
  exclusioncriteria?: StudyCriterion[];
  inclusioncriteria?: StudyCriterion[];
  inherited?: boolean;
  isBlinded?: boolean;
  isv2screener?: boolean;
  lastevaluated?: string;
  name?: string;
  numapproved?: number;
  numparticipants?: number;
  numpatients?: number;
  numpending?: number;
  numrejected?: number;
  protocolnumber?: string;
  protocolversion?: string;
  reports?: ReportSummary[];
  runscheduledat?: string;
  screeneroptional?: boolean;
  skipscheduling?: boolean;
  skipsiteselection?: boolean;
  sponsor?: string;
  sponsorid?: string;
  status?: string;
  tildaid?: string;
  updatedat?: string;
  userroles?: string[];
}

/**
 *
 * Used in Module[studies]:Services[studiesList]
 * Used in Objects[StudySummaryResponse]
 */
export interface StudySummary {
  blindingTerm?: 'mask_and_unmask' | 'blind_and_unblind';
  createdat?: string;
  defscreenerid?: string;
  description?: string;
  draftlastevaluated?: string;
  draftnumpatients?: number;
  draftrunscheduledat?: string;
  isBlinded?: boolean;
  isv2screener?: boolean;
  lastevaluated?: string;
  name?: string;
  numapproved?: number;
  numparticipants?: number;
  numpatients?: number;
  numpending?: number;
  numrejected?: number;
  protocolnumber?: string;
  protocolversion?: string;
  runscheduledat?: string;
  screeneroptional?: boolean;
  skipscheduling?: boolean;
  skipsiteselection?: boolean;
  sponsor?: string;
  sponsorid?: string;
  status?: string;
  tildaid?: string;
  updatedat?: string;
  userroles?: string[];
}

/**
 *
 * Service Root object
 * Module[studies]:Services[studiesList]
 */
export interface StudySummaryResponse {
  count?: number;
  result?: StudySummary[];
}

/**
 *
 * Used in Module[studies]:Services[studiesCreate, studiesDetail, studiesSitesDetail]
 * Used in Objects[StudyCfg, StudyDetails]
 */
export interface StudyCriterion {
  archived?: boolean;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  inclusion?: boolean;
  position?: number;
  studyid?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActionCreate, studioGraphActionCreate, studioGraphActionUpdate]
 */
export interface ActionCfg {
  extid?: string;
  lhsvariableid: string;
  name: string;
  rhsexpressions: string[];
  rhsoperators?: string[];
  type: 'edit' | 'archive' | 'duplicate-type';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActionDetail, studioGraphActionDetail]
 */
export interface ActionResponse {
  extid?: string;
  lhsvariableid: string;
  name: string;
  rhsexpressions: string[];
  rhsoperators?: string[];
  tildaid?: string;
  type: 'edit' | 'archive' | 'duplicate-type';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActivitiesCreate]
 */
export interface ActivityCreateCfg {
  activityType?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  notes?: string;
  performer?: string;
  performerCapabilities?: string;
  protocolid?: string;
  selector?: 'documents' | 'events' | 'partnerType';
  title?: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActivitiesDetail]
 */
export interface ActivityDetail {
  activityType?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  count: number;
  createdat: string;
  description: string;
  draft?: ActivitySummaryInfo;
  graphnodes: GraphNodeDetail[];
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  metadata?: GraphMetaData;
  name: string;
  notes?: string;
  objtype: string;
  performer?: string;
  performerCapabilities?: string;
  scopeid?: string;
  selector?: 'documents' | 'events' | 'partnerType';
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActivitiesSummaryDetail]
 * Used in Objects[ListActivityResponse]
 */
export interface ActivitySummary {
  activityType?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  createdat: string;
  description: string;
  draft?: ActivitySummaryInfo;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  notes?: string;
  objtype: string;
  performer?: string;
  performerCapabilities?: string;
  scopeid?: string;
  selector?: 'documents' | 'events' | 'partnerType';
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Used in Module[studio]:Services[studioActivitiesDetail, studioActivitiesSummaryDetail]
 * Used in Objects[ActivityDetail, ActivitySummary]
 */
export interface ActivitySummaryInfo {
  activityType?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  createdat: string;
  description: string;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  notes?: string;
  objtype: string;
  performer?: string;
  performerCapabilities?: string;
  scopeid?: string;
  selector?: 'documents' | 'events' | 'partnerType';
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActivitiesPartialUpdate]
 */
export interface ActivityUpdateCfg {
  action?: 'edit' | 'publish' | 'duplicate' | 'archive';
  activityType?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  notes?: string;
  performer?: string;
  performerCapabilities?: string;
  protocolid?: string;
  selector?: 'documents' | 'events' | 'partnerType';
  title?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioAllowedObjListList]
 */
export interface AllowedObjList {
  allowedobjtypes?: string[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioBcvaEyeTestUpdate]
 */
export interface BCVAEyeTestCfg {
  description?: string;
  eyecfgs?: BCVAEyeConfig[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioBcvaEyeTestDetail]
 */
export interface BCVAEyeTestInfo {
  createdat?: string;
  description?: string;
  eyecfgs?: BCVAEyeConfig[];
  tildaid?: string;
}

/**
 *
 * Used in Module[studio]:Services[studioGraphBranchCreate, studioGraphBranchUpdate]
 * Used in Objects[BranchCreateUpdateCfg]
 */
export interface BranchConditionGroupCfg {
  conditions: BranchCondition[];
  matchall: boolean;
}

/**
 *
 * Used in Module[studio]:Services[studioGraphBranchDetail]
 * Used in Objects[BranchResponse]
 */
export interface BranchConditionGroupInfo {
  conditions: BranchConditionInfo[];
  matchall: boolean;
}

/**
 *
 * Used in Module[studio]:Services[studioGraphBranchDetail]
 * Used in Objects[BranchConditionGroupInfo]
 */
export interface BranchConditionInfo {
  activity?: FormBasicInfo;
  choices?: string[];
  datatype: 'STRING' | 'FLOAT' | 'BOOLEAN';
  matchall: boolean;
  operator: string;
  protocolVersion?: FormBasicInfo;
  question?: string;
  questionid?: string;
  questionnaire?: FormBasicInfo;
  questiontype?:
    | 'textbox'
    | 'radio'
    | 'checkbox'
    | 'dropdown'
    | 'yesno'
    | 'checkone';
  responsesetchoices?: string[];
  subgraph?: string[];
  table?: FormBasicInfo;
  textformat:
    | 'none'
    | 'short text'
    | 'multiline'
    | 'date'
    | 'number'
    | 'email'
    | 'datetime'
    | 'time'
    | 'string'
    | 'integer'
    | 'float'
    | 'boolean';
  tildaid: string;
  variableid: string;
  vartype: 'QUESTION' | 'USER DEFINED' | 'SYSTEM DEFINED';
  visit?: FormBasicInfo;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioGraphBranchCreate, studioGraphBranchUpdate]
 */
export interface BranchCreateUpdateCfg {
  conditiongroupsall: BranchConditionGroupCfg[];
  conditiongroupsany: BranchConditionGroupCfg[];
  extid?: string;
  name: string;
  protocolid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioGraphBranchDetail]
 */
export interface BranchResponse {
  conditiongroupsall: BranchConditionGroupInfo[];
  conditiongroupsany: BranchConditionGroupInfo[];
  name: string;
  tildaid: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioControlsCreate]
 */
export interface ControlCreateCfg {
  category?: 'Regulatory';
  controlTags?: string;
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  protocolid?: string;
  /** TBD: remove this attribute, not used */
  scope?: string;
  selector?: 'documents' | 'DoA log' | 'Form_1572' | 'events' | 'duties added';
  subcategory?: 'PI Oversight';
  title?: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioControlsDetail]
 */
export interface ControlDetail {
  category?: 'Regulatory';
  controlTags?: string;
  count: number;
  createdat: string;
  description: string;
  draft?: ControlSummaryInfo;
  graphnodes: GraphNodeDetail[];
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  metadata?: GraphMetaData;
  name: string;
  objtype: string;
  /** TBD: remove this attribute, not used */
  scope?: string;
  scopeid?: string;
  selector?: 'documents' | 'DoA log' | 'Form_1572' | 'events' | 'duties added';
  state: 'draft' | 'published' | 'archived';
  subcategory?: 'PI Oversight';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioControlsSummaryDetail]
 * Used in Objects[ListControlResponse]
 */
export interface ControlSummary {
  category?: 'Regulatory';
  controlTags?: string;
  createdat: string;
  description: string;
  draft?: ControlSummaryInfo;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  /** TBD: remove this attribute, not used */
  scope?: string;
  scopeid?: string;
  selector?: 'documents' | 'DoA log' | 'Form_1572' | 'events' | 'duties added';
  state: 'draft' | 'published' | 'archived';
  subcategory?: 'PI Oversight';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Used in Module[studio]:Services[studioControlsDetail, studioControlsSummaryDetail]
 * Used in Objects[ControlDetail, ControlSummary]
 */
export interface ControlSummaryInfo {
  category?: 'Regulatory';
  controlTags?: string;
  createdat: string;
  description: string;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  /** TBD: remove this attribute, not used */
  scope?: string;
  scopeid?: string;
  selector?: 'documents' | 'DoA log' | 'Form_1572' | 'events' | 'duties added';
  state: 'draft' | 'published' | 'archived';
  subcategory?: 'PI Oversight';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioControlsPartialUpdate]
 */
export interface ControlUpdateCfg {
  action?: 'edit' | 'publish' | 'duplicate' | 'archive';
  category?: 'Regulatory';
  controlTags?: string;
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  protocolid?: string;
  /** TBD: remove this attribute, not used */
  scope?: string;
  selector?: 'documents' | 'DoA log' | 'Form_1572' | 'events' | 'duties added';
  subcategory?: 'PI Oversight';
  title?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDocoverlaysCreate, studioDocoverlaysUpdate, studioDocreviewsCreate, studioDocreviewsUpdate]
 */
export interface DocOverlayCreateUpdateCfg {
  description?: string;
  docId?: string;
  name?: string;
  optional?: boolean;
  orgid?: string;
  reviewType?: 'None' | 'Whole document' | 'Page-by-page' | 'Review only';
  scopeid?: string;
  tag?: string;
  title?: string;
  type?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDocoverlaysPartialUpdate, studioDocreviewsPartialUpdate]
 */
export interface DocOverlayPatchCfg {
  action: 'archive' | 'duplicate';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDocoverlaysDetail, studioDocreviewsDetail]
 * Used in Objects[ListDocOverlaysResponse]
 */
export interface DocOverlaySummaryInfo {
  createdat: string;
  description?: string;
  docId?: string;
  inherited: boolean;
  inuse: boolean;
  name?: string;
  optional?: boolean;
  orgid?: string;
  reviewType?: 'None' | 'Whole document' | 'Page-by-page' | 'Review only';
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  tag?: string;
  tildaid: string;
  title?: string;
  type?: string;
  updatedat: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDocuploadsCreate, studioDocuploadsUpdate]
 */
export interface DocUploadCreateUpdateCfg {
  description?: string;
  docType?: string;
  name?: string;
  orgid?: string;
  scopeid?: string;
  tag?: string;
  title?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDocuploadsPartialUpdate]
 */
export interface DocUploadPatchCfg {
  action: 'archive' | 'duplicate';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDocuploadsDetail]
 * Used in Objects[ListDocUploadsResponse]
 */
export interface DocUploadSummaryInfo {
  createdat: string;
  description?: string;
  docType?: string;
  inherited: boolean;
  inuse: boolean;
  name?: string;
  orgid?: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  tag?: string;
  tildaid: string;
  title?: string;
  updatedat: string;
}

/**
 *
 * Used in Module[studio]:Services[studioDataMappingObjTypesFieldsDetail]
 * Used in Objects[ListDataMappingFieldsResponse]
 */
export interface FieldResponse {
  dataType: string;
  field: string;
  format: string;
}

/**
 *
 * Used in Module[studio]:Services[studioGraphVariablesDetail]
 * Used in Objects[BranchConditionInfo, ListVariablesResponse]
 */
export interface FormBasicInfo {
  name: string;
  scopeid?: string;
  tildaid: string;
  title: string;
  type?: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormsCreate]
 */
export interface FormCreateCfg {
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  protocolid?: string;
  title?: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActivitiesCreate, studioControlsCreate, studioFormsCreate, studioMediasCreate, studioTablesCreate]
 */
export interface FormCreateResponse {
  state?: 'draft' | 'published' | 'archived';
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormsDetail, studioFormsExportCreate]
 */
export interface FormDetail {
  count: number;
  createdat: string;
  description: string;
  draft?: FormSummaryInfo;
  graphnodes: GraphNodeDetail[];
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  metadata?: GraphMetaData;
  name: string;
  objtype: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Used in Module[studio]:Services[studioFormInstanceSaveCreate, publicStudioFormInstanceSaveCreate]
 * Used in Objects[FormInstanceSaveCfg]
 */
export interface FormInstanceAnswer {
  choices?: string[];
  variableid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormInstanceCreate, publicStudioFormInstanceCreate]
 */
export interface FormInstanceCfg {
  formid?: string;
  isPublic?: boolean;
  leadid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormInstanceEligibilityDetail, publicStudioFormInstanceEligibilityDetail]
 */
export interface FormInstanceEligibilityResponse {
  completed?: boolean;
  eligible?: boolean;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormInstanceMappedDataDetail]
 */
export interface FormInstanceMappedDataResponse {
  answers?: string[];
  dataname?: string;
  objtype?: string;
}

/**
 *
 * Used in Module[studio]:Services[studioFormInstanceBackCreate, studioFormInstanceCreate, studioFormInstanceCurrContextDetail, studioFormInstanceEditCreate, studioFormInstanceResponsesDetail, studioFormInstanceSaveCreate, publicStudioFormInstanceBackCreate, publicStudioFormInstanceCreate, publicStudioFormInstanceSaveCreate]
 * Used in Objects[FormInstanceResponse]
 */
export interface FormInstanceNode {
  actioncypher?: string;
  answered?: boolean;
  answers?: string[];
  choicemax?: number;
  choicemin?: number;
  choices?: string[];
  objtype?:
    | 'WorkflowV2'
    | 'ActivityV2'
    | 'Action'
    | 'BranchV2'
    | 'CheckList'
    | 'GraphNodeRef'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'MediaSet'
    | 'Media'
    | 'ResponseSet'
    | 'ScreenerV2'
    | 'Statement'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'Training'
    | 'TodoV2'
    | 'ProtocolVersionV2'
    | 'SnellenChart'
    | 'ControlV2'
    | 'BCVAEyeTest'
    | 'RefractionDataCfg';
  optional?: boolean;
  othertext?: boolean;
  question?: string;
  questionid?:
    | 'textbox'
    | 'radio'
    | 'checkbox'
    | 'dropdown'
    | 'yesno'
    | 'checkone';
  questionnairenumber?: number;
  questionnumber?: number;
  questiontype?: string;
  responsesetid?: string;
  statementid?: string;
  statementtitle?: string;
  textformat?: string;
  variableid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormInstanceBackCreate, studioFormInstanceCreate, studioFormInstanceCurrContextDetail, studioFormInstanceEditCreate, studioFormInstanceResponsesDetail, studioFormInstanceSaveCreate, publicStudioFormInstanceBackCreate, publicStudioFormInstanceCreate, publicStudioFormInstanceSaveCreate]
 */
export interface FormInstanceResponse {
  contextid?: string;
  done?: boolean;
  firstcontext?: boolean;
  formid?: string;
  nodes?: FormInstanceNode[];
  questionnairedesc?: string;
  questionnairenumber?: number;
  questionnairetitle?: string;
  tildaid?: string;
  title?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormInstanceSaveCreate, publicStudioFormInstanceSaveCreate]
 */
export interface FormInstanceSaveCfg {
  answers?: FormInstanceAnswer[];
  contextid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormsSummaryDetail]
 * Used in Objects[ListFormResponse]
 */
export interface FormSummary {
  createdat: string;
  description: string;
  draft?: FormSummaryInfo;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Used in Module[studio]:Services[studioFormsDetail, studioFormsExportCreate, studioFormsSummaryDetail, studioProtocolsVisitsDetail]
 * Used in Objects[FormDetail, FormSummary, ListProtocolVisitResponse]
 */
export interface FormSummaryInfo {
  createdat: string;
  description: string;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormsPartialUpdate]
 */
export interface FormUpdateCfg {
  action?: 'edit' | 'publish' | 'duplicate' | 'archive';
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  protocolid?: string;
  title?: string;
}

/**
 *
 * Used in Module[studio]:Services[studioActivitiesDetail, studioControlsDetail, studioFormsDetail, studioFormsExportCreate, studioGraphDetail, studioMediasDetail, studioTablesDetail, studioTrainingsDetail, studioProtocolsVisitsDetail2, studioWorkflowsDetail]
 * Used in Objects[ActivityDetail, ControlDetail, FormDetail, ListGraphNodeResponse, MediaDetail, TableDetail, TrainingDetail, VisitDetail, WorkflowDetail]
 */
export interface GraphMetaData {
  postvisitid?: string;
  previsitid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioGraphNodeActionCreate]
 */
export interface GraphNodeActionResponse {
  objid?: string;
  objtype?:
    | 'WorkflowV2'
    | 'ActivityV2'
    | 'Action'
    | 'BranchV2'
    | 'CheckList'
    | 'GraphNodeRef'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'MediaSet'
    | 'Media'
    | 'ResponseSet'
    | 'ScreenerV2'
    | 'Statement'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'Training'
    | 'TodoV2'
    | 'ProtocolVersionV2'
    | 'SnellenChart'
    | 'ControlV2'
    | 'BCVAEyeTest'
    | 'RefractionDataCfg';
  refobjtype?:
    | 'WorkflowV2'
    | 'ActivityV2'
    | 'Action'
    | 'BranchV2'
    | 'CheckList'
    | 'GraphNodeRef'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'MediaSet'
    | 'Media'
    | 'ResponseSet'
    | 'ScreenerV2'
    | 'Statement'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'Training'
    | 'TodoV2'
    | 'ProtocolVersionV2'
    | 'SnellenChart'
    | 'ControlV2'
    | 'BCVAEyeTest'
    | 'RefractionDataCfg';
  tildaid?: string;
}

/**
 *
 * Used in Module[studio]:Services[studioActivitiesDetail, studioControlsDetail, studioFormsDetail, studioFormsExportCreate, studioGraphDetail, studioMediasDetail, studioTablesDetail, studioTrainingsDetail, studioProtocolsVisitsDetail2, studioWorkflowsDetail]
 * Used in Objects[ActivityDetail, ControlDetail, FormDetail, ListGraphNodeResponse, MediaDetail, TableDetail, TrainingDetail, VisitDetail, WorkflowDetail]
 */
export interface GraphNodeDetail {
  branchid: string;
  branchtrue: boolean;
  edcEnabled: boolean;
  obj: object;
  objid: string;
  objtype:
    | 'WorkflowV2'
    | 'ActivityV2'
    | 'Action'
    | 'BranchV2'
    | 'CheckList'
    | 'GraphNodeRef'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'MediaSet'
    | 'Media'
    | 'ResponseSet'
    | 'ScreenerV2'
    | 'Statement'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'Training'
    | 'TodoV2'
    | 'ProtocolVersionV2'
    | 'SnellenChart'
    | 'ControlV2'
    | 'BCVAEyeTest'
    | 'RefractionDataCfg';
  optional: boolean;
  previd: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActivitiesList]
 */
export interface ListActivityResponse {
  activities: ActivitySummary[];
  archivedcount: number;
  count: number;
  draftcount: number;
  publishedcount: number;
  totalcount: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioControlsList]
 */
export interface ListControlResponse {
  archivedcount: number;
  controls: ControlSummary[];
  count: number;
  draftcount: number;
  publishedcount: number;
  totalcount: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDataMappingObjTypesDataNamesDetail]
 */
export interface ListDataMappingDataNamesResponse {
  datanames: string[];
  objtype: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDataMappingObjTypesFieldsDetail]
 */
export interface ListDataMappingFieldsResponse {
  fields: FieldResponse[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDataMappingObjTypesList]
 */
export interface ListDataMappingObjTypesResponse {
  objtypes?: string[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDocoverlaysList, studioDocreviewsList]
 */
export interface ListDocOverlaysResponse {
  count: number;
  docoverlays: DocOverlaySummaryInfo[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioDocuploadsList]
 */
export interface ListDocUploadsResponse {
  count: number;
  docuploads: DocUploadSummaryInfo[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioFormsList]
 */
export interface ListFormResponse {
  archivedcount: number;
  count: number;
  draftcount: number;
  forms: FormSummary[];
  publishedcount: number;
  totalcount: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioGraphDetail]
 */
export interface ListGraphNodeResponse {
  count: number;
  graphnodes: GraphNodeDetail[];
  metadata?: GraphMetaData;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioMediasList]
 */
export interface ListMediaResponse {
  archivedcount: number;
  count: number;
  draftcount: number;
  medias: MediaSummary[];
  publishedcount: number;
  totalcount: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioProtocolsVisitsDetail]
 */
export interface ListProtocolVisitResponse {
  count?: number;
  visits?: FormSummaryInfo[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioQuestionsList]
 */
export interface ListQuestionsResponse {
  count: number;
  questions: QuestionSummary[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioQuestionsResponseSetsDetail]
 */
export interface ListResponseSets {
  count: number;
  responsesets: ResponseSetInfo[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioSnellenChartsList]
 */
export interface ListSnellenChartsResponse {
  charts?: SnellenChartSummary[];
  count?: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioStatementsList]
 */
export interface ListStatementsResponse {
  count: number;
  statements: StatementSummary[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTablesList]
 */
export interface ListTableResponse {
  archivedcount: number;
  count: number;
  draftcount: number;
  publishedcount: number;
  tables: TableSummary[];
  totalcount: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTasksList]
 */
export interface ListTasksResponse {
  count: number;
  tasks: TaskSummaryInfo[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTodosList]
 */
export interface ListTodosResponse {
  count: number;
  todos: TodoSummaryInfo[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTrainingsList]
 */
export interface ListTrainingResponse {
  archivedcount: number;
  count: number;
  draftcount: number;
  publishedcount: number;
  totalcount: number;
  trainings: TrainingSummary[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTriggersList, studioWorkflowsTriggersDetail]
 */
export interface ListTriggerResponse {
  count: number;
  triggers: TriggerSummary[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioGraphVariablesDetail]
 */
export interface ListVariablesResponse {
  childForms?: FormBasicInfo[];
  count: number;
  variables: VariableSummary[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioWorkflowsList]
 */
export interface ListWorkflowResponse {
  archivedcount: number;
  count: number;
  draftcount: number;
  publishedcount: number;
  totalcount: number;
  workflows: WorkflowSummary[];
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioMediasCreate]
 */
export interface MediaCreateCfg {
  autoplay?: boolean;
  description?: string;
  endTime?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  mute?: boolean;
  name: string;
  protocolid?: string;
  showPlayerControls?: boolean;
  startTime?: string;
  title?: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  url?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioMediasDetail]
 */
export interface MediaDetail {
  autoplay?: boolean;
  count: number;
  createdat: string;
  description: string;
  draft?: MediaSummaryInfo;
  endTime?: string;
  graphnodes: GraphNodeDetail[];
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  metadata?: GraphMetaData;
  mute?: boolean;
  name: string;
  objtype: string;
  scopeid?: string;
  showPlayerControls?: boolean;
  startTime?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  url?: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioMediasSummaryDetail]
 * Used in Objects[ListMediaResponse]
 */
export interface MediaSummary {
  autoplay?: boolean;
  createdat: string;
  description: string;
  draft?: MediaSummaryInfo;
  endTime?: string;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  mute?: boolean;
  name: string;
  objtype: string;
  scopeid?: string;
  showPlayerControls?: boolean;
  startTime?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  url?: string;
  version: number;
}

/**
 *
 * Used in Module[studio]:Services[studioMediasDetail, studioMediasSummaryDetail]
 * Used in Objects[MediaDetail, MediaSummary]
 */
export interface MediaSummaryInfo {
  autoplay?: boolean;
  createdat: string;
  description: string;
  endTime?: string;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  mute?: boolean;
  name: string;
  objtype: string;
  scopeid?: string;
  showPlayerControls?: boolean;
  startTime?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  url?: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioMediasPartialUpdate]
 */
export interface MediaUpdateCfg {
  action?: 'edit' | 'publish' | 'duplicate' | 'archive';
  autoplay?: boolean;
  description?: string;
  endTime?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  mute?: boolean;
  name?: string;
  protocolid?: string;
  showPlayerControls?: boolean;
  startTime?: string;
  title?: string;
  url?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioQuestionsCreate, studioQuestionsUpdate]
 */
export interface QuestionCreateUpdateCfg {
  specs: QuestionSpecCfg[];
  srcquestionid?: string;
  title: string;
  type: 'textbox' | 'radio' | 'checkbox' | 'dropdown' | 'yesno' | 'checkone';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioQuestionsCreate, studioQuestionsDetail, studioQuestionsPartialUpdate, studioQuestionsUpdate]
 */
export interface QuestionDetailedResponse {
  createdat: string;
  inherited: boolean;
  inuse: boolean;
  objtype: string;
  specs: QuestionSpecCfg[];
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type: 'textbox' | 'radio' | 'checkbox' | 'dropdown' | 'yesno' | 'checkone';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioQuestionsPartialUpdate]
 */
export interface QuestionPatchCfg {
  action?: 'archive' | 'duplicate';
  title?: string;
}

/**
 *
 * Used in Module[studio]:Services[studioQuestionsCreate, studioQuestionsUpdate, studioQuestionsCreate, studioQuestionsDetail, studioQuestionsPartialUpdate, studioQuestionsUpdate]
 * Used in Objects[QuestionCreateUpdateCfg, QuestionDetailedResponse]
 */
export interface QuestionSpecCfg {
  choicemax?: number;
  choicemin?: number;
  hdmclass?: string;
  hdmfield?: string;
  hdmfieldtype?: string;
  name?: string;
  othertext?: boolean;
  responsesetid?: string;
  responsesets?: ResponseSetInfo[];
  specid?: string;
  textformat?:
    | 'none'
    | 'short text'
    | 'multiline'
    | 'date'
    | 'number'
    | 'email'
    | 'datetime'
    | 'time'
    | 'string'
    | 'integer'
    | 'float'
    | 'boolean';
  variableid?: string;
  variablename?: string;
}

/**
 *
 * Used in Module[studio]:Services[studioQuestionsList]
 * Used in Objects[ListQuestionsResponse]
 */
export interface QuestionSummary {
  createdat: string;
  inherited: boolean;
  inuse: boolean;
  objtype: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type: 'textbox' | 'radio' | 'checkbox' | 'dropdown' | 'yesno' | 'checkone';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioBcvaRefractionDataUpdate]
 */
export interface RefractionData {
  description?: string;
  refractioncurr?: 'Optional' | 'Mandatory' | 'Disabled';
  refractionprev?: 'Optional' | 'Mandatory' | 'Disabled';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioBcvaRefractionDataDetail]
 */
export interface RefractionDataInfo {
  createdat?: string;
  description?: string;
  refractioncurr?: 'Optional' | 'Mandatory' | 'Disabled';
  refractionprev?: 'Optional' | 'Mandatory' | 'Disabled';
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioResponseSetsDetail]
 */
export interface ResponseSetDetailInfo {
  choices: string[];
  createdat: string;
  inuse: boolean;
  name: string;
  questionid: string;
  tildaid: string;
  title: string;
  type: string;
  updatedat: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioQuestionsResponseSetsCreate, studioResponseSetsUpdate]
 * Used in Objects[ListResponseSets, QuestionSpecCfg]
 */
export interface ResponseSetInfo {
  choices: string[];
  createdat: string;
  inuse: boolean;
  name: string;
  objtype: string;
  origid?: string;
  tildaid: string;
  updatedat: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioSnellenChartsUpdate]
 */
export interface SnellenChartCfg {
  chart?: string[];
  name?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioSnellenChartsDetail]
 * Used in Objects[ListSnellenChartsResponse]
 */
export interface SnellenChartSummary {
  chart?: string[];
  createdat?: string;
  inherited?: boolean;
  inuse?: boolean;
  name?: string;
  tildaid?: string;
  updatedat?: string;
  version?: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioStatementsCreate]
 */
export interface StatementCfg {
  extid?: string;
  title: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioStatementsPartialUpdate]
 */
export interface StatementPatchCfg {
  action?: 'archive' | 'duplicate';
  description?: string;
  title?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioStatementsDetail]
 * Used in Objects[ListStatementsResponse]
 */
export interface StatementSummary {
  createdat: string;
  description: string;
  inherited: boolean;
  inuse: boolean;
  objtype: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  updatedat: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTablesCreate]
 */
export interface TableCreateCfg {
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  protocolid?: string;
  tag?:
    | 'Medication'
    | 'OcularMedication'
    | 'NonOcularMedication'
    | 'Allergy'
    | 'MedicalCondition'
    | 'OcularMedicalCondition'
    | 'NonOcularMedicalCondition'
    | 'Procedure'
    | 'NonOcularProcedure'
    | 'AdverseEvent'
    | 'ProtocolDeviation';
  title?: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTablesDetail]
 */
export interface TableDetail {
  count: number;
  createdat: string;
  description: string;
  draft?: TableSummaryInfo;
  graphnodes: GraphNodeDetail[];
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  metadata?: GraphMetaData;
  name: string;
  objtype: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  tag?:
    | 'Medication'
    | 'OcularMedication'
    | 'NonOcularMedication'
    | 'Allergy'
    | 'MedicalCondition'
    | 'OcularMedicalCondition'
    | 'NonOcularMedicalCondition'
    | 'Procedure'
    | 'NonOcularProcedure'
    | 'AdverseEvent'
    | 'ProtocolDeviation';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTablesSummaryDetail]
 * Used in Objects[ListTableResponse]
 */
export interface TableSummary {
  createdat: string;
  description: string;
  draft?: TableSummaryInfo;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  tag?:
    | 'Medication'
    | 'OcularMedication'
    | 'NonOcularMedication'
    | 'Allergy'
    | 'MedicalCondition'
    | 'OcularMedicalCondition'
    | 'NonOcularMedicalCondition'
    | 'Procedure'
    | 'NonOcularProcedure'
    | 'AdverseEvent'
    | 'ProtocolDeviation';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Used in Module[studio]:Services[studioTablesDetail, studioTablesSummaryDetail]
 * Used in Objects[TableDetail, TableSummary]
 */
export interface TableSummaryInfo {
  createdat: string;
  description: string;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  tag?:
    | 'Medication'
    | 'OcularMedication'
    | 'NonOcularMedication'
    | 'Allergy'
    | 'MedicalCondition'
    | 'OcularMedicalCondition'
    | 'NonOcularMedicalCondition'
    | 'Procedure'
    | 'NonOcularProcedure'
    | 'AdverseEvent'
    | 'ProtocolDeviation';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTablesPartialUpdate]
 */
export interface TableUpdateCfg {
  action?: 'edit' | 'publish' | 'duplicate' | 'archive';
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  protocolid?: string;
  tag?:
    | 'Medication'
    | 'OcularMedication'
    | 'NonOcularMedication'
    | 'Allergy'
    | 'MedicalCondition'
    | 'OcularMedicalCondition'
    | 'NonOcularMedicalCondition'
    | 'Procedure'
    | 'NonOcularProcedure'
    | 'AdverseEvent'
    | 'ProtocolDeviation';
  title?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTasksCreate, studioTasksUpdate]
 */
export interface TaskCreateUpdateCfg {
  activeAfter?: string;
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  description?: string;
  dueBy?: string;
  name?: string;
  notify?: string;
  notifyType?: string;
  priority?: 'Risk' | 'High' | 'Medium' | 'Low' | 'None';
  repeat?: string;
  repeatEnd?: string;
  repeatTimes?: string;
  taskType?: string;
  title: string;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTasksPartialUpdate]
 */
export interface TaskPatchCfg {
  action: 'archive' | 'duplicate';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTasksDetail]
 * Used in Objects[ListTasksResponse]
 */
export interface TaskSummaryInfo {
  activeAfter?: string;
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  createdat: string;
  description?: string;
  dueBy?: string;
  inherited: boolean;
  inuse: boolean;
  name?: string;
  notify?: string;
  notifyType?: string;
  priority?: 'Risk' | 'High' | 'Medium' | 'Low' | 'None';
  repeat?: string;
  repeatEnd?: string;
  repeatTimes?: string;
  state: 'draft' | 'published' | 'archived';
  taskType?: string;
  tildaid: string;
  title: string;
  updatedat: string;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTodosCreate]
 */
export interface TodoCreateCfg {
  title: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTodosDetail]
 * Used in Objects[ListTodosResponse]
 */
export interface TodoSummaryInfo {
  createdat: string;
  inherited: boolean;
  inuse: boolean;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  updatedat: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTodosPartialUpdate]
 */
export interface TodoUpdateCfg {
  action?: 'archive' | 'duplicate';
  title: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTrainingsCreate]
 */
export interface TrainingCreateCfg {
  description?: string;
  enableTimeConstraint?: boolean;
  enableTrainer?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  protocolid?: string;
  roles?: string[];
  successCriteria?: string;
  successCriteriaUnit?: string;
  timeConstraint?: string;
  timeConstraintMessage?: string;
  timeConstraintUnit?: string;
  title?: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  validFor?: number;
  validityUnit?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTrainingsDetail]
 */
export interface TrainingDetail {
  count: number;
  createdat: string;
  description: string;
  draft?: TrainingSummaryInfo;
  enableTimeConstraint?: boolean;
  enableTrainer?: boolean;
  graphnodes: GraphNodeDetail[];
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  metadata?: GraphMetaData;
  name: string;
  objtype: string;
  roles?: string[];
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  successCriteria?: string;
  successCriteriaUnit?: string;
  tildaid: string;
  timeConstraint?: string;
  timeConstraintMessage?: string;
  timeConstraintUnit?: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  validFor?: number;
  validityUnit?: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTrainingsSummaryDetail]
 * Used in Objects[ListTrainingResponse]
 */
export interface TrainingSummary {
  createdat: string;
  description: string;
  draft?: TrainingSummaryInfo;
  enableTimeConstraint?: boolean;
  enableTrainer?: boolean;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  roles?: string[];
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  successCriteria?: string;
  successCriteriaUnit?: string;
  tildaid: string;
  timeConstraint?: string;
  timeConstraintMessage?: string;
  timeConstraintUnit?: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  validFor?: number;
  validityUnit?: string;
  version: number;
}

/**
 *
 * Used in Module[studio]:Services[studioTrainingsDetail, studioTrainingsSummaryDetail]
 * Used in Objects[TrainingDetail, TrainingSummary]
 */
export interface TrainingSummaryInfo {
  createdat: string;
  description: string;
  enableTimeConstraint?: boolean;
  enableTrainer?: boolean;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  roles?: string[];
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  successCriteria?: string;
  successCriteriaUnit?: string;
  tildaid: string;
  timeConstraint?: string;
  timeConstraintMessage?: string;
  timeConstraintUnit?: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  validFor?: number;
  validityUnit?: string;
  version: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTrainingsPartialUpdate]
 */
export interface TrainingUpdateCfg {
  action?: 'edit' | 'publish' | 'duplicate' | 'archive';
  description?: string;
  enableTimeConstraint?: boolean;
  enableTrainer?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  protocolid?: string;
  roles?: string[];
  successCriteria?: string;
  successCriteriaUnit?: string;
  timeConstraint?: string;
  timeConstraintMessage?: string;
  timeConstraintUnit?: string;
  title?: string;
  validFor?: number;
  validityUnit?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTriggersCreate]
 */
export interface TriggerCreateCfg {
  operation: string;
  performedBy: string[];
  scope: string;
  title: string;
  type: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTriggersDetail]
 */
export interface TriggerDetail {
  createdat: string;
  inherited: boolean;
  inuse: boolean;
  operation?: string;
  performedBy?: string[];
  scope?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title?: string;
  type?: string;
  updatedat: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTriggersSummaryDetail]
 * Used in Objects[ListTriggerResponse]
 */
export interface TriggerSummary {
  createdat: string;
  inherited: boolean;
  inuse: boolean;
  operation?: string;
  performedBy?: string[];
  scope?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title?: string;
  type?: string;
  updatedat: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioTriggersPartialUpdate]
 */
export interface TriggerUpdateCfg {
  operation?: string;
  performedBy?: string[];
  scope?: string;
  title?: string;
  type?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioGraphVariableCreate]
 */
export interface VariableCfg {
  activityid?: string;
  datatype: 'STRING' | 'FLOAT' | 'BOOLEAN';
  default?: string;
  hdmclass?: string;
  hdmfield?: string;
  name: string;
  questionnaireid?: string;
  visitid?: string;
}

/**
 *
 * Used in Module[studio]:Services[studioGraphVariablesDetail]
 * Used in Objects[ListVariablesResponse]
 */
export interface VariableSummary {
  choices: string[];
  datatype: 'STRING' | 'FLOAT' | 'BOOLEAN';
  default?: string;
  hdmclass?: string;
  hdmfield?: string;
  name: string;
  questionnaireid?: string;
  questionnairetitle?: string;
  questiontype:
    | 'textbox'
    | 'radio'
    | 'checkbox'
    | 'dropdown'
    | 'yesno'
    | 'checkone';
  textformat:
    | 'none'
    | 'short text'
    | 'multiline'
    | 'date'
    | 'number'
    | 'email'
    | 'datetime'
    | 'time'
    | 'string'
    | 'integer'
    | 'float'
    | 'boolean';
  tildaid: string;
  title: string;
  vartype: 'QUESTION' | 'USER DEFINED' | 'SYSTEM DEFINED';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioProtocolsVisitsCreate]
 */
export interface VisitCreateCfg {
  description?: string;
  durationInMins?: number;
  interval?: string;
  isAnchorVisit?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  notes?: string;
  numOfDaysFromAnchor?: number;
  /** "8:00-12:00,13:00-15:00" */
  preferredTime?: string;
  protocolid?: string;
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  title?: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  who?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioProtocolsVisitsCreate]
 */
export interface VisitCreateResponse {
  postVisitId?: string;
  preVisitId?: string;
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioProtocolsVisitsDetail2]
 */
export interface VisitDetail {
  count: number;
  createdat: string;
  description: string;
  draft?: VisitSummaryInfo;
  durationInMins?: number;
  graphnodes: GraphNodeDetail[];
  inherited: boolean;
  interval?: string;
  inuse: boolean;
  isAnchorVisit?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  metadata?: GraphMetaData;
  name: string;
  notes?: string;
  numOfDaysFromAnchor?: number;
  objtype: string;
  postVisitId?: string;
  preVisitId?: string;
  /** "8:00-12:00,13:00-15:00" */
  preferredTime?: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioProtocolsVisitsSummaryDetail]
 */
export interface VisitSummary {
  createdat: string;
  description: string;
  draft?: VisitSummaryInfo;
  durationInMins?: number;
  inherited: boolean;
  interval?: string;
  inuse: boolean;
  isAnchorVisit?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  notes?: string;
  numOfDaysFromAnchor?: number;
  objtype: string;
  postVisitId?: string;
  preVisitId?: string;
  /** "8:00-12:00,13:00-15:00" */
  preferredTime?: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
  who?: string;
}

/**
 *
 * Used in Module[studio]:Services[studioProtocolsVisitsDetail2, studioProtocolsVisitsSummaryDetail]
 * Used in Objects[VisitDetail, VisitSummary]
 */
export interface VisitSummaryInfo {
  createdat: string;
  description: string;
  durationInMins?: number;
  inherited: boolean;
  interval?: string;
  inuse: boolean;
  isAnchorVisit?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  notes?: string;
  numOfDaysFromAnchor?: number;
  objtype: string;
  postVisitId?: string;
  preVisitId?: string;
  /** "8:00-12:00,13:00-15:00" */
  preferredTime?: string;
  scopeid?: string;
  state: 'draft' | 'published' | 'archived';
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioProtocolsVisitsPartialUpdate]
 */
export interface VisitUpdateCfg {
  action?: 'edit' | 'publish' | 'duplicate' | 'archive';
  description?: string;
  durationInMins?: number;
  interval?: string;
  isAnchorVisit?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  notes?: string;
  numOfDaysFromAnchor?: number;
  /** "8:00-12:00,13:00-15:00" */
  preferredTime?: string;
  protocolid?: string;
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  title?: string;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioWorkflowsCreate]
 */
export interface WorkflowCreateCfg {
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  operation?: 'Post' | 'Delete' | 'Put';
  performerCapabilities?: string;
  protocolid?: string;
  scope?: '@enum-replace-workflow-scope';
  /** TBD: remove this attribute, not used */
  selector?: string;
  title?: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  workflowType?: 'training' | 'none';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioWorkflowsDetail]
 */
export interface WorkflowDetail {
  count: number;
  createdat: string;
  description: string;
  draft?: WorkflowSummaryInfo;
  graphnodes: GraphNodeDetail[];
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  metadata?: GraphMetaData;
  name: string;
  objtype: string;
  operation?: 'Post' | 'Delete' | 'Put';
  performerCapabilities?: string;
  scope?: '@enum-replace-workflow-scope';
  scopeid?: string;
  /** TBD: remove this attribute, not used */
  selector?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
  workflowType?: 'training' | 'none';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioWorkflowsSummaryDetail]
 * Used in Objects[ListWorkflowResponse]
 */
export interface WorkflowSummary {
  createdat: string;
  description: string;
  draft?: WorkflowSummaryInfo;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  operation?: 'Post' | 'Delete' | 'Put';
  performerCapabilities?: string;
  scope?: '@enum-replace-workflow-scope';
  scopeid?: string;
  /** TBD: remove this attribute, not used */
  selector?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
  workflowType?: 'training' | 'none';
}

/**
 *
 * Used in Module[studio]:Services[studioWorkflowsDetail, studioWorkflowsSummaryDetail]
 * Used in Objects[WorkflowDetail, WorkflowSummary]
 */
export interface WorkflowSummaryInfo {
  createdat: string;
  description: string;
  inherited: boolean;
  inuse: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name: string;
  objtype: string;
  operation?: 'Post' | 'Delete' | 'Put';
  performerCapabilities?: string;
  scope?: '@enum-replace-workflow-scope';
  scopeid?: string;
  /** TBD: remove this attribute, not used */
  selector?: string;
  state: 'draft' | 'published' | 'archived';
  tildaid: string;
  title: string;
  type:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat: string;
  version: number;
  workflowType?: 'training' | 'none';
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioWorkflowsPartialUpdate]
 */
export interface WorkflowUpdateCfg {
  action?: 'edit' | 'publish' | 'duplicate' | 'archive';
  description?: string;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  operation?: 'Post' | 'Delete' | 'Put';
  performerCapabilities?: string;
  protocolid?: string;
  scope?: '@enum-replace-workflow-scope';
  /** TBD: remove this attribute, not used */
  selector?: string;
  title?: string;
  workflowType?: 'training' | 'none';
}

/**
 *
 * Used in Module[studio]:Services[studioBcvaEyeTestUpdate, studioBcvaEyeTestDetail]
 * Used in Objects[BCVAEyeTestCfg, BCVAEyeTestInfo]
 */
export interface BCVAEyeConfig {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  isrighteye?: boolean;
  test1distance?: number;
  test1name?: string;
  test1passscore?: number;
  test1snellenchartid?: string;
  test2distance?: number;
  test2name?: string;
  test2passscore?: number;
  test2snellenchartid?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[studio]:Services[studioGraphBranchCreate, studioGraphBranchUpdate]
 * Used in Objects[BranchConditionGroupCfg]
 */
export interface BranchCondition {
  activityid: string;
  choices: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  docReviewId: string;
  documentSetId: string;
  extid?: string;
  holdbitmap?: number;
  matchall: boolean;
  operator: string;
  protocolVersionId: string;
  questionnaireid: string;
  subgraph?: string[];
  tableid: string;
  tildaid?: string;
  updatedat?: number;
  variableid: string;
  visitid: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioGraphNodeActionCreate]
 */
export interface GraphNodeActionCfg {
  action?:
    | 'add'
    | 'del'
    | 'move'
    | 'replace'
    | 'set optional'
    | 'add bulk'
    | 'set edc enabled';
  branchid?: string;
  branchtrue?: boolean;
  bulkobjids?: string[];
  edcEnabled?: boolean;
  objid?: string;
  objtype?:
    | 'WorkflowV2'
    | 'ActivityV2'
    | 'Action'
    | 'BranchV2'
    | 'CheckList'
    | 'GraphNodeRef'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'MediaSet'
    | 'Media'
    | 'ResponseSet'
    | 'ScreenerV2'
    | 'Statement'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'Training'
    | 'TodoV2'
    | 'ProtocolVersionV2'
    | 'SnellenChart'
    | 'ControlV2'
    | 'BCVAEyeTest'
    | 'RefractionDataCfg';
  optional?: boolean;
  parentmap?: Record<string, string>;
  previd?: string;
  protocolid?: string;
  replaceid?: string;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioSnellenChartsCreate]
 */
export interface SnellenChart {
  chart?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  name?: string;
  orgid?: string;
  tildaid?: string;
  updatedat?: number;
  version?: number;
}

/**
 *
 * Service Root object
 * Module[studio]:Services[studioActionCreate, studioActivitiesPartialUpdate, studioBcvaEyeTestUpdate, studioBcvaRefractionDataUpdate, studioControlsPartialUpdate, studioDocoverlaysCreate, studioDocoverlaysPartialUpdate, studioDocoverlaysUpdate, studioDocreviewsCreate, studioDocreviewsPartialUpdate, studioDocreviewsUpdate, studioDocuploadsCreate, studioDocuploadsPartialUpdate, studioDocuploadsUpdate, studioFormsPartialUpdate, studioGraphActionCreate, studioGraphActionUpdate, studioGraphBranchCreate, studioGraphBranchUpdate, studioGraphVariableCreate, studioMediasPartialUpdate, studioProtocolsVisitsPartialUpdate, studioQuestionsResponseSetsCreate, studioResponseSetsUpdate, studioSnellenChartsCreate, studioSnellenChartsUpdate, studioStatementsCreate, studioStatementsPartialUpdate, studioTablesPartialUpdate, studioTasksCreate, studioTasksPartialUpdate, studioTasksUpdate, studioTodosCreate, studioTodosPartialUpdate, studioTrainingsCreate, studioTrainingsPartialUpdate, studioTriggersCreate, studioTriggersPartialUpdate, studioWorkflowsCreate, studioWorkflowsPartialUpdate, studioWorkflowsTriggersCreate]
 */
export interface TildaIdResponse {
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[tasks]:Services[tasksBulkUpdate]
 */
export interface TaskBulkPutPayload {
  tasks?: TaskPutPayload[];
}

/**
 *
 * Used in Module[tasks]:Services[tasksStatsList]
 * Used in Objects[TaskStats]
 */
export interface TaskCategoryCount {
  category?: string;
  count?: number;
}

/**
 *
 * Used in Module[tasks]:Services[taskfiltersList]
 * Used in Objects[TaskFilterOp]
 */
export interface TaskFilterInfo {
  name?: string;
  value?: string;
}

/**
 *
 * Service Root object
 * Module[tasks]:Services[taskfiltersList]
 */
export interface TaskFilterOp {
  categories?: TaskFilterInfo[];
  createdby?: TaskFilterInfo[];
  priorities?: TaskFilterInfo[];
  sites?: TaskFilterInfo[];
  states?: TaskFilterInfo[];
  studies?: TaskFilterInfo[];
  subjects?: TaskFilterInfo[];
  visits?: TaskFilterInfo[];
}

/**
 *
 * Used in Module[tasks]:Services[tasksStatsList]
 * Used in Objects[TaskStats]
 */
export interface TaskPriorityCount {
  count?: number;
  priority?: string;
}

/**
 *
 * Service Root object
 * Module[tasks]:Services[tasksUpdate]
 * Used in Objects[TaskBulkPutPayload]
 */
export interface TaskPutPayload {
  active_after?: string;
  assigned_user_id?: string[];
  assignment?: 'manual' | 'automatic';
  blob?: string;
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  /** assignee who completed(eSigned/rejected) the document task */
  closedBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  due_before?: string;
  holdbitmap?: number;
  note?: string;
  priority?: number;
  /** Resource associated with task */
  relationshipContext?: string;
  state?: 'ready' | 'completed' | 'not applicable';
  tildaid?: string;
  title?: string;
  /**
   * Relation: -[TaskToInboxEdgeLabel]->(Inbox)
   * Relation: -[TaskToContextEdgeLabel]->(Context)
   * Relation: -[TaskCreatedFromSpec]->(ParticipantDslSpecNode)
   */
  ufid?: number;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[tasks]:Services[tasksStatsList]
 */
export interface TaskStats {
  categoryCounts?: TaskCategoryCount[];
  priorityCounts?: TaskPriorityCount[];
  readyCount?: number;
}

/**
 *
 * Service Root object
 * Module[tasks]:Services[tasksAssignmentList]
 */
export interface UserWithRole {
  altEmails?: string;
  bio?: string;
  capabilities?: string;
  /** deprecate this? */
  contact?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  /** empty or unique */
  email: string;
  firstName: string;
  gcalSyncToken?: string;
  holdbitmap?: number;
  isBlinded?: boolean;
  lastLogin?: string;
  lastName: string;
  location?: string;
  name?: string;
  onboarded?: boolean;
  passwordSet?: boolean;
  /** empty or unique */
  phoneNumber: string;
  profilePicURL?: string;
  role?: ('staff' | 'site_admin')[];
  status: 'Invited' | 'Active' | 'Deleted';
  tildaid?: string;
  timezone?: string;
  ufid?: number;
  updatedat?: number;
  userType?: string;
  username?: string;
}

/**
 *
 * Service Root object
 * Module[tasks]:Services[tasksList]
 */
export interface TaskDetails {
  tasks?: OutputTask[];
  totalTasks?: number;
}

/**
 *
 * Service Root object
 * Module[tasks]:Services[tasksChangelogsDetail]
 * Module[fin]:Services[v1FinBudgetReportsAuditLogsDetail, v1FinBudgetsAuditLogsDetail]
 * Used in Objects[DocAnnotationVal, AnnotationUpdate, ChangeWithESign, QueryDetails, OPActivitySummary, OPPActivitySummary, OutputActivity, OutputActivityDetails, OutputActivityDetailsV2, OutputActivitySummary, OutputActivityV2, OutputDocOverlayDetails, OutputQuestionDetails, OutputQuestionDetailsV2, OutputSpecNode, ParticipantDocOverlayDetails, ParticipantQuestionWithSpec, OutputPFormSummary, PatientAuditLogResponse, ActivitySidePanelProgressNote, CarePlanProgressNote, CpDetails, OutputAdverseEvent, OutputAdverseEventV2, OutputQuery, OutputSidePanelChangeLog, OutputVisitSummary, OutputVisitSummaryV2, Row, VisitSidePanelProgressNote, OutputCarePlan, SignOffProgressList]
 */
export interface ChangeLog {
  blob?: string;
  /** to differentiate change logs from doc logs etc at global level */
  category?: string;
  /** tildaid of the user */
  changedBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  email?: string;
  holdbitmap?: number;
  newValue?: string;
  oldValue?: string;
  operation?: string;
  reason?: string;
  role?: string;
  scopeID?: string;
  /** This is only applicable to data type changeLog */
  scopeIndex?: number;
  tildaid?: string;
  time?: string;
  type?:
    | 'State Change'
    | 'Data Change'
    | 'SignOff Change'
    | 'Certification Change'
    | 'Init Data Change'
    | 'Protocol Change'
    | 'Workflow Change'
    | 'Process Change'
    | 'Study Change'
    | 'Organization Change'
    | 'Site Change'
    | 'CarePlan Change'
    | 'Patient status change'
    | 'Patient no-PCP status change'
    | 'Patient profile change'
    | 'Patient provider added'
    | 'Patient provider updated'
    | 'Patient provider deleted'
    | 'Lead status change'
    | 'Recruiter assigned'
    | 'Advocate assigned'
    | 'Message sent'
    | 'Message received'
    | 'Advocate payout event'
    | 'Page Viewed'
    | 'Page Understood'
    | 'Page Queries'
    | 'Signature Added'
    | 'Task Comment'
    | 'Delete Node'
    | 'Amend Change'
    | ''
    | 'PasswordChange'
    | 'Study Create'
    | 'Study Update'
    | 'Study Config Generate'
    | 'Study Gen Details Update'
    | 'Study IE Update'
    | 'Study Protocol Add'
    | 'Study Duty Plan Add'
    | 'Study Config Gen Err'
    | 'Study Duty Plan Update'
    | 'FormV2 create'
    | 'FormV2 update'
    | 'QuestionV2 create'
    | 'QuestionV2 update'
    | 'QuestionV2 patch'
    | 'BranchV2 create'
    | 'BranchV2 update'
    | 'Action create'
    | 'Action update'
    | 'Statement create'
    | 'Statement update'
    | 'Variable create'
    | 'Variable delete'
    | 'Form instance create'
    | 'Form instance save'
    | 'Form instance revert'
    | 'Form instance reset'
    | 'Graph node action'
    | 'ActivityV2 create'
    | 'ActivityV2 update'
    | 'Table create'
    | 'Table update'
    | 'VisitV2 create'
    | 'VisitV2 update'
    | 'WorkflowV2 create'
    | 'WorkflowV2 update'
    | 'WorkflowV2 add trigger'
    | 'WorkflowV2 remove trigger'
    | 'Training create'
    | 'Training update'
    | 'ControlV2 create'
    | 'ControlV2 update'
    | 'Task create'
    | 'Task update'
    | 'Task delete'
    | 'TodoV2 create'
    | 'TodoV2 update'
    | 'TodoV2 delete'
    | 'DocOverlayV2 create'
    | 'DocOverlayV2 update'
    | 'DocOverlayV2 delete'
    | 'DocumentReview create'
    | 'DocumentReview update'
    | 'DocumentReview delete'
    | 'DocumentUpload create'
    | 'DocumentUpload update'
    | 'DocumentUpload delete'
    | 'Trigger create'
    | 'Trigger update'
    | 'Trigger delete'
    | 'Snellen chart create'
    | 'Snellen chart update'
    | 'Snellen chart delete'
    | 'Media create'
    | 'Media update'
    | 'Bcva Test update'
    | 'Refraction data update';
  updatedat?: number;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanPdCreate, trialexecCareplanPdUpdate, trialexecCareplanVisitPdCreate, trialexecCareplanVisitPdUpdate]
 * Used in Objects[CpDiscontinuationDetails, OutputPDType]
 */
export interface ChangeLogObjChangeLogChangeType {
  description?: string;
  newValue?: string;
  oldValue?: string;
  reason?: string;
  time?: number;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitActivitySendLinkCreate]
 */
export interface CommunicationInfoPayload {
  activityId?: string;
  adverseEventId?: string;
  conMedId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  email?: string;
  hdmClassId?: string;
  holdbitmap?: number;
  lastSent?: string;
  link?: string;
  medHistId?: string;
  mobilephone?: string;
  /** "remote"|"other_device"|"on-site". */
  mode?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  tildaid?: string;
  updatedat?: number;
  urlPrefix?: string;
  useEmail?: boolean;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2CareplanVisitActivityTableDelete]
 */
export interface DeleteTable {
  activityId?: string;
  adverseEventId?: string;
  conMedId?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecProtocolCrfDetail, trialexecProtocolStudyprotocolDetail, trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OPStudyProtocol, OPVisitActivityGraph, StudyProtocol, VisitActivityGraph, VisitActivityGraphV2]
 */
export interface Graph {
  id?: string;
  label?: string;
  source?: string;
  target?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2CareplanVisitActivityAllQuestionsCreate, trialexecV2CareplanVisitActivityEditCompleteCreate, trialexecV2CareplanVisitActivityEditStartCreate, trialexecV2StudyProtocolVisitActivityAllQuestionsCreate]
 * Used in Objects[OPActivityDetails, OutputActivityDetails, OutputActivityDetailsV2]
 */
export interface MaintainCounts {
  docOverlayCount?: number;
  documents?: OutputDocument[];
  flagCount?: number;
  incompleteMandatoryQuestionCount?: number;
  incompleteQuestionCount?: number;
  isTaskPath?: boolean;
  queryCount?: number;
  questionCount?: number;
  updateCount?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail]
 * Used in Objects[OPAdverseEventDetails, OPVisitActivityGraph]
 */
export interface OPActivityDetails {
  activity?: OPActivity;
  clog?: OPChangeLog;
  docOverlayDetails?: OPDocOverlayDetails[];
  documentSetDetails?: OPDocumentSetDetails[];
  mCount?: MaintainCounts;
  notes?: ProgressNote[];
  participantActivity?: OPParticipantActivity;
  questionnaireDetails?: OPQuestionnaireDetails[];
  result?: boolean;
  tasks?: OPTask[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPVisitSummary]
 */
export interface OPActivitySummary {
  CompletedBy?: string;
  activityId?: string;
  clog?: ChangeLog[];
  description?: string;
  documentSetDetails?: OPDocumentSetDetails[];
  documents?: OutputDocument[];
  flagCount?: number;
  incompleteMandatoryQuestionCount?: number;
  incompleteQuestionCount?: number;
  name?: string;
  notes?: string;
  objectDetails?: ObjectDetails[];
  pActivityId?: string;
  pre?: string;
  queryCount?: number;
  questionCount?: number;
  /** this captures incomplete mandatory question and there queries */
  questionnaireDetails?: OPQuestionnaireDetails[];
  reason?: string;
  status?: string;
  summary?: string;
  timeSpent?: string;
  title?: string;
  type?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  updateCount?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPActivityDetails, OPDocOverlayDetails, OPQuestionDetails, OPSpecNodeDetails, OPSpecNodeWithChangeLog, OPVisitSummary]
 */
export interface OPChangeLog {
  blob?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  newValue?: string;
  oldValue?: string;
  reason?: string;
  tildaid?: string;
  time?: string;
  type?:
    | 'State Change'
    | 'Data Change'
    | 'SignOff Change'
    | 'Certification Change'
    | 'Init Data Change'
    | 'Protocol Change'
    | 'Workflow Change'
    | 'Process Change'
    | 'Study Change'
    | 'Organization Change'
    | 'Site Change'
    | 'CarePlan Change'
    | 'Patient status change'
    | 'Patient no-PCP status change'
    | 'Patient profile change'
    | 'Patient provider added'
    | 'Patient provider updated'
    | 'Patient provider deleted'
    | 'Lead status change'
    | 'Recruiter assigned'
    | 'Advocate assigned'
    | 'Message sent'
    | 'Message received'
    | 'Advocate payout event'
    | 'Page Viewed'
    | 'Page Understood'
    | 'Page Queries'
    | 'Signature Added'
    | 'Task Comment'
    | 'Delete Node'
    | 'Amend Change'
    | ''
    | 'PasswordChange'
    | 'Study Create'
    | 'Study Update'
    | 'Study Config Generate'
    | 'Study Gen Details Update'
    | 'Study IE Update'
    | 'Study Protocol Add'
    | 'Study Duty Plan Add'
    | 'Study Config Gen Err'
    | 'Study Duty Plan Update'
    | 'FormV2 create'
    | 'FormV2 update'
    | 'QuestionV2 create'
    | 'QuestionV2 update'
    | 'QuestionV2 patch'
    | 'BranchV2 create'
    | 'BranchV2 update'
    | 'Action create'
    | 'Action update'
    | 'Statement create'
    | 'Statement update'
    | 'Variable create'
    | 'Variable delete'
    | 'Form instance create'
    | 'Form instance save'
    | 'Form instance revert'
    | 'Form instance reset'
    | 'Graph node action'
    | 'ActivityV2 create'
    | 'ActivityV2 update'
    | 'Table create'
    | 'Table update'
    | 'VisitV2 create'
    | 'VisitV2 update'
    | 'WorkflowV2 create'
    | 'WorkflowV2 update'
    | 'WorkflowV2 add trigger'
    | 'WorkflowV2 remove trigger'
    | 'Training create'
    | 'Training update'
    | 'ControlV2 create'
    | 'ControlV2 update'
    | 'Task create'
    | 'Task update'
    | 'Task delete'
    | 'TodoV2 create'
    | 'TodoV2 update'
    | 'TodoV2 delete'
    | 'DocOverlayV2 create'
    | 'DocOverlayV2 update'
    | 'DocOverlayV2 delete'
    | 'DocumentReview create'
    | 'DocumentReview update'
    | 'DocumentReview delete'
    | 'DocumentUpload create'
    | 'DocumentUpload update'
    | 'DocumentUpload delete'
    | 'Trigger create'
    | 'Trigger update'
    | 'Trigger delete'
    | 'Snellen chart create'
    | 'Snellen chart update'
    | 'Snellen chart delete'
    | 'Media create'
    | 'Media update'
    | 'Bcva Test update'
    | 'Refraction data update';
  updatedat?: number;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDocOverlayDetails]
 */
export interface OPDocOverlay {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  optional?: boolean;
  tildaid?: string;
  updatedat?: number;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPActivityDetails, OPDocumentSetDetails]
 */
export interface OPDocOverlayDetails {
  docOverlay?: OPDocOverlay;
  documents?: OutputDocument[];
  participantDocOverlay?: ParticipantDocOverlay;
  queries?: OPUserWithQuery[];
  signOffChangeLog?: OPChangeLog[];
  specNodeDetails?: OPSpecNodeWithChangeLog[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap]
 */
export interface OPDocOverlayDetailsV2 {
  currentPage?: string;
  docOverlay?: OPDocOverlayV2;
  documents?: OutputDocument[];
  participantDocOverlay?: ParticipantDocOverlay;
  variables?: OutputVariable[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OPDocOverlayDetailsV2]
 */
export interface OPDocOverlayV2 {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  docId?: string;
  edcEnabled?: boolean;
  holdbitmap?: number;
  name?: string;
  optional?: boolean;
  orgid?: string;
  reviewType?: 'None' | 'Whole document' | 'Page-by-page' | 'Review only';
  scopeid?: string;
  tag?: string;
  tildaid?: string;
  title?: string;
  type?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputDocUploadDetailsV2]
 */
export interface OPDocUploadV2 {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  docType?: string;
  edcEnabled?: boolean;
  holdbitmap?: number;
  name?: string;
  orgid?: string;
  scopeid?: string;
  tag?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDocumentSetDetails]
 */
export interface OPDocumentSet {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPActivityDetails, OPActivitySummary]
 */
export interface OPDocumentSetDetails {
  docOverlayDetails?: OPDocOverlayDetails[];
  documentSet?: OPDocumentSet;
  participantDocumentSet?: OPParticipantDocumentSet;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputDocumentSetDetailsV2]
 */
export interface OPDocumentSetV2 {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDslTaskWithSpecs]
 */
export interface OPDslTask {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDslTaskSpec]
 */
export interface OPDslTaskSpecNode {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[OutputActivitySummaryV2]
 */
export interface OPPActivitySummary {
  activityId?: string;
  branchLevel?: number;
  carePlanId?: string;
  clog?: ChangeLog[];
  completedBy?: string;
  createdat?: number;
  currentNode?: string;
  currentPage?: string[];
  currentPath?: string[];
  delpending?: boolean;
  deltimestamp?: number;
  documents?: OutputDocument[];
  editPage?: string[];
  editPath?: string[];
  editStatus?:
    | 'Init'
    | 'Executable'
    | 'InProgress'
    | 'PatientInProgress'
    | 'Skipped'
    | 'Completed'
    | 'Paused'
    | 'Removed'
    | 'InProgressOfflineMode'
    | 'CompletedOffline';
  flagCount?: number;
  holdbitmap?: number;
  incompleteMandatoryQuestionCount?: number;
  incompleteQuestionCount?: number;
  migrated?: boolean;
  nodeId?: string;
  pre?: string;
  protocolId?: string;
  queryCount?: number;
  questionCount?: number;
  reason?: string;
  status?:
    | 'Init'
    | 'Executable'
    | 'InProgress'
    | 'PatientInProgress'
    | 'Skipped'
    | 'Completed'
    | 'Paused'
    | 'Removed'
    | 'InProgressOfflineMode'
    | 'CompletedOffline';
  summary?: string;
  tildaid?: string;
  timeSpent?: string;
  updateCount?: number;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail]
 * Used in Objects[OPActivityDetails]
 */
export interface OPParticipantActivity {
  carePlanId?: string;
  completedBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  incompleteMandatoryQuestionCount?: number;
  incompleteQuestionCount?: number;
  questionCount?: number;
  status?:
    | 'Init'
    | 'Executable'
    | 'InProgress'
    | 'PatientInProgress'
    | 'Skipped'
    | 'Completed'
    | 'Paused'
    | 'Removed'
    | 'InProgressOfflineMode'
    | 'CompletedOffline';
  summary?: string;
  tildaid?: string;
  timeSpent?: string;
  updateCount?: number;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDocumentSetDetails]
 */
export interface OPParticipantDocumentSet {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  documentSetId?: string;
  holdbitmap?: number;
  status?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDslTaskSpec]
 */
export interface OPParticipantDslSpecNode {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDslTaskWithSpecs]
 */
export interface OPParticipantDslTask {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPPrePostVisit]
 */
export interface OPParticipantPrePostVisit {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPQuestionDetails]
 */
export interface OPParticipantQuestion {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  questionId?: string;
  status?:
    | 'Init'
    | 'Skipped'
    | 'Incomplete'
    | 'Incomplete Mandatory'
    | 'Completed'
    | 'Draft';
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPQuestionnaireDetails]
 */
export interface OPParticipantQuestionnaire {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  questionnaireId?: string;
  status?: 'Init' | 'Skipped' | 'Completed';
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPSpecNodeDetails, OPSpecNodeWithChangeLog]
 */
export interface OPParticipantSpecNode {
  carePlanId?: string;
  changeLogCount?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  hdmClassId?: string;
  hdmObjId?: string;
  holdbitmap?: number;
  lastChangeLogCount?: number;
  specNodeId?: string;
  status?: string;
  tildaid?: string;
  updatedat?: number;
  value?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPTodoWithSpecs]
 */
export interface OPParticipantTodo {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPTodoSpec]
 */
export interface OPParticipantTodoSpecNode {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  status?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPPrePostVisit, OPVisitActivityGraph, OPVisitSummary]
 */
export interface OPPrePostVisit {
  dslTasks?: OPDslTaskWithSpecs[];
  participantPrePostVisit?: OPParticipantPrePostVisit;
  prePostVisit?: OPPrePostVisit;
  todos?: OPTodoWithSpecs[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecCareplanVisitSummaryDetail, trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPUserWithQuery]
 */
export interface OPQuery {
  careplanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  /** MonitorFlag */
  externalFlag?: boolean;
  hdmClassId?: string;
  holdbitmap?: number;
  specNodes?: string;
  state?: 'Open' | 'Answer' | 'Resolve' | 'Verify' | 'Delete';
  tildaid?: string;
  updatedat?: number;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPQuestionDetails]
 */
export interface OPQuestion {
  branchLevel?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  edcEnabled?: boolean;
  holdbitmap?: number;
  nodeId?: string;
  post?: string;
  pre?: string;
  tildaid?: string;
  title?: string;
  type?: 'Question' | 'Document' | 'Table' | 'eSign' | 'Statement';
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPQuestionnaireDetails]
 */
export interface OPQuestionDetails {
  documents?: OutputDocument[];
  eSignatures?: OutputESignature[];
  flags?: OPUserWithFlag[];
  participantQuestion?: OPParticipantQuestion;
  queries?: OPUserWithQuery[];
  question?: OPQuestion;
  signOffChangeLog?: OPChangeLog[];
  specNodeDetails?: OPSpecNodeDetails[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputQuestionDetailsV2]
 */
export interface OPQuestionV2 {
  choicemax?: number;
  choicemin?: number;
  choices?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  edcEnabled?: boolean;
  hdmclass?: string;
  hdmfield?: string;
  holdbitmap?: number;
  othertext?: boolean;
  required?: boolean;
  textformat?:
    | 'none'
    | 'short text'
    | 'multiline'
    | 'date'
    | 'number'
    | 'email'
    | 'datetime'
    | 'time'
    | 'string'
    | 'integer'
    | 'float'
    | 'boolean';
  tildaid?: string;
  title?: string;
  type?: 'textbox' | 'radio' | 'checkbox' | 'dropdown' | 'yesno' | 'checkone';
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPActivityDetails, OPActivitySummary]
 */
export interface OPQuestionnaireDetails {
  objectDetails?: ObjectDetails[];
  participantQuestionnaire?: OPParticipantQuestionnaire;
  questionDetails?: OPQuestionDetails[];
  questionnaire?: OPQuestionnaire;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputQuestionnaireDetailsV2]
 */
export interface OPQuestionnaireV2 {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPSpecNodeDetails, OPSpecNodeWithChangeLog]
 */
export interface OPSpecNode {
  branchLevel?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  formelement?: string;
  hint?: string;
  holdbitmap?: number;
  name?: string;
  nodeId?: string;
  nodeformat?: string;
  options?: string;
  /** Points to Branch */
  post?: string;
  /** Points to ParentNode or a Branch */
  pre?: string;
  required?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
  validation?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPQuestionDetails]
 */
export interface OPSpecNodeDetails {
  changeLog?: OPChangeLog[];
  initChangeLog?: OPChangeLog[];
  participantSpecNode?: OPParticipantSpecNode;
  specNode?: OPSpecNode;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDocOverlayDetails]
 */
export interface OPSpecNodeWithChangeLog {
  changeLog?: OPChangeLog[];
  initChangeLog?: OPChangeLog[];
  participantSpecNode?: OPParticipantSpecNode;
  specNode?: OPSpecNode;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate]
 * Used in Objects[OutputTableDetailsV2]
 */
export interface OPTable {
  availableActions?: ('Save' | 'Complete')[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  tag?:
    | 'Medication'
    | 'OcularMedication'
    | 'NonOcularMedication'
    | 'Allergy'
    | 'MedicalCondition'
    | 'OcularMedicalCondition'
    | 'NonOcularMedicalCondition'
    | 'Procedure'
    | 'NonOcularProcedure'
    | 'AdverseEvent'
    | 'ProtocolDeviation';
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail]
 * Used in Objects[OPActivityDetails, OPDslTaskSpec]
 */
export interface OPTask {
  blob?: string;
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  due_before?: string;
  holdbitmap?: number;
  priority?: number;
  state?: 'ready' | 'completed' | 'not applicable';
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPTodoWithSpecs]
 */
export interface OPTodo {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPTodoWithSpecs]
 */
export interface OPTodoSpec {
  pSpecs?: OPParticipantTodoSpecNode;
  specs?: OPTodoSpecNode;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPTodoSpec]
 */
export interface OPTodoSpecNode {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPPrePostVisit]
 */
export interface OPTodoWithSpecs {
  participantTodo?: OPParticipantTodo;
  specs?: OPTodoSpec[];
  todo?: OPTodo;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPQuestionDetails]
 */
export interface OPUserWithFlag {
  flag?: EligibilityFlag;
  user?: OPUser;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecCareplanVisitSummaryDetail, trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDocOverlayDetails, OPQuestionDetails]
 */
export interface OPUserWithQuery {
  commentCount?: number;
  query?: OPQuery;
  user?: OPUser;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2CareplanVisitActivityAllQuestionsCreate, trialexecV2CareplanVisitActivityEditCompleteCreate, trialexecV2CareplanVisitActivityEditStartCreate, trialexecV2StudyProtocolVisitActivityAllQuestionsCreate, trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecCareplanVisitSummaryDetail, trialexecCareplanConMedsListRowsDetail, trialexecCareplanMedicalHistoryListRowsDetail]
 * Used in Objects[OPActivitySummary, OPQuestionnaireDetails, OutputActivityDetails, OutputActivityDetailsV2, OutputActivitySummary, OutputActivitySummaryV2, OutputDocumentSetDetails, OutputDocumentSetDetailsV2, OutputQuestionnaireDetails, OutputQuestionnaireDetailsV2, OutputTableDetailsV2, OPVisitSummary, TableOutput]
 */
export interface ObjectDetails {
  object?: object;
  type?:
    | 'VisitSummary'
    | 'VisitSummaryV2'
    | 'OutputTodoV2'
    | 'OutputTaskConfig'
    | 'OutputChecklistTask'
    | 'OutputActivityDetailsV2'
    | 'OutputActivityDetails'
    | 'Activity'
    | 'ActivityV2'
    | 'CheckList'
    | 'Question'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'Statement'
    | 'Questionnaire'
    | 'DocOverlay'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSet'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'Visit'
    | 'VisitV2';
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2CareplanVisitActivityAllQuestionsCreate, trialexecV2CareplanVisitActivityEditCompleteCreate, trialexecV2CareplanVisitActivityEditStartCreate, trialexecV2StudyProtocolVisitActivityAllQuestionsCreate, trialexecCareplanVisitSummaryDetail, trialexecCareplanPdCreate, trialexecCareplanPdUpdate, trialexecCareplanVisitPdCreate, trialexecCareplanVisitPdUpdate, trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[OutputDocument]
 */
export interface OpenDocumentType {
  typeid?: string;
  typekind?: string;
  typemandatoryFields?: string[];
  typename?: string;
  typescope?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityStartCreate, trialexecCareplanVisitActivityUnlockCreate, trialexecParticipantFormActivityRestartCreate, trialexecParticipantFormActivityStartCreate, publicTrialexecParticipantFormActivityStartCreate]
 */
export interface OutputActivity {
  activity?: Activity;
  clog?: ChangeLog[];
  documentCount?: number;
  participantActivity?: ParticipantActivity;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate]
 * Used in Objects[OutputHRRF, ObjectDetailsMap, OutputAdverseEvent, OutputConMed, OutputDelegateTask, OutputMedHist, OutputQueryTask]
 */
export interface OutputActivityDetails {
  activity?: Activity;
  availableActions?: (
    | 'ScreenFailed'
    | 'NotEligible'
    | 'ScreenPass'
    | 'Discontinued'
    | 'SwitchToOffline'
    | 'SwitchToOnline'
    | 'Save'
    | 'Complete'
  )[];
  availableEvents?: string[];
  clog?: ChangeLog[];
  docOverlayDetails?: OutputDocOverlayDetails[];
  documentCount?: number;
  /** QuestionDetails      []OutputQuestionDetails      `json:"questionDetails,omitempty"` */
  documentSetDetails?: OutputDocumentSetDetails[];
  documents?: OutputDocument[];
  mCount?: MaintainCounts;
  /** TODO: push this into objectDetails */
  notes?: ProgressNote[];
  objectDetails?: ObjectDetails[];
  participantActivity?: ParticipantActivity;
  questionnaireDetails?: OutputQuestionnaireDetails[];
  result?: boolean;
  /** TODO: push this into objectDetails */
  tasks?: Task[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2CareplanVisitActivityAllQuestionsCreate, trialexecV2CareplanVisitActivityEditCompleteCreate, trialexecV2CareplanVisitActivityEditStartCreate, trialexecV2StudyProtocolVisitActivityAllQuestionsCreate]
 * Used in Objects[OutputHRRFV2, OPProtocolActivity, ObjectDetailsMap, OutputAdverseEventV2, OutputConMed, OutputMedHist]
 */
export interface OutputActivityDetailsV2 {
  activity?: OPActivityV2;
  availableActions?: (
    | 'ScreenFailed'
    | 'NotEligible'
    | 'ScreenPass'
    | 'Discontinued'
    | 'SwitchToOffline'
    | 'SwitchToOnline'
    | 'Save'
    | 'Complete'
  )[];
  availableEvents?: string[];
  clog?: ChangeLog[];
  documents?: OutputDocument[];
  mCount?: MaintainCounts;
  /** TODO: push this into objectDetails */
  notes?: ProgressNote[];
  objectDetails?: ObjectDetails[];
  participantActivity?: ParticipantActivity;
  result?: boolean;
  /** TODO: push this into objectDetails */
  tasks?: Task[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecParticipantFormStudySubjectSummaryDetail, trialexecParticipantFormSummaryDetail, publicTrialexecParticipantFormSummaryDetail]
 * Used in Objects[OutputPFormSummary, AdverseEventSummary, OutputVisitSummary]
 */
export interface OutputActivitySummary {
  CompletedBy?: string;
  activityId?: string;
  clog?: ChangeLog[];
  description?: string;
  documentSetDetails?: OutputDocumentSetDetails[];
  documents?: OutputDocument[];
  flagCount?: number;
  incompleteMandatoryQuestionCount?: number;
  incompleteQuestionCount?: number;
  name?: string;
  notes?: string;
  objectDetails?: ObjectDetails[];
  pActivityId?: string;
  pre?: string;
  queryCount?: number;
  questionCount?: number;
  /** this captures incomplete mandatory question and there queries */
  questionnaireDetails?: OutputQuestionnaireDetails[];
  reason?: string;
  status?: string;
  summary?: string;
  timeSpent?: string;
  title?: string;
  type?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  updateCount?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[OutputVisitSummaryV2]
 */
export interface OutputActivitySummaryV2 {
  activity?: OPActivityV2;
  objectDetails?: ObjectDetails[];
  participantActivity?: OPPActivitySummary;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[VisitActivityGraph, VisitActivityGraphV2]
 */
export interface OutputActivityV2 {
  activity?: OPActivityV2;
  clog?: ChangeLog[];
  participantActivity?: ParticipantActivity;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputActivityDetails, OutputDocumentSetDetails, ObjectDetailsMap]
 */
export interface OutputDocOverlayDetails {
  docOverlay?: DocOverlay;
  documents?: OutputDocument[];
  participantDocOverlay?: ParticipantDocOverlay;
  queries?: UserWithQuery[];
  signOffChangeLog?: ChangeLog[];
  specNodeDetails?: OutputSpecNode[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap]
 */
export interface OutputDocUploadDetailsV2 {
  currentPage?: string;
  documents?: OutputDocument[];
  opDocUpload?: OPDocUploadV2;
  participantDocUpload?: ParticipantDocUpload;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2CareplanVisitActivityAllQuestionsCreate, trialexecV2CareplanVisitActivityEditCompleteCreate, trialexecV2CareplanVisitActivityEditStartCreate, trialexecV2StudyProtocolVisitActivityAllQuestionsCreate, trialexecCareplanVisitSummaryDetail, trialexecCareplanPdCreate, trialexecCareplanPdUpdate, trialexecCareplanVisitPdCreate, trialexecCareplanVisitPdUpdate, trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[MaintainCounts, OPActivitySummary, OPDocOverlayDetails, OPDocOverlayDetailsV2, OPPActivitySummary, OPQuestionDetails, OutputActivityDetails, OutputActivityDetailsV2, OutputActivitySummary, OutputDocOverlayDetails, OutputDocUploadDetailsV2, OutputQuestionDetails, OutputQuestionDetailsV2, ParticipantDocOverlayDetails, ParticipantQuestionWithSpec, OPVisitSummary, OutputPDType, OutputVisitSummary, OutputVisitSummaryV2]
 */
export interface OutputDocument {
  contentType?: string;
  docKind?: string;
  docType?: OpenDocumentType;
  fileName?: string;
  id?: string;
  pages?: number;
  size?: number;
  status?: string;
  tag?: string;
  uploadedAt?: number;
  uploadedBy?: string;
  versionGenerationId?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputActivityDetails, OutputActivitySummary, ObjectDetailsMap]
 */
export interface OutputDocumentSetDetails {
  docOverlayDetails?: OutputDocOverlayDetails[];
  documentSet?: DocumentSet;
  objectDetails?: ObjectDetails[];
  participantDocumentSet?: ParticipantDocumentSet;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap]
 */
export interface OutputDocumentSetDetailsV2 {
  documentSet?: OPDocumentSetV2;
  objectDetails?: ObjectDetails[];
  participantDocumentSet?: ParticipantDocumentSet;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanHrrfDetail]
 */
export interface OutputHRRF {
  activityId: string;
  outputActivityDetails: OutputActivityDetails;
  studyId?: string;
  visitId: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2CareplanHrrfDetail]
 */
export interface OutputHRRFV2 {
  activityId: string;
  outputActivityDetails: OutputActivityDetailsV2;
  studyId?: string;
  visitId: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputQuestionnaireDetails, ObjectDetailsMap]
 */
export interface OutputQuestionDetails {
  documents?: OutputDocument[];
  eSignatures?: OutputESignature[];
  flags?: UserWithFlag[];
  participantQuestion?: ParticipantQuestion;
  queries?: UserWithQuery[];
  question?: Question;
  signOffChangeLog?: ChangeLog[];
  specNodeDetails?: OutputSpecNode[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputTableDetailsV2, ObjectDetailsMap]
 */
export interface OutputQuestionDetailsV2 {
  changeLog?: ChangeLog[];
  currentPage?: string;
  documents?: OutputDocument[];
  eSignatures?: OutputESignature[];
  flags?: UserWithFlag[];
  participantQuestion?: ParticipantQuestion;
  queries?: UserWithQuery[];
  question?: OPQuestionV2;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitActivityCreate, trialexecStudyProtocolVisitActivityQuestionnaireCreate, publicTrialexecParticipantFormActivityQuestionnaireCreate]
 */
export interface OutputQuestionnaire {
  participantQuestionnaire?: ParticipantQuestionnaire;
  questionnaire?: Questionnaire;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputActivityDetails, OutputActivitySummary, ObjectDetailsMap]
 */
export interface OutputQuestionnaireDetails {
  objectDetails?: ObjectDetails[];
  participantQuestionnaire?: ParticipantQuestionnaire;
  questionDetails?: OutputQuestionDetails[];
  questionnaire?: Questionnaire;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap]
 */
export interface OutputQuestionnaireDetailsV2 {
  objectDetails?: ObjectDetails[];
  participantQuestionnaire?: ParticipantQuestionnaire;
  questionnaire?: OPQuestionnaireV2;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanSidePanelCreate]
 */
export interface OutputSidePanelSignOff {
  signOffProgressList?: SignOffProgressList[];
  visitId?: string;
  visitTitle?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputDocOverlayDetails, OutputQuestionDetails]
 */
export interface OutputSpecNode {
  changeLog?: ChangeLog[];
  initChangeLog?: ChangeLog[];
  participantSpecNode?: ParticipantSpecNode;
  specNode?: SpecNode;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap]
 */
export interface OutputStatement {
  currentPage?: string;
  statement?: Statement;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate]
 * Used in Objects[ObjectDetailsMap]
 */
export interface OutputTableDetailsV2 {
  currentPage?: string;
  currentPageQuestionList?: string[];
  /** TODO: only give questions */
  objectDetails?: ObjectDetails[];
  /**
   * fresh all Question will give firt page questions
   * any time we save bcz you are in some page context give next page questions
   * maintain draft mode for save page for final page get all saved question and flush to hdm
   * save will mark participantQuestion as draft
   * save will mark all remaining page questions to init starting with nextPage (reset your branched path)
   * activity->allQuestion will include all pqn
   * complete will mark all of them as complete
   */
  opTableCellsMap?: Record<string, OutputQuestionDetailsV2[]>;
  participantTable?: ParticipantTable;
  rowOrderList?: string[];
  table?: OPTable;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitPreVisitTodoCreate, trialexecTaskTodoUpdate]
 * Used in Objects[OutputPrePostVisit]
 */
export interface OutputTodo {
  participantTodo?: ParticipantTodo;
  specs?: OutputTodoSpec[];
  todo?: Todo;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitTodoCreate, trialexecTaskTodoUpdate]
 * Used in Objects[OutputTodo]
 */
export interface OutputTodoSpec {
  pSpecs?: ParticipantTodoSpecNode;
  specs?: TodoSpecNode;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OPDocOverlayDetailsV2]
 */
export interface OutputVariable {
  participantVariable?: ParticipantVariable;
  variable?: VariableV2;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeCompleteCreate, trialexecCareplanAeSaveCreate, trialexecCareplanConMedsSaveCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistorySaveCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitAeCompleteCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivitySaveCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate]
 * Used in Objects[UpdateActivityPayload]
 */
export interface ParticipantDocOverlayDetails {
  changeLog?: ChangeLog[];
  documents?: OutputDocument[];
  initChangeLog?: ChangeLog[];
  participantDocOverlay?: ParticipantDocOverlay;
  queries?: UserWithQuery[];
  signOffChangeLog?: ChangeLog[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeCompleteCreate, trialexecCareplanAeSaveCreate, trialexecCareplanConMedsSaveCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistorySaveCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitAeCompleteCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivitySaveCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate]
 * Used in Objects[UpdateActivityPayload]
 */
export interface ParticipantQuestionWithSpec {
  changeLog?: ChangeLog[];
  documents?: OutputDocument[];
  initChangeLog?: ChangeLog[];
  participantQuestion?: ParticipantQuestion;
  participantQuestionSpecs?: ParticipantSpecNode[];
  queries?: UserWithQuery[];
  signOffChangeLog?: ChangeLog[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeCompleteCreate, trialexecCareplanAeSaveCreate, trialexecCareplanConMedsSaveCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistorySaveCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitAeCompleteCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivitySaveCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate]
 */
export interface UpdateActivityPayload {
  activityId?: string;
  adverseEventId?: string;
  conMedId?: string;
  docOverlayDetails?: ParticipantDocOverlayDetails[];
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  eSignID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionSpecs?: ParticipantQuestionWithSpec[];
  questionnaireId?: string;
  reason?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  type?:
    | 'CRCSignOff'
    | 'InvestigatorSignOff'
    | 'QASignOff'
    | 'DASignOff'
    | 'MonitorSignOff'
    | 'ScribeSignOff';
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList, trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputQuestionDetails, OutputQuestionDetailsV2]
 */
export interface UserWithFlag {
  flag?: EligibilityFlag;
  user?: User;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList, trialexecV2GetObjectTypesList, trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecV2GetObjectTypesList, trialexecCareplanAeCompleteCreate, trialexecCareplanAeSaveCreate, trialexecCareplanConMedsSaveCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistorySaveCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitAeCompleteCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivitySaveCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecCareplanAeCompleteCreate, trialexecCareplanAeSaveCreate, trialexecCareplanConMedsSaveCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistorySaveCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitAeCompleteCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivitySaveCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate]
 * Used in Objects[OutputDocOverlayDetails, OutputQuestionDetails, OutputQuestionDetailsV2, ParticipantDocOverlayDetails, ParticipantQuestionWithSpec]
 */
export interface UserWithQuery {
  commentCount?: number;
  query?: Query;
  user?: User;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecParticipantFormStudySubjectSummaryDetail, trialexecParticipantFormSummaryDetail, publicTrialexecParticipantFormSummaryDetail]
 */
export interface OutputPFormSummary {
  activitySummary?: OutputActivitySummary[];
  conclusion?: string;
  description?: string;
  introduction?: string;
  signOffChangeLog?: ChangeLog[];
  status?: string;
  title?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecFormParticipantFormDetail, trialexecParticipantFormList, trialexecStudyStudyIdParticipantFormList, publicTrialexecFormParticipantFormDetail]
 */
export interface OutputParticipantForm {
  form?: Form;
  phi?: OPPhi;
  status?: string;
  tildaid?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSidePanelCreate]
 * Used in Objects[OutputSidePanelProgressNote]
 */
export interface ActivitySidePanelProgressNote {
  activityId?: string;
  activityTitle?: string;
  /** Returned in descending createdby order */
  changeLogs?: ChangeLog[];
  progressNote?: ProgressNote;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudySubjectRescreenCreate]
 */
export interface CPCreatePayload {
  reason?: string;
  siteId?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanProgressnotesDetail]
 * Used in Objects[ListCareplanProgressNotesOutput]
 */
export interface CarePlanProgressNote {
  activityId?: string;
  activityTitle?: string;
  /** Returned in descending createdby order */
  changeLogs?: ChangeLog[];
  progressNote?: ProgressNote;
  visitId?: string;
  visitTitle?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanConMedsListRowsDetail, trialexecCareplanMedicalHistoryListRowsDetail]
 * Used in Objects[Row]
 */
export interface Cell {
  id?: string;
  participantId?: string;
  title?: string;
  value?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail, trialexecProtocolCrfDetail, trialexecProtocolStudyprotocolDetail]
 * Used in Objects[OPStudyProtocol, OPStudyProtocolV2, StudyProtocol]
 */
export interface CpDetails {
  careplan?: CarePlan;
  cpChangeLogs?: ChangeLog[];
  cpDiscontinuationDetails?: CpDiscontinuationDetails;
  cpPhi?: OPPhi;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail, trialexecProtocolCrfDetail, trialexecProtocolStudyprotocolDetail]
 * Used in Objects[CpDetails]
 */
export interface CpDiscontinuationDetails {
  cpDiscontinuationDetails?: DiscontinuationDetails;
  ddChangeLog?: Record<string, ChangeLogObjChangeLogChangeType[]>;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanScreenFailCreate, trialexecCareplanVisitDisqualifyCreate, trialexecCareplanVisitScreenFailCreate]
 */
export interface DisqualifyPayload {
  activityId?: string;
  adverseEventId?: string;
  comment?: string;
  conMedId?: string;
  criteria?: string[];
  dispositionDate?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  eSignID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyDutyplanAdoptCreate, trialexecStudyDutyplanCopyCreate, trialexecStudyDutyplanCreate, trialexecStudyDutyplanDelete, trialexecStudyDutyplanDetail2, trialexecStudyDutyplanDutyCreate, trialexecStudyDutyplanDutyDelete, trialexecStudyDutyplanDutyUpdate, trialexecStudyDutyplanPublishCreate, trialexecStudyDutyplanUpdate]
 */
export interface DutiesPlanResponse {
  createdByUserName?: string;
  duties?: Duty[];
  dutyPlan?: DutyPlan;
  sitePairMap?: Record<string, DutiesPlanSitePair>;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyDutyplanAdoptCreate, trialexecStudyDutyplanCopyCreate, trialexecStudyDutyplanCreate, trialexecStudyDutyplanDelete, trialexecStudyDutyplanDetail2, trialexecStudyDutyplanDutyCreate, trialexecStudyDutyplanDutyDelete, trialexecStudyDutyplanDutyUpdate, trialexecStudyDutyplanPublishCreate, trialexecStudyDutyplanUpdate]
 * Used in Objects[DutiesPlanResponse]
 */
export interface DutiesPlanSitePair {
  adopted?: boolean;
  published?: boolean;
  siteId?: string;
  siteName?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyDutyplanAdoptCreate, trialexecStudyDutyplanPublishCreate]
 */
export interface DutyPlanPayload {
  duties?: Duty[];
  dutyPlanId?: string;
  /** pass site IDs */
  sites?: string[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeActivityQuestionFlagCreate, trialexecCareplanAeActivityQuestionFlagDelete, trialexecCareplanAeActivityQuestionFlagUpdate, trialexecCareplanVisitActivityQuestionFlagCreate, trialexecCareplanVisitActivityQuestionFlagDelete, trialexecCareplanVisitActivityQuestionFlagUpdate]
 */
export interface EligibilityFlagPayload {
  activityId?: string;
  adverseEventId?: string;
  comment?: string;
  conMedId?: string;
  criteria?: string[];
  dispositionDate?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  eSignID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  specNodes?: string[];
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2CareplanVisitActivityEditCompleteCreate]
 */
export interface ExecIdsWithChangeLog {
  activityId?: string;
  adverseEventId?: string;
  conMedId?: string;
  description?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  reason?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitActivityNotesCreate, trialexecCareplanVisitNotesCreate]
 */
export interface ExecProgressNotes {
  activityId?: string;
  adverseEventId?: string;
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  conMedId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  hdmClassId?: string;
  holdbitmap?: number;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  tildaid?: string;
  updatedat?: number;
  visitId?: string;
  who?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitActivityTaskCreate]
 */
export interface ExecTaskPayload {
  activityId?: string;
  adverseEventId?: string;
  assignTo?: string[];
  assignment?: string;
  category?: string;
  conMedId?: string;
  description?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  dueBy?: string;
  from?: string;
  hdmClassId?: string;
  id?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  priority?: number;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  /** Resource associated with task */
  relationshipContext?: string;
  replyId?: string;
  /** Study associated with task when given by user */
  studyId?: string;
  tableId?: string;
  taskId?: string;
  title?: string;
  /** List of Types */
  type?: string;
  visitId?: string;
  who?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanProgressnotesDetail]
 */
export interface ListCareplanProgressNotesOutput {
  careplanProgressNotes?: CarePlanProgressNote[];
  count?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanConMedsDetail, trialexecCareplanConMedsDetail2, trialexecCareplanConMedsExportDetail, trialexecCareplanConMedsSaveCreate, trialexecCareplanMedicalHistoryDetail, trialexecCareplanMedicalHistoryDetail2, trialexecCareplanMedicalHistoryExportDetail, trialexecCareplanMedicalHistorySaveCreate]
 * Used in Objects[OutputConMed, OutputMedHist]
 */
export interface MRColumn {
  displayName?: string;
  format?: string;
  name?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[VisitApptDetails]
 */
export interface MemberWithRole {
  name?: string;
  role?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPVisitSummary]
 */
export interface OPAdverseEventDetails {
  activityId?: string;
  availableActions?: ('SignOff' | 'Create' | 'Query' | 'Flag' | 'Edit')[];
  carePlanId?: string;
  createdat?: number;
  creator?: string;
  delpending?: boolean;
  deltimestamp?: number;
  firstName?: string;
  holdbitmap?: number;
  lastName?: string;
  nodeId?: string;
  outcome?: string;
  outputActivityDetails?: OPActivityDetails;
  outsideExecution?: boolean;
  serialNumber?: number;
  serious?: string;
  status?: 'Draft' | 'Pending' | 'Reviewed';
  studyId?: string;
  studyName?: string;
  term?: string;
  tildaid?: string;
  updatedat?: number;
  visitId?: string;
  visitTitle?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail]
 * Used in Objects[OPStudyProtocol, OPStudyProtocolV2]
 */
export interface OPCommonProtocolVersion {
  adoptedCount?: number;
  createdBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  name?: string;
  publishedCount?: number;
  sites?: OutputSite[];
  status?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanConMedsDetail, trialexecCareplanConMedsDetail2, trialexecCareplanConMedsExportDetail, trialexecCareplanConMedsSaveCreate]
 * Used in Objects[OutputConMed]
 */
export interface OPConMed {
  activityId?: string;
  carePlanId?: string;
  category?: string;
  condition?: string;
  conditiontype?: string;
  description?: string;
  dosage?: string;
  dosageunit?: string;
  email?: string;
  encounterdate?: string;
  frequency?: string;
  hdmClassId?: string;
  id?: string;
  inresponsetoae?: string;
  name?: string;
  reason?: string;
  role?: string;
  route?: string;
  startdate?: string;
  stopdate?: string;
  studyId?: string;
  tag?: string;
  tagvalue?: string;
  time?: number;
  visit?: string;
  visitId?: string;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPDslTaskWithSpecs]
 */
export interface OPDslTaskSpec {
  pSpecs?: OPParticipantDslSpecNode;
  specs?: OPDslTaskSpecNode;
  task?: OPTask;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPPrePostVisit]
 */
export interface OPDslTaskWithSpecs {
  dslTask?: OPDslTask;
  participantDslTask?: OPParticipantDslTask;
  specs?: OPDslTaskSpec[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanMedicalHistoryDetail, trialexecCareplanMedicalHistoryDetail2, trialexecCareplanMedicalHistoryExportDetail, trialexecCareplanMedicalHistorySaveCreate]
 * Used in Objects[OutputMedHist]
 */
export interface OPMedHist {
  activityId?: string;
  carePlanId?: string;
  category?: string;
  comment?: string;
  description?: string;
  email?: string;
  encounterdate?: string;
  hdmClassId?: string;
  id?: string;
  name?: string;
  reason?: string;
  role?: string;
  startdate?: string;
  stopdate?: string;
  studyId?: string;
  tag?: string;
  tagvalue?: string;
  time?: number;
  visit?: string;
  visitId?: string;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail]
 * Used in Objects[OPStudyProtocolV2]
 */
export interface OPProtocolActivity {
  activity?: OPActivityV2;
  objectDetails?: OutputActivityDetailsV2;
  visitPAMap?: Record<string, ParticipantActivity>;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyProtocolDetail]
 * Used in Objects[OutputProtocol]
 */
export interface OPProtocolVersion {
  adoptedCount?: number;
  commitID?: string;
  createdBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  name?: string;
  publishedCount?: number;
  repository?: string;
  sites?: OutputSite[];
  status?: string;
  tildaid?: string;
  updatedat?: number;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyProtocolDetail]
 * Used in Objects[OutputProtocol]
 */
export interface OPProtocolVersionV2 {
  adoptedCount?: number;
  createdBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  name?: string;
  publishedCount?: number;
  sites?: OutputSite[];
  status?: string;
  tildaid?: string;
  updatedat?: number;
  version?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail]
 * Used in Objects[OPStudyProtocolV2]
 */
export interface OPProtocolVisit {
  activities?: string[];
  appointmentDateRange?: DateRange;
  appointmentDaysRange?: DayRange;
  participantVisit?: ParticipantVisit;
  signOffProgressList?: SignOffProgressList[];
  visit?: OPVisitV2;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail]
 */
export interface OPStudyProtocol {
  cpDetails?: CpDetails;
  protocolVersion?: OPCommonProtocolVersion;
  soaStats?: SoaStats;
  study?: OPStudy;
  visitGraph?: Graph[];
  visits?: OPVisitActivityGraph[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail]
 */
export interface OPStudyProtocolV2 {
  activities?: OPProtocolActivity[];
  cpDetails?: CpDetails;
  protocolVersion?: OPCommonProtocolVersion;
  soaStats?: SoaStats;
  study?: OPStudy;
  visits?: OPProtocolVisit[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail]
 * Used in Objects[OPStudyProtocol]
 */
export interface OPVisitActivityGraph {
  ActivityGraph?: Graph[];
  activities?: OPActivityDetails[];
  appointmentDateRange?: DateRange;
  appointmentDaysRange?: DayRange;
  careplan?: CarePlan;
  eConsentCommInfo?: CommunicationInfo;
  executableActivityId?: string;
  participantVisit?: ParticipantVisit;
  phi?: OPPhi;
  postVisit?: OPPrePostVisit;
  preVisit?: OPPrePostVisit;
  protocolVersionId?: string;
  signOffProgressList?: SignOffProgressList[];
  study?: OPStudy;
  visit?: OPVisitV2;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 */
export interface OPVisitSummary {
  activitySummary?: OPActivitySummary[];
  availableActions?: (
    | 'Query'
    | 'Edit'
    | 'Flag'
    | 'Signoff'
    | 'Qualify'
    | 'Review'
    | 'Complete'
    | 'ScreenFail'
  )[];
  /** Based on the state this could be empty */
  cpActor?: StudyActorResponse[];
  documents?: OutputDocument[];
  notes?: OutputSidePanelProgressNote;
  objectDetails?: ObjectDetails[];
  outputAdverseEvent?: OPAdverseEventDetails[];
  postVisit?: OPPrePostVisit;
  protocolDeviation?: OutputPDType[];
  signOffChangeLog?: OPChangeLog[];
  signOffProgressList?: SignOffProgressList[];
  signOffTypes?: SignOffTypes[];
  status?:
    | 'Init'
    | 'Executable'
    | 'SchedulingInProgress'
    | 'SchedulingFailed'
    | 'ScheduleCancelled'
    | 'Scheduled'
    | 'NoShow'
    | 'PreVisitInProgress'
    | 'InProgress'
    | 'Completed'
    | 'ScreenFailed'
    | 'CompletedOffline'
    | 'PartiallyCompletedOffline'
    | 'Paused'
    | 'Locked';
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  subjectId?: string;
  visit?: OPVisitV2;
  visitApptDetails?: VisitApptDetails;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 */
export interface ObjectDetailsMap {
  Activity?: OutputActivityDetails;
  ActivityV2?: OutputActivityDetailsV2;
  DocOverlay?: OutputDocOverlayDetails;
  DocOverlayV2?: OPDocOverlayDetailsV2;
  DocReview?: OPDocOverlayDetailsV2;
  DocUpload?: OutputDocUploadDetailsV2;
  DocumentSet?: OutputDocumentSetDetails;
  DocumentSetV2?: OutputDocumentSetDetailsV2;
  OutputActivityDetails?: OutputActivityDetails;
  OutputActivityDetailsV2?: OutputActivityDetailsV2;
  OutputChecklistTask?: OutputChecklistTask;
  OutputTaskConfig?: OutputTaskConfig;
  OutputTodoV2?: OutputTodoV2;
  Question?: OutputQuestionDetails;
  QuestionV2?: OutputQuestionDetailsV2;
  Questionnaire?: OutputQuestionnaireDetails;
  QuestionnaireV2?: OutputQuestionnaireDetailsV2;
  Statement?: OutputStatement;
  Table?: OutputTableDetailsV2;
  VisitSummary?: OutputVisitSummary;
  VisitSummaryV2?: OutputVisitSummaryV2;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyActorSidePanelDetail]
 */
export interface OutputActorSidePanel {
  onboardingActivities?: ActivityInfo[];
  studyActor?: StudyActorResponse2;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeCreate, trialexecCareplanAeDetail, trialexecCareplanAeDetail2, trialexecCareplanVisitAeCreate, trialexecCareplanVisitAeDetail, trialexecStudyAeDetail]
 * Used in Objects[OutputAdverseEventsList, OutputVisitSummary]
 */
export interface OutputAdverseEvent {
  activityId?: string;
  availableActions?: ('SignOff' | 'Create' | 'Query' | 'Flag' | 'Edit')[];
  carePlanId?: string;
  createdat?: number;
  creator?: string;
  delpending?: boolean;
  deltimestamp?: number;
  /** TODO remove once UI uses opPHI */
  firstName?: string;
  holdbitmap?: number;
  lastName?: string;
  nodeId?: string;
  opPHI?: OPPhi;
  outcome?: string;
  outputActivityDetails?: OutputActivityDetails;
  outsideExecution?: boolean;
  serialNumber?: number;
  serious?: string;
  signOffChangeLog?: ChangeLog;
  site?: Site;
  status?: 'Draft' | 'Pending' | 'Reviewed';
  studyId?: string;
  studyName?: string;
  term?: string;
  tildaid?: string;
  updatedat?: number;
  visitId?: string;
  visitTitle?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[OutputVisitSummaryV2]
 */
export interface OutputAdverseEventV2 {
  activityId?: string;
  availableActions?: ('SignOff' | 'Create' | 'Query' | 'Flag' | 'Edit')[];
  carePlanId?: string;
  createdat?: number;
  creator?: string;
  delpending?: boolean;
  deltimestamp?: number;
  /** TODO remove once UI uses opPHI */
  firstName?: string;
  holdbitmap?: number;
  lastName?: string;
  nodeId?: string;
  opPHI?: OPPhi;
  outcome?: string;
  outputActivityDetails?: OutputActivityDetailsV2;
  outsideExecution?: boolean;
  serialNumber?: number;
  serious?: string;
  signOffChangeLog?: ChangeLog;
  site?: Site;
  status?: 'Draft' | 'Pending' | 'Reviewed';
  studyId?: string;
  studyName?: string;
  term?: string;
  tildaid?: string;
  updatedat?: number;
  visitId?: string;
  visitTitle?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecAdverseeventList]
 */
export interface OutputAdverseEventsList {
  adverseEvents?: OutputAdverseEvent[];
  count?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap]
 */
export interface OutputChecklistTask {
  object?: object;
  taskDetails?: OutputTask;
  todos?: OutputPrePostVisit;
  type?:
    | 'VisitSummary'
    | 'VisitSummaryV2'
    | 'OutputTodoV2'
    | 'OutputTaskConfig'
    | 'OutputChecklistTask'
    | 'OutputActivityDetailsV2'
    | 'OutputActivityDetails'
    | 'Activity'
    | 'ActivityV2'
    | 'CheckList'
    | 'Question'
    | 'QuestionV2'
    | 'QuestionnaireV2'
    | 'Statement'
    | 'Questionnaire'
    | 'DocOverlay'
    | 'DocOverlayV2'
    | 'DocReview'
    | 'DocUpload'
    | 'DocumentSet'
    | 'DocumentSetV2'
    | 'TaskConfig'
    | 'TaskList'
    | 'Table'
    | 'Visit'
    | 'VisitV2';
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanConMedsDetail, trialexecCareplanConMedsDetail2, trialexecCareplanConMedsExportDetail, trialexecCareplanConMedsSaveCreate]
 */
export interface OutputConMed {
  availableActions?: 'Query'[];
  categories?: string[];
  columnsPerCategory?: Record<string, MRColumn[]>;
  conMeds?: OPConMed[];
  isMonitor?: boolean;
  isV2?: boolean;
  outputActivityDetails?: OutputActivityDetails;
  outputActivityDetailsV2?: OutputActivityDetailsV2;
  phi?: OPPhi;
  study?: OPStudy;
  totalConMedsCnt?: number;
  uniqueFinderKeyVals?: Record<string, string[]>;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputPrePostVisit]
 */
export interface OutputDslTask {
  dslTask?: DslTask;
  participantDslTask?: ParticipantDslTask;
  specs?: OutputDslTaskSpec[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputDslTask]
 */
export interface OutputDslTaskSpec {
  pSpecs?: ParticipantDslSpecNode;
  specs?: DslTaskSpecNode;
  task?: Task;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanMedicalHistoryDetail, trialexecCareplanMedicalHistoryDetail2, trialexecCareplanMedicalHistoryExportDetail, trialexecCareplanMedicalHistorySaveCreate]
 */
export interface OutputMedHist {
  availableActions?: 'Query'[];
  categories?: string[];
  columnsPerCategory?: Record<string, MRColumn[]>;
  isMonitor?: boolean;
  isV2?: boolean;
  medHistList?: OPMedHist[];
  outputActivityDetails?: OutputActivityDetails;
  outputActivityDetailsV2?: OutputActivityDetailsV2;
  phi?: OPPhi;
  study?: OPStudy;
  totalMedHistCnt?: number;
  uniqueFinderKeyVals?: Record<string, string[]>;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecMonitorqueriesStudyCountCreate]
 * Used in Objects[OutputMonitorQueryPerSiteCounts]
 */
export interface OutputMonitorQueryCounts {
  lessThanFive?: number;
  moreThanFifty?: number;
  sixToTwenty?: number;
  twentyToFifty?: number;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecMonitorqueriesStudyFilterDetail]
 */
export interface OutputMonitorQueryFilter {
  assignedToUsers?: User[];
  context?: string[];
  createdBy?: string[];
  sites?: string[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecMonitorqueriesStudyListCreate]
 */
export interface OutputMonitorQueryPerSite {
  count?: number;
  queriesList?: OutputMonitorQueryPerSiteType[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecMonitorqueriesStudyCountCreate]
 */
export interface OutputMonitorQueryPerSiteCounts {
  counts?: Record<string, OutputMonitorQueryCounts>;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecMonitorqueriesStudyListCreate]
 * Used in Objects[OutputMonitorQueryPerSite]
 */
export interface OutputMonitorQueryPerSiteType {
  activityTitle?: string;
  assignedTo?: string[];
  comments?: number;
  query?: Query;
  siteName?: string;
  subject?: string;
  subjectid?: string;
  taskId?: string;
  type?: string;
  visitTitle?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecMonitorqueriesStudyTypeCreate]
 */
export interface OutputMonitorQueryPerType {
  queriesPerType?: Record<string, number>;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanPdCreate, trialexecCareplanPdUpdate, trialexecCareplanVisitPdCreate, trialexecCareplanVisitPdUpdate]
 * Used in Objects[OPVisitSummary, OutputProtocolDeviation, OutputVisitSummary, OutputVisitSummaryV2]
 */
export interface OutputPDType {
  dataChangeLogCount?: number;
  dataChangeLogList?: Record<string, ChangeLogObjChangeLogChangeType[]>;
  documents?: OutputDocument[];
  /** TODO remove once UI uses opPHI */
  firstName?: string;
  initChangeLogCount?: number;
  initChangeLogList?: Record<string, ChangeLogObjChangeLogChangeType[]>;
  lastName?: string;
  opPHI?: OPPhi;
  protocolDeviation?: ProtocolDeviation;
  studyName?: string;
  visitTitle?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputChecklistTask, OutputVisitSummary, VisitActivityGraph]
 */
export interface OutputPrePostVisit {
  dslTasks?: OutputDslTask[];
  participantPrePostVisit?: ParticipantPrePostVisit;
  prePostVisit?: PrePostVisit;
  todos?: OutputTodo[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2CareplanVisitSummaryDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OutputVisitSummaryV2, VisitActivityGraphV2]
 */
export interface OutputPrePostVisitV2 {
  participantPrePostVisit?: ParticipantPrePostVisit;
  prePostVisit?: PrePostVisitV2;
  taskConfigs?: OutputTaskConfig[];
  todos?: OutputTodoV2[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyProtocolDetail]
 */
export interface OutputProtocol {
  protocols?: OPProtocolVersion[];
  protocolsV2?: OPProtocolVersionV2[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanPdDetail, trialexecCareplanPdDetail2, trialexecCareplanVisitPdDetail, trialexecCareplanVisitPdDetail2, trialexecProtocoldeviationList, trialexecStudyPdDetail]
 * Used in Objects[OutputProtocolDeviationTask]
 */
export interface OutputProtocolDeviation {
  count?: number;
  protocolDeviationList?: OutputPDType[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeActivityQuestionQueryCreate2, trialexecCareplanQueryCreate2, trialexecCareplanVisitActivityQuestionQueryCreate2]
 * Used in Objects[OutputQueryTask]
 */
export interface OutputQuery {
  availableActions: Record<string, string>;
  availableActions2: QuerylibQueryActions[];
  changelog: ChangeLog[];
  commentCount?: number;
  createdBy: string;
  execIds?: ExecIds;
  query?: Query;
  specNodes?: string[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudySmoDetail]
 */
export interface OutputSMO {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  orgid?: string;
  orgname?: string;
  /** Scope could be CRO/SMO/Site */
  scopeId?: string;
  scopeName?: string;
  /** applicable only when Type is 'Site' */
  siteNumber?: string;
  status?: string;
  studyId?: string;
  tildaid?: string;
  type?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitSidePanelCreate]
 * Used in Objects[OPVisitSummary, OutputVisitSummary, OutputVisitSummaryV2]
 */
export interface OutputSidePanelProgressNote {
  activitySidePanelProgressNote?: ActivitySidePanelProgressNote[];
  visitSidePanelProgressNote?: VisitSidePanelProgressNote[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap, OutputPrePostVisitV2]
 */
export interface OutputTaskConfig {
  participantTaskConfig?: ParticipantTaskConfig;
  task?: Task;
  taskConfig?: TaskConfig;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap, OutputPrePostVisitV2]
 */
export interface OutputTodoV2 {
  participantTodo?: ParticipantTodoV2;
  todo?: TodoV2;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[ObjectDetailsMap, OutputSignoffTask]
 */
export interface OutputVisitSummary {
  activitySummary?: OutputActivitySummary[];
  availableActions?: (
    | 'Query'
    | 'Edit'
    | 'Flag'
    | 'Signoff'
    | 'Qualify'
    | 'Review'
    | 'Complete'
    | 'ScreenFail'
  )[];
  /** Based on the state this could be empty */
  cpActor?: StudyActorResponse[];
  documents?: OutputDocument[];
  notes?: OutputSidePanelProgressNote;
  outputAdverseEvent?: OutputAdverseEvent[];
  postVisit?: OutputPrePostVisit;
  protocolDeviation?: OutputPDType[];
  signOffChangeLog?: ChangeLog[];
  signOffProgressList?: SignOffProgressList[];
  signOffTypes?: SignOffTypes[];
  status?:
    | 'Init'
    | 'Executable'
    | 'SchedulingInProgress'
    | 'SchedulingFailed'
    | 'ScheduleCancelled'
    | 'Scheduled'
    | 'NoShow'
    | 'PreVisitInProgress'
    | 'InProgress'
    | 'Completed'
    | 'ScreenFailed'
    | 'CompletedOffline'
    | 'PartiallyCompletedOffline'
    | 'Paused'
    | 'Locked';
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  subjectId?: string;
  timeSpent?: string;
  visit?: Visit;
  visitApptDetails?: VisitApptDetails;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[ObjectDetailsMap]
 */
export interface OutputVisitSummaryV2 {
  activitySummary?: OutputActivitySummaryV2[];
  availableActions?: (
    | 'Query'
    | 'Edit'
    | 'Flag'
    | 'Signoff'
    | 'Qualify'
    | 'Review'
    | 'Complete'
    | 'ScreenFail'
  )[];
  /** Based on the state this could be empty */
  cpActor?: StudyActorResponse[];
  documents?: OutputDocument[];
  notes?: OutputSidePanelProgressNote;
  outputAdverseEvent?: OutputAdverseEventV2[];
  postVisit?: OutputPrePostVisitV2;
  protocolDeviation?: OutputPDType[];
  signOffChangeLog?: ChangeLog[];
  signOffProgressList?: SignOffProgressList[];
  signOffTypes?: SignOffTypes[];
  status?:
    | 'Init'
    | 'Executable'
    | 'SchedulingInProgress'
    | 'SchedulingFailed'
    | 'ScheduleCancelled'
    | 'Scheduled'
    | 'NoShow'
    | 'PreVisitInProgress'
    | 'InProgress'
    | 'Completed'
    | 'ScreenFailed'
    | 'CompletedOffline'
    | 'PartiallyCompletedOffline'
    | 'Paused'
    | 'Locked';
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  subjectId?: string;
  timeSpent?: string;
  visit?: OPVisitV2;
  visitApptDetails?: VisitApptDetails;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitAllDetail]
 */
export interface OutputVisitV2 {
  participantVisit?: ParticipantVisit;
  visit?: OPVisitV2;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeActivityQuestionQueryCreate, trialexecCareplanAeActivityQuestionQueryUpdate, trialexecCareplanQueryCreate, trialexecCareplanQueryUpdate, trialexecCareplanVisitActivityQuestionQueryCreate, trialexecCareplanVisitActivityQuestionQueryUpdate]
 */
export interface QueryPayload {
  activityId?: string;
  adverseEventId?: string;
  assignTo?: string;
  conMedId?: string;
  /** description/reply to be updated */
  description?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  queryType?:
    | 'Missed Data/Missed signatures'
    | 'Confirmatory Queries'
    | 'Possible Lack of Information'
    | 'Transcription errors'
    | 'Possible protocol Deviation'
    | 'Possibly missed Adverse Event'
    | 'Missed lab report';
  questionId?: string;
  questionnaireId?: string;
  /** Reply to be updated. replyId=queryId denotes the original query. Empty replyId denotes adding reply (execsvc only) */
  replyId?: string;
  specNodes?: string[];
  /** state of the query to be updated */
  state?: 'Open' | 'Answer' | 'Resolve' | 'Verify' | 'Delete';
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeActivityQuestionUpdate, trialexecCareplanConMedsActivityQuestionUpdate, trialexecCareplanMedicalHistoryActivityQuestionUpdate, trialexecCareplanVisitActivityQuestionUpdate]
 */
export interface QuestionPayloadWitChangeLog {
  activityId?: string;
  adverseEventId?: string;
  changeLogPayLoad?: ChangeLogPayLoad;
  conMedId?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionSpec?: ParticipantSpecNode[];
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecTaskReviewUpdate]
 */
export interface ReviewTaskPayload {
  activityId?: string;
  adverseEventId?: string;
  conMedId?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  role?: string;
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanConMedsListRowsDetail, trialexecCareplanMedicalHistoryListRowsDetail]
 * Used in Objects[TableOutput]
 */
export interface Row {
  cells?: Cell[];
  changeLogs?: ChangeLog;
  rowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanSidePanelCreate, trialexecCareplanVisitSidePanelCreate]
 */
export interface SidePanelPayload {
  requestingTab?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[OPVisitSummary, OutputVisitSummary, OutputVisitSummaryV2]
 */
export interface SignOffTypes {
  actions?: (
    | 'Query'
    | 'Edit'
    | 'Flag'
    | 'Signoff'
    | 'Qualify'
    | 'Review'
    | 'Complete'
    | 'ScreenFail'
  )[];
  type?:
    | 'CRCSignOff'
    | 'InvestigatorSignOff'
    | 'QASignOff'
    | 'DASignOff'
    | 'MonitorSignOff'
    | 'ScribeSignOff';
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitActivitySkipCreate]
 */
export interface SkipActivityPayload {
  activityId?: string;
  adverseEventId?: string;
  conMedId?: string;
  description?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  reason?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail, trialexecProtocolCrfDetail, trialexecProtocolStudyprotocolDetail]
 * Used in Objects[OPStudyProtocol, OPStudyProtocolV2, StudyProtocol]
 */
export interface SoaStats {
  amendFailCPCnt?: number;
  amendSkipCpCnt?: number;
  amendSuccessCpCnt?: number;
  amendYetToCompleteCPCnt?: number;
  totalCpCnt?: number;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyActorCreate, trialexecStudyActorUpdate]
 */
export interface StudyActorPayload {
  applyToStudyRoleFlag?: string;
  capabilities?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  email?: string;
  holdbitmap?: number;
  isBlinded?: boolean;
  /** roles across study */
  roleResponse?: RoleResponse[];
  /** roles and duties per site */
  siteDetails?: SiteDetails[];
  tildaid?: string;
  updatedat?: number;
  userId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecProtocolCrfDetail, trialexecProtocolStudyprotocolDetail]
 */
export interface StudyProtocol {
  cpDetails?: CpDetails;
  protocolVersion?: ProtocolVersion;
  soaStats?: SoaStats;
  study?: OPStudy;
  visitGraph?: Graph[];
  visits?: VisitActivityGraph[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudySiteCreate, trialexecStudySiteUpdate]
 */
export interface StudySiteInput {
  siteId?: string;
  siteNumber?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudySiteSidePanelDetail]
 */
export interface StudySiteSidePanel {
  actors?: StudyActorResponse[];
  outStandingCpCnt?: number;
  status?: 'AdoptInProgress' | 'AdoptFailed' | 'Adopted';
  totalCpCnt?: number;
  version?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanConMedsListRowsDetail, trialexecCareplanMedicalHistoryListRowsDetail]
 */
export interface TableOutput {
  availableActions?: 'Query'[];
  categories?: string[];
  isMonitor?: boolean;
  isV2?: boolean;
  objectDetails?: ObjectDetails[];
  phi?: OPPhi;
  rows?: Row[];
  study?: OPStudy;
  totalRowCount?: number;
  uniqueFinderKeyVals?: Record<string, string[]>;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitActivityUpdate]
 */
export interface UpdateActivityStatusPayLoad {
  activityId?: string;
  adverseEventId?: string;
  comment?: string;
  conMedId?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  event?:
    | 'Init'
    | 'Open'
    | 'Start'
    | 'PatientStart'
    | 'Skip'
    | 'Complete'
    | 'Pause'
    | 'ForceComplete'
    | 'Offline'
    | 'CompletedOffline'
    | 'Restore'
    | 'Resume'
    | 'Unlock';
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  reason?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2CareplanVisitPreVisitTodoCreate]
 */
export interface UpdatePrePostVisitPayload {
  status?: string;
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecProgressnoteUpdate]
 */
export interface UpdateProgressNotePayload {
  description?: string;
  progressNoteDescription?: string;
  reason?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail]
 */
export interface ValidateIDs {
  activityId?: string;
  actorID?: string;
  adverseEventID?: string;
  adverseEventId?: string;
  careplanID?: string;
  conMedID?: string;
  conMedId?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  editMode?: boolean;
  flagID?: string;
  formID?: string;
  hdmClassId?: string;
  hidePhi?: boolean;
  isPatient?: boolean;
  isV2?: boolean;
  medHistID?: string;
  medHistId?: string;
  organization?: Organization;
  organizationAlias?: string;
  organizationID?: string;
  organizationType?: string;
  pageId?: string;
  participantActivityID?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantFormID?: string;
  participantID?: string;
  participantQuestionID?: string;
  participantQuestionId?: string;
  participantQuestionnaireID?: string;
  participantQuestionnaireId?: string;
  participantVisitID?: string;
  participantVisitId?: string;
  plandefinitionID?: string;
  protocolDeviationID?: string;
  protocolVersionID?: string;
  queryID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  reviewMode?: boolean;
  siteID?: string;
  specNodeID?: string;
  studyID?: string;
  tableID?: string;
  tableId?: string;
  taskID?: string;
  taskId?: string;
  userEmail?: string;
  visitID?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail]
 * Used in Objects[StudyProtocol]
 */
export interface VisitActivityGraph {
  ActivityGraph?: Graph[];
  activities?: OutputActivityV2[];
  appointmentDateRange?: DateRange;
  appointmentDaysRange?: DayRange;
  careplan?: CarePlan;
  eConsentCommInfo?: CommunicationInfo;
  executableActivityId?: string;
  participantVisit?: ParticipantVisit;
  phi?: OPPhi;
  postVisit?: OutputPrePostVisit;
  preVisit?: OutputPrePostVisit;
  protocolVersionId?: string;
  signOffProgressList?: SignOffProgressList[];
  study?: OPStudy;
  visit?: OPVisitV2;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 */
export interface VisitActivityGraphV2 {
  ActivityGraph?: Graph[];
  activities?: OutputActivityV2[];
  appointmentDateRange?: DateRange;
  appointmentDaysRange?: DayRange;
  careplan?: CarePlan;
  eConsentCommInfo?: CommunicationInfo;
  executableActivityId?: string;
  participantVisit?: ParticipantVisit;
  phi?: OPPhi;
  postVisit?: OutputPrePostVisitV2;
  preVisit?: OutputPrePostVisitV2;
  protocolVersionId?: string;
  signOffProgressList?: SignOffProgressList[];
  study?: OPStudy;
  visit?: OPVisitV2;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecV2CareplanVisitSummaryDetail]
 * Used in Objects[OPVisitSummary, OutputVisitSummary, OutputVisitSummaryV2]
 */
export interface VisitApptDetails {
  clinicalTeam?: MemberWithRole[];
  cpPhi?: OPPhi;
  endTime?: string;
  siteName?: string;
  startTime?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSidePanelCreate]
 * Used in Objects[OutputSidePanelProgressNote]
 */
export interface VisitSidePanelProgressNote {
  /** Returned in descending createdby order */
  changeLogs?: ChangeLog[];
  progressNote?: ProgressNote;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitUpdate]
 */
export interface VisitUpdatePayLoad {
  comment?: string;
  reason?: string;
  source?: 'Paper' | 'External vendor' | 'External system';
  status?: string;
  userId?: string[];
  when?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanTaskCreate, trialexecCareplanVisitTaskCreate]
 * Module[notif]:Services[v1NotifPatientTasksCreate]
 */
export interface TaskPayload {
  assignTo?: string[];
  assignment?: string;
  category?: string;
  description?: string;
  dueBy?: string;
  from?: string;
  id?: string;
  priority?: number;
  /** Resource associated with task */
  relationshipContext?: string;
  /** Study associated with task when given by user */
  studyId?: string;
  title?: string;
  /** List of Types */
  type?: string;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityStartCreate, trialexecCareplanVisitActivityUnlockCreate, trialexecParticipantFormActivityRestartCreate, trialexecParticipantFormActivityStartCreate, publicTrialexecParticipantFormActivityStartCreate, trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate]
 * Used in Objects[OutputActivity, OutputActivityDetails]
 */
export interface Activity {
  anchorIdentifier?: string;
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  blob?: string;
  branchChildIds?: string[];
  branchLevel?: number;
  conditionIds?: string[];
  controlChildIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  documentSetChildIds?: string[];
  dslTaskChildIds?: string[];
  duration?: string;
  dutyChildIds?: string[];
  function?: FunctionDef;
  groupTag?: number;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  nextActivities?: string[];
  nodeId?: string;
  notes?: string;
  parentIds?: string[];
  performer?: string;
  performerCapabilities?: string;
  position?: number;
  post?: string;
  pre?: string;
  questionCount?: number;
  questionnaireChildIds?: string[];
  retval?: string;
  scopeId?: number;
  selector?: 'documents' | 'events' | 'partnerType';
  specNodeChildIds?: string[];
  templateId?: number;
  tildaid?: string;
  title?: string;
  tlName?: string;
  todoChildIds?: string[];
  treeId?: string;
  type?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  updatedat?: number;
  variableChildIds?: string[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanDiscontinueCreate]
 */
export interface CPDiscontinuePayload {
  changeLog?: ChangeLogPayLoad;
  comment?: string;
  eosVisit?: boolean;
  reason?:
    | 'Adverse Events'
    | 'Lack of Efficacy'
    | 'PI Decision'
    | 'Study Closure'
    | 'Other';
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanUpdate]
 */
export interface CPUpdatePayload {
  reason?: string;
  status?:
    | 'ScreenFailed'
    | 'NotEligible'
    | 'Enrolled'
    | 'Completed'
    | 'Discontinued';
  subjectid?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecPlandefinitionParticipantDetail, trialexecStudySubjectCreate, trialexecStudySubjectDetail, trialexecStudySubjectRescreenCreate]
 * Used in Objects[CpDetails, OPVisitActivityGraph, VisitActivityGraph, VisitActivityGraphV2]
 */
export interface CarePlan {
  amendError?: string;
  amendStatus?: string;
  anchoringDate?: string;
  arm?: string;
  category?: string;
  conMedsImported?: boolean;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  icfSigned?: boolean;
  isDeleted?: boolean;
  medicalHistoryImported?: boolean;
  nextAdverseEventId?: number;
  nextProtocolDeviationId?: number;
  participantId: string;
  soaId?: string;
  status?:
    | 'ScreenSchedulePending'
    | 'ScreenScheduled'
    | 'ScreenInProgress'
    | 'ScreenFailed'
    | 'NotEligible'
    | 'ScreenPass'
    | 'Enrolled'
    | 'Completed'
    | 'OnHold'
    | 'Discontinued';
  studyId?: string;
  subjectid?: string;
  tildaid?: string;
  updatedat?: number;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeActivityQuestionUpdate, trialexecCareplanConMedsActivityQuestionUpdate, trialexecCareplanMedicalHistoryActivityQuestionUpdate, trialexecCareplanVisitActivityQuestionUpdate, trialexecCareplanDiscontinueCreate]
 * Used in Objects[QuestionPayloadWitChangeLog, CPDiscontinuePayload]
 */
export interface ChangeLogPayLoad {
  description?: string;
  reason?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OPVisitActivityGraph, VisitActivityGraph, VisitActivityGraphV2]
 */
export interface CommunicationInfo {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  email?: string;
  holdbitmap?: number;
  lastSent?: string;
  link?: string;
  mobilephone?: string;
  /** "remote"|"other_device"|"on-site". */
  mode?: string;
  tildaid?: string;
  updatedat?: number;
  useEmail?: boolean;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OPProtocolVisit, OPVisitActivityGraph, VisitActivityGraph, VisitActivityGraphV2, OPVisit]
 */
export interface DateRange {
  endDate?: string;
  startDate?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OPProtocolVisit, OPVisitActivityGraph, VisitActivityGraph, VisitActivityGraphV2, OPVisit]
 */
export interface DayRange {
  daysAfter?: number;
  daysBefore?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanStudyprotocolDetail, trialexecStudySiteStudyprotocolDetail, trialexecV2CareplanStudyprotocolDetail, trialexecV2ProtocolStudyprotocolDetail, trialexecV2StudySiteStudyprotocolDetail, trialexecProtocolCrfDetail, trialexecProtocolStudyprotocolDetail]
 * Used in Objects[CpDiscontinuationDetails]
 */
export interface DiscontinuationDetails {
  comment?: string;
  discontinuedAt?: string;
  discontinuedBy?: string;
  eosVisit?: boolean;
  reason?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputDocOverlayDetails]
 */
export interface DocOverlay {
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  docId?: string;
  edcEnabled?: boolean;
  functionDef?: FunctionDef;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  nodeId?: string;
  notes?: string;
  optional?: boolean;
  pageList?: string;
  parentIds?: string[];
  position?: number;
  post?: string;
  pre?: string;
  retval?: string;
  /** crc */
  reviewer?: string;
  scopeId?: number;
  specNodeChildIds?: string[];
  templateId?: string;
  tildaid?: string;
  title?: string;
  tlName?: string;
  treeId?: string;
  type?: string;
  updatedat?: number;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputDocumentSetDetails]
 */
export interface DocumentSet {
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  docOverlayChildIds?: string[];
  functionDef?: FunctionDef;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  nodeId?: string;
  notes?: string;
  parentIds?: string[];
  position?: number;
  post?: string;
  pre?: string;
  retval?: string;
  scopeId?: number;
  specNodeChildIds?: string[];
  templateId?: number;
  tildaid?: string;
  title?: string;
  tlName?: string;
  treeId?: string;
  type?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecPlandefinitionDetail, trialexecPlandefinitionList]
 */
export interface DslPlanDefinition {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  /** Scope could be CRO/SMO/Site */
  scopeId?: string;
  scopeName?: string;
  /** applicable only when Type is 'Site' */
  siteNumber?: string;
  status?: string;
  studyId?: string;
  tildaid?: string;
  type?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputDslTask]
 */
export interface DslTask {
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  dslTaskSpecNodeChildIds?: string[];
  function?: FunctionDef;
  holdbitmap?: number;
  name?: string;
  nodeId?: string;
  notes?: string;
  parentIds?: string[];
  position?: number;
  post?: string;
  pre?: string;
  preVisitId?: string;
  retval?: string;
  scopeId?: number;
  templateId?: number;
  tildaid?: string;
  title?: string;
  treeId?: string;
  updatedat?: number;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputDslTaskSpec]
 */
export interface DslTaskSpecNode {
  activeAfter?: string;
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  dslTaskId?: string;
  dueBy?: string;
  from?: string;
  function?: FunctionDef;
  holdbitmap?: number;
  name?: string;
  nodeId?: string;
  notes?: string;
  notify?: string;
  notifyType?: string;
  parentIds?: string[];
  position?: number;
  post?: string;
  pre?: string;
  priority?: 'Risk' | 'High' | 'Medium' | 'Low' | 'None';
  repeat?: string;
  repeatEnd?: string;
  repeatTimes?: string;
  required?: string;
  retval?: string;
  scopeId?: number;
  taskType?: string;
  templateId?: string;
  tildaid?: string;
  title?: string;
  treeId?: string;
  /** List of Types */
  type?: string;
  updatedat?: number;
  version?: string;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyDutyplanAdoptCreate, trialexecStudyDutyplanCopyCreate, trialexecStudyDutyplanCreate, trialexecStudyDutyplanDelete, trialexecStudyDutyplanDetail2, trialexecStudyDutyplanDutyCreate, trialexecStudyDutyplanDutyDelete, trialexecStudyDutyplanDutyUpdate, trialexecStudyDutyplanPublishCreate, trialexecStudyDutyplanUpdate]
 * Used in Objects[DutiesPlanResponse]
 */
export interface DutyPlan {
  /** tildaid of User */
  createdBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  orgId?: string;
  scopeId?: string;
  status?: 'Draft' | 'Accepted';
  tildaid?: string;
  title?: string;
  updatedat?: number;
  version?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList, trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OPUserWithFlag, UserWithFlag]
 */
export interface EligibilityFlag {
  careplanId?: string;
  comment?: string;
  /** Relationship with */
  context?: string;
  createdat?: number;
  criteria?: string[];
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  scopeId?: string;
  specNodes?: string[];
  tildaid?: string;
  updatedat?: number;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeActivityQuestionQueryCreate2, trialexecCareplanAeActivityQuestionQueryDelete, trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsDeleteRowDelete, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistoryDeleteRowDelete, trialexecCareplanQueryCreate2, trialexecCareplanQueryDelete, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityCreate, trialexecCareplanVisitActivityQuestionQueryCreate2, trialexecCareplanVisitActivityQuestionQueryDelete, trialexecCareplanVisitActivitySendEConsentDocsCreate, trialexecCareplanVisitActivityStartCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitActivityUnlockCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivityCreate, trialexecParticipantFormActivityRestartCreate, trialexecParticipantFormActivityStartCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, trialexecStudyProtocolVisitActivityQuestionnaireCreate, trialexecV2CareplanVisitActivityAllQuestionsCreate, trialexecV2CareplanVisitActivityEditAbortCreate, trialexecV2CareplanVisitActivityEditStartCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecV2StudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireCreate, publicTrialexecParticipantFormActivityQuestionnaireResultCreate, publicTrialexecParticipantFormActivityStartCreate]
 * Used in Objects[OutputQuery]
 */
export interface ExecIds {
  activityId?: string;
  adverseEventId?: string;
  conMedId?: string;
  docOverlayID?: string;
  docReviewId?: string;
  documentSetID?: string;
  hdmClassId?: string;
  medHistId?: string;
  pageId?: string;
  participantActivityId?: string;
  participantDocReviewId?: string;
  participantDocumentSetId?: string;
  participantQuestionId?: string;
  participantQuestionnaireId?: string;
  participantVisitId?: string;
  protocolDeviationID?: string;
  questionId?: string;
  questionnaireId?: string;
  replyId?: string;
  tableId?: string;
  taskId?: string;
  visitId?: string;
  workflowId?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecFormList, publicTrialexecFormList]
 * Used in Objects[OutputParticipantForm]
 */
export interface Form {
  activityChildIds?: string[];
  author?: string;
  blob?: string;
  conclusion?: string;
  conditionByteBufferStr?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  introduction?: string;
  name: string;
  nodeId?: string;
  parentIds?: string[];
  position?: number;
  soFileName?: string;
  tildaid?: string;
  title?: string;
  treeId?: string;
  type?: string;
  updatedat?: number;
  version: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyVisitsDetail]
 * Used in Objects[Activity, DocOverlay, DocumentSet, DslTask, DslTaskSpecNode, Question, Questionnaire, Todo, TodoSpecNode, Visit]
 */
export interface FunctionDef {
  functionCode?: string;
  functionCondition?: string;
  functionName?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecParticipantFormCreate, trialexecStudyProtocolAdoptCreate, trialexecStudyProtocolCreate, trialexecStudyProtocolPublishCreate]
 * Module[workflow]:Services[workflowPublishCreate, workflowStudyCreate]
 */
export interface GenericKeyArr {
  Keys?: string[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyDutyDetail]
 * Used in Objects[RecommendedDutiesResponse]
 */
export interface GroupedDuties {
  items?: Duty[];
  title?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyActorDetail]
 */
export interface ListActorsOutput2 {
  count?: number;
  orgActors?: OrgActorResponse[];
  siteActors?: SiteActorResponse[];
  studyActors?: StudyActorResponse2[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecMonitorqueriesStudyCountCreate, trialexecMonitorqueriesStudyListCreate]
 */
export interface MonitorQueryParams {
  SearchString?: string;
  assignedTo?: string;
  context?: string;
  createdBy?: string;
  dateOpened?: number;
  desc?: boolean;
  endDate?: number;
  /** MonitorFlag */
  externalFlag?: boolean;
  fromDate?: number;
  id?: number;
  limit?: number;
  numComments?: number;
  searchKey?: string;
  siteId?: string[];
  siteName?: string[];
  skip?: number;
  sortKey?: string;
  state?: string;
  studyId?: string;
  subjectId?: string;
  type?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecMonitorqueriesStudyTypeCreate]
 */
export interface MonitorQueryTypeParams {
  state?: string;
  studyId?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2CareplanVisitActivityAllQuestionsCreate, trialexecV2CareplanVisitActivityEditCompleteCreate, trialexecV2CareplanVisitActivityEditStartCreate, trialexecV2StudyProtocolVisitActivityAllQuestionsCreate]
 * Used in Objects[OutputActivityDetailsV2, OutputActivitySummaryV2, OutputActivityV2, OPProtocolActivity]
 */
export interface OPActivityV2 {
  activityType?:
    | 'PIF'
    | 'HRRF'
    | 'ECONSENT'
    | 'ADVERSE EVENT'
    | 'RANDOMIZATION'
    | 'MEDICAL HISTORY'
    | 'CON MEDS'
    | 'PROTOCOL DEVIATION'
    | 'BCVA';
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  docUploadCount?: number;
  documentCount?: number;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  notes?: string;
  objtype?: string;
  performer?: string;
  performerCapabilities?: string;
  questionCount?: number;
  selector?: 'documents' | 'events' | 'partnerType';
  tableCount?: number;
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail]
 * Used in Objects[OPQuestionnaireDetails]
 */
export interface OPQuestionnaire {
  branchLevel?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  name?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitSummaryDetail, trialexecV2CareplanVisitSummaryDetail, trialexecCareplanVisitAllDetail, trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OPProtocolVisit, OPVisitActivityGraph, OPVisitSummary, OutputVisitSummaryV2, OutputVisitV2, VisitActivityGraph, VisitActivityGraphV2]
 */
export interface OPVisitV2 {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  durationInMins?: number;
  holdbitmap?: number;
  interval?: string;
  isAnchorVisit?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  nodeId?: string;
  notes?: string;
  numOfDaysFromAnchor?: number;
  objtype?: string;
  /** "8:00-12:00,13:00-15:00" */
  preferredTime?: string;
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  tildaid?: string;
  title?: string;
  updatedat?: number;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeActivityQuestionUpdate, trialexecCareplanConMedsActivityQuestionUpdate, trialexecCareplanMedicalHistoryActivityQuestionUpdate, trialexecCareplanVisitActivityQuestionUpdate]
 * Used in Objects[ParticipantQuestion, ParticipantSpecNode]
 */
export enum OperationType {
  Delete = 'delete'
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanDetail, trialexecCareplanDiscontinueCreate, trialexecCareplanUpdate]
 * Used in Objects[OutputCarePlanResponse]
 */
export interface OutputCarePlan {
  allowedStateTransitions?: string[];
  carePlan?: OPCarePlan;
  changeLog?: ChangeLog[];
  hasDuties?: boolean;
  phi?: OPPhi;
  rescreenCount?: number;
  site?: OPSite;
  study?: OPStudy;
  unScheduledVisitCount?: number;
  visit?: OPVisit[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanList, trialexecStudySubjectDetailsDetail]
 */
export interface OutputCarePlanResponse {
  count?: number;
  message?: string;
  object?: object;
  outputCareplanList?: OutputCarePlan[];
  stateTransitionMap?: Record<string, string[]>;
  status?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList, trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecV2GetObjectTypesList]
 * Used in Objects[OPQuestionDetails, OutputQuestionDetails, OutputQuestionDetailsV2]
 */
export interface OutputESignature {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** Application specific details for signature */
  fontDetail?: string;
  fullName?: string;
  holdbitmap?: number;
  /** signature string (in case of typed) or encoded string (in case of drawn) */
  signatureString: string;
  signedAt?: number;
  signedBy?: string;
  tildaid?: string;
  type: 'Drawn' | 'Typed';
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudySiteDetail]
 * Used in Objects[OPCommonProtocolVersion, OPProtocolVersion, OPProtocolVersionV2, SitesResponse]
 */
export interface OutputSite {
  actorsCount?: number;
  address?: string;
  capacity?: string;
  city: string;
  contactEmail?: string;
  contactPhone?: string;
  country: string;
  createdat?: number;
  /** Hours of operation */
  daysOfWeekStr: string;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  googleMapUrl?: string;
  holdbitmap?: number;
  holidaysList?: string;
  investigators?: string[];
  latitude?: number;
  longitude?: number;
  name: string;
  orgId: string;
  postalCode: string;
  primaryLocationId?: string;
  protocolRelationStatus?:
    | 'Published'
    | 'AdoptInProgress'
    | 'AdoptFailed'
    | 'Adopted';
  siteLogo?: string;
  siteNumber?: string;
  smoId?: string;
  state: string;
  status?: 'Active' | 'Archived' | 'Onboarding';
  streetAddress: string;
  subjectsEnrolled?: number;
  subjectsScreenFailed?: number;
  suite?: string;
  tildaid?: string;
  timeZone: string;
  twilioNumber?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityStartCreate, trialexecCareplanVisitActivityUnlockCreate, trialexecParticipantFormActivityRestartCreate, trialexecParticipantFormActivityStartCreate, publicTrialexecParticipantFormActivityStartCreate, trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2CareplanVisitActivityAllQuestionsCreate, trialexecV2CareplanVisitActivityEditCompleteCreate, trialexecV2CareplanVisitActivityEditStartCreate, trialexecV2StudyProtocolVisitActivityAllQuestionsCreate]
 * Used in Objects[OutputActivity, OutputActivityDetails, OutputActivityDetailsV2, OutputActivityV2, OPProtocolActivity]
 */
export interface ParticipantActivity {
  activityId?: string;
  branchLevel?: number;
  carePlanId?: string;
  completedBy?: string;
  createdat?: number;
  currentNode?: string;
  currentPage?: string[];
  currentPath?: string[];
  delpending?: boolean;
  deltimestamp?: number;
  editPage?: string[];
  editPath?: string[];
  editStatus?:
    | 'Init'
    | 'Executable'
    | 'InProgress'
    | 'PatientInProgress'
    | 'Skipped'
    | 'Completed'
    | 'Paused'
    | 'Removed'
    | 'InProgressOfflineMode'
    | 'CompletedOffline';
  holdbitmap?: number;
  incompleteMandatoryQuestionCount?: number;
  incompleteQuestionCount?: number;
  migrated?: boolean;
  nodeId?: string;
  pre?: string;
  protocolId?: string;
  questionCount?: number;
  reason?: string;
  status?:
    | 'Init'
    | 'Executable'
    | 'InProgress'
    | 'PatientInProgress'
    | 'Skipped'
    | 'Completed'
    | 'Paused'
    | 'Removed'
    | 'InProgressOfflineMode'
    | 'CompletedOffline';
  summary?: string;
  tildaid?: string;
  timeSpent?: string;
  updateCount?: number;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList, trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList, trialexecCareplanAeCompleteCreate, trialexecCareplanAeSaveCreate, trialexecCareplanConMedsSaveCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistorySaveCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitAeCompleteCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivitySaveCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate]
 * Used in Objects[OPDocOverlayDetails, OPDocOverlayDetailsV2, OutputDocOverlayDetails, ParticipantDocOverlayDetails]
 */
export interface ParticipantDocOverlay {
  carePlanId?: string;
  clinicalStaffReviewed?: boolean;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  docOverlayId?: string;
  holdbitmap?: number;
  nodeId?: string;
  /** stores a list of Participant info page/section-> accepted,rejected,notReviewed */
  participantInfo?: string[];
  participantReviewed?: boolean;
  participantSkipped?: boolean;
  status?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputDocUploadDetailsV2]
 */
export interface ParticipantDocUpload {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  docUploadId?: string;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputDocumentSetDetails, OutputDocumentSetDetailsV2]
 */
export interface ParticipantDocumentSet {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  documentSetId?: string;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputDslTaskSpec]
 */
export interface ParticipantDslSpecNode {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  dslSpecNodeId?: string;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tildaid?: string;
  updatedat?: number;
  value?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputDslTask]
 */
export interface ParticipantDslTask {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  dslTaskId?: string;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tildaid?: string;
  updatedat?: number;
  value?: boolean;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecFormParticipantCreate, publicTrialexecFormParticipantCreate]
 * Used in Objects[OutputMessage]
 */
export interface ParticipantForm {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  formId?: string;
  holdbitmap?: number;
  isDeleted?: boolean;
  nodeId?: string;
  participantId?: string;
  signedOffByTeam?: number;
  status?: 'LinkSent' | 'Completed';
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputPrePostVisit, OutputPrePostVisitV2]
 */
export interface ParticipantPrePostVisit {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  nodeId?: string;
  prePostVisitId?: string;
  status?: string;
  taskCount?: number;
  tildaid?: string;
  todoStatus?: string;
  updateCount?: number;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList, trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate, trialexecV2GetObjectTypesList, trialexecCareplanAeCompleteCreate, trialexecCareplanAeSaveCreate, trialexecCareplanConMedsSaveCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistorySaveCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivityQuestionnaireSaveCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitAeCompleteCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivitySaveCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate]
 * Used in Objects[OutputQuestionDetails, OutputQuestionDetailsV2, ParticipantQuestionWithSpec]
 */
export interface ParticipantQuestion {
  branchLevel?: number;
  carePlanId?: string;
  changeLogCount?: number;
  createdat?: number;
  currentPage?: string;
  delpending?: boolean;
  deltimestamp?: number;
  editStatus?: 'Draft';
  editValue?: string;
  hdmClassId?: string;
  hdmObjId?: string;
  holdbitmap?: number;
  lastChangeLogCount?: number;
  nodeId?: string;
  operationType?: OperationType;
  pre?: string;
  questionId?: string;
  repeatCount?: number;
  status?:
    | 'Init'
    | 'Skipped'
    | 'Incomplete'
    | 'Incomplete Mandatory'
    | 'Completed'
    | 'Draft';
  tildaid?: string;
  updatedat?: number;
  value?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitActivityCreate, trialexecStudyProtocolVisitActivityQuestionnaireCreate, publicTrialexecParticipantFormActivityQuestionnaireCreate]
 * Used in Objects[OutputQuestionnaire, OutputQuestionnaireDetails, OutputQuestionnaireDetailsV2]
 */
export interface ParticipantQuestionnaire {
  anchorIdentifier?: string;
  branchChildIds?: string[];
  branchLevel?: number;
  carePlanId?: string;
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  incompleteMandatoryQuestionCount?: number;
  incompleteQuestionCount?: number;
  nodeId?: string;
  post?: string;
  pre?: string;
  questionnaireId?: string;
  retval?: string;
  status?: 'Init' | 'Skipped' | 'Completed';
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeActivityQuestionUpdate, trialexecCareplanConMedsActivityQuestionUpdate, trialexecCareplanMedicalHistoryActivityQuestionUpdate, trialexecCareplanVisitActivityQuestionUpdate]
 * Used in Objects[OutputSpecNode, ParticipantQuestionWithSpec, QuestionPayloadWitChangeLog]
 */
export interface ParticipantSpecNode {
  branchLevel?: number;
  carePlanId?: string;
  changeLogCount?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  hdmClassId?: string;
  hdmObjId?: string;
  holdbitmap?: number;
  lastChangeLogCount?: number;
  nodeId?: string;
  operationType?: OperationType;
  pre?: string;
  specNodeId?: string;
  status?: string;
  tildaid?: string;
  updatedat?: number;
  value?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanConMedsAddRowCreate, trialexecCareplanConMedsSaveRowCreate, trialexecCareplanMedicalHistoryAddRowCreate, trialexecCareplanMedicalHistorySaveRowCreate, trialexecV2CareplanVisitActivityTableCreate]
 * Used in Objects[OutputTableDetailsV2]
 */
export interface ParticipantTable {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tableId?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputTaskConfig]
 */
export interface ParticipantTaskConfig {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  taskConfigId?: string;
  tildaid?: string;
  updatedat?: number;
  value?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitTodoCreate, trialexecTaskTodoUpdate]
 * Used in Objects[OutputTodo]
 */
export interface ParticipantTodo {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tildaid?: string;
  todoId?: string;
  updatedat?: number;
  value?: boolean;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitTodoCreate, trialexecTaskTodoUpdate]
 * Used in Objects[OutputTodoSpec]
 */
export interface ParticipantTodoSpecNode {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tildaid?: string;
  todoSpecNodeId?: string;
  updatedat?: number;
  value?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputTodoV2]
 */
export interface ParticipantTodoV2 {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tildaid?: string;
  todoId?: string;
  updatedat?: number;
  value?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputVariable]
 */
export interface ParticipantVariable {
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  nodeId?: string;
  status?: string;
  tildaid?: string;
  updatedat?: number;
  value?: string;
  variableId?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitAllDetail, trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OPProtocolVisit, OPVisitActivityGraph, OutputVisitV2, VisitActivityGraph, VisitActivityGraphV2]
 */
export interface ParticipantVisit {
  appointmentDate?: string;
  branchLevel?: number;
  carePlanId?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  instantiated?: boolean;
  pre?: string;
  protocolId?: string;
  readyForCompletion?: boolean;
  signedOffByTeam?: number;
  status?:
    | 'Init'
    | 'Executable'
    | 'SchedulingInProgress'
    | 'SchedulingFailed'
    | 'ScheduleCancelled'
    | 'Scheduled'
    | 'NoShow'
    | 'PreVisitInProgress'
    | 'InProgress'
    | 'Completed'
    | 'ScreenFailed'
    | 'CompletedOffline'
    | 'PartiallyCompletedOffline'
    | 'Paused'
    | 'Locked';
  tildaid?: string;
  /** time in milliseconds */
  timeSpent?: number;
  updatedat?: number;
  visitId?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitDetail, trialexecCareplanVisitPreVisitTodoDetail]
 * Used in Objects[OutputPrePostVisit]
 */
export interface PrePostVisit {
  blob?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  dslTaskChildIds?: string[];
  function?: string;
  holdbitmap?: number;
  name?: string;
  nodeId?: string;
  parentIds?: string[];
  position?: number;
  post?: string;
  pre?: string;
  scopeId?: string;
  templateId?: number;
  tildaid?: string;
  todoChildIds?: string[];
  treeId?: string;
  type?: string;
  updatedat?: number;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2CareplanVisitSummaryDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OutputPrePostVisitV2]
 */
export interface PrePostVisitV2 {
  archivedtimestamp?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  objtype?: string;
  orgid?: string;
  prePostVisitType?: 'PreVisitType' | 'PostVisitType';
  scopeid?: string;
  state?: 'draft' | 'published' | 'archived';
  tildaid?: string;
  title?: string;
  type?:
    | 'QuestionnaireV2'
    | 'ScreenerV2'
    | 'ProtocolVersionV2'
    | 'ActivityV2'
    | 'VisitV2'
    | 'PrePostVisitV2'
    | 'CheckList'
    | 'TaskList'
    | 'DocumentSetV2'
    | 'WorkflowV2'
    | 'ControlV2'
    | 'Training'
    | 'Table'
    | 'MediaSet'
    | 'Media';
  updatedat?: number;
  version?: number;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanNotesCreate, trialexecProgressnoteDelete, trialexecProgressnoteDetail, trialexecProgressnoteUpdate]
 * Used in Objects[OPActivityDetails, OutputActivityDetails, OutputActivityDetailsV2, ActivitySidePanelProgressNote, CarePlanProgressNote, VisitSidePanelProgressNote]
 */
export interface ProgressNote {
  blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  tildaid?: string;
  updatedat?: number;
  who?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanPdCreate, trialexecCareplanPdUpdate, trialexecCareplanVisitPdCreate, trialexecCareplanVisitPdUpdate]
 * Used in Objects[OutputPDType, OutputSidePanelProtocolDeviation]
 */
export interface ProtocolDeviation {
  actionTaken?:
    | 'DiscontinuedFromStudy'
    | 'MedicationPaused'
    | 'None'
    | 'TBD'
    | 'Other';
  actionTakenExplain?: string;
  careplanId?: string;
  cause?: string;
  correctFutureAction?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  fileWithIRB?: boolean | null;
  holdbitmap?: number;
  impactOnDataQuality?: boolean | null;
  impactOnDataQualityExplain?: string;
  impactOnPSafety?: boolean | null;
  impactOnPSafetyExplain?: string;
  impactOnTrialInteg?: boolean | null;
  impactOnTrialIntegExplain?: string;
  pdId?: number;
  pvVisitId?: string;
  reason?: string;
  reasonExplain?: string;
  startDate?: string | null;
  startTime?: string | null;
  state?: 'Draft' | 'Pending' | 'Signoff' | 'Invalid';
  teamType?: string;
  tildaid?: string;
  typeOfDeviation?:
    | 'IEDeviations'
    | 'ActivityDeviation'
    | 'ConsentDeviation'
    | 'AssesmentDeviation'
    | 'DrugDeviation'
    | 'AEDeviation'
    | 'DataCollectionDeviation'
    | 'LostFollowUpDeviation'
    | 'PrematureDeviation'
    | 'VisitWindowDeviation'
    | 'Other';
  typeOfDeviationAPI?: string;
  typeOfDeviationExplain?: string;
  updatedat?: number;
  visitId?: string;
  whichEye?: 'OD' | 'OS' | 'OU' | 'NA';
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecProtocolCrfDetail, trialexecProtocolStudyprotocolDetail]
 * Used in Objects[StudyProtocol]
 */
export interface ProtocolVersion {
  author?: string;
  commitID: string;
  conditionByteBufferStr?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  dutyChildIds?: string[];
  holdbitmap?: number;
  /** Plandefinition or Form */
  name?: string;
  nodeId?: string;
  parentIds?: string[];
  parentProtocolVersionID?: string;
  position?: number;
  repository?: string;
  scopeId?: string;
  soFileName?: string;
  status?:
    | 'Init'
    | 'Draft'
    | 'Unpublished'
    | 'Published'
    | 'Active'
    | 'Deprecated'
    | 'Archived';
  studyName?: string;
  tildaid?: string;
  treeId?: string;
  updatedat?: number;
  userNames?: string[];
  variableChildIds?: string[];
  version?: string;
  visitChildIds?: string[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputQuestionDetails]
 */
export interface Question {
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  branchLevel?: number;
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  docPageList?: string;
  edcEnabled?: boolean;
  format?: string;
  function?: FunctionDef;
  hdmClass?: string;
  holdbitmap?: number;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  nodeId?: string;
  notes?: string;
  parentIds?: string[];
  path?: string;
  position?: number;
  post?: string;
  pre?: string;
  prePost?: string;
  recordName?: string;
  repeatCount?: number;
  retval?: string;
  scopeId?: number;
  specNodeChildIds?: string[];
  tag?: string;
  templateId?: string;
  tildaid?: string;
  title?: string;
  tlName?: string;
  treeId?: string;
  type?: 'Question' | 'Document' | 'Table' | 'eSign' | 'Statement';
  updatedat?: number;
  variableChildIds?: string[];
  /** Subject/CRC */
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitActivityCreate, trialexecStudyProtocolVisitActivityQuestionnaireCreate, publicTrialexecParticipantFormActivityQuestionnaireCreate]
 * Used in Objects[OutputQuestionnaire, OutputQuestionnaireDetails]
 */
export interface Questionnaire {
  anchorIdentifier?: string;
  author?: string;
  blob?: string;
  branchChildIds?: string[];
  branchLevel?: number;
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  function?: FunctionDef;
  holdbitmap?: number;
  location?: string;
  name?: string;
  nodeId?: string;
  notes?: string;
  parentIds?: string[];
  participant?: string;
  /** EDCEnabled bool `json:"edcEnabled"` */
  performer?: string;
  performerCapabilities?: string;
  position?: number;
  post?: string;
  pre?: string;
  questionChildIds?: string[];
  retval?: string;
  scopeId?: number;
  specNodeChildIds?: string[];
  /** GroupTag    int         `json:"groupTag"` */
  templateId?: number;
  tildaid?: string;
  title?: string;
  tlName?: string;
  treeId?: string;
  type?: string;
  updatedat?: number;
  variableChildIds?: string[];
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudySiteDutiesDetail]
 */
export interface RecommendedDutiesBySiteResponse {
  siteDutyMap?: Record<string, RecommendedDutiesResponse>;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyDutyDetail]
 * Used in Objects[RecommendedDutiesBySiteResponse]
 */
export interface RecommendedDutiesResponse {
  duties?: GroupedDuties[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyActorCreate, trialexecStudyActorUpdate]
 * Used in Objects[StudyActorPayload, StudyActorResponse2]
 */
export interface RoleResponse {
  applyToStudy?: boolean;
  displayName?: string;
  role?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanActorDetail, trialexecCareplanVisitActorsDetail]
 * Used in Objects[TagRoles]
 */
export interface RoleSites {
  applyToStudy?: boolean;
  displayName?: string;
  sites?: SiteDetails[];
  title?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanAeSignOffUpdate, trialexecCareplanAeTaskSignOffUpdate, trialexecCareplanVisitAeSignOffUpdate, trialexecCareplanVisitAeTaskSignOffUpdate, trialexecCareplanVisitSignOffCreate, trialexecParticipantFormSignOffCreate]
 */
export interface SignOffPayload {
  eSignID?: string;
  type?:
    | 'CRCSignOff'
    | 'InvestigatorSignOff'
    | 'QASignOff'
    | 'DASignOff'
    | 'MonitorSignOff'
    | 'ScribeSignOff';
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanSidePanelCreate, trialexecCareplanVisitSummaryDetail, trialexecV2CareplanVisitSummaryDetail, trialexecCareplanAeCompleteCreate, trialexecCareplanVisitActivityCompleteCreate, trialexecCareplanVisitActivitygraphDetail, trialexecCareplanVisitActivitySkipCreate, trialexecCareplanVisitAeCompleteCreate, trialexecStudyProtocolVisitActivitygraphDetail, trialexecV2CareplanVisitActivitygraphDetail, trialexecV2StudyProtocolVisitActivitygraphDetail]
 * Used in Objects[OutputSidePanelSignOff, OPProtocolVisit, OPVisitActivityGraph, OPVisitSummary, OutputVisitSummary, OutputVisitSummaryV2, VisitActivityGraph, VisitActivityGraphV2, OPVisit]
 */
export interface SignOffProgressList {
  changeLog?: ChangeLog;
  signNeeded?: boolean;
  type?:
    | 'CRCSignOff'
    | 'InvestigatorSignOff'
    | 'QASignOff'
    | 'DASignOff'
    | 'MonitorSignOff'
    | 'ScribeSignOff';
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyActorCreate, trialexecStudyActorUpdate]
 * Used in Objects[StudyActorPayload, RoleSites, RoleSitesPayload, StudyActorResponse2]
 */
export interface SiteDetails {
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  outputDuties?: StudySiteDuty[];
  roles?: string[];
  tildaid?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudySiteDetail]
 */
export interface SitesResponse {
  recommendedSites?: OutputSite[];
  sites?: OutputSite[];
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanAeSaveCreate, trialexecCareplanVisitActivityAllQuestionsCreate, trialexecCareplanVisitActivityQuestionSaveCreate, trialexecCareplanVisitActivitySaveCreate, trialexecCareplanVisitActivitySwitchToOfflineCreate, trialexecCareplanVisitActivitySwitchToOnlineCreate, trialexecCareplanVisitAeSaveCreate, trialexecParticipantFormActivityAllQuestionsCreate, trialexecParticipantFormActivitySaveCreate, trialexecStudyProtocolVisitActivityAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireAllQuestionsCreate, publicTrialexecParticipantFormActivityQuestionnaireSaveCreate, trialexecV2GetObjectTypesList, trialexecV2GetObjectTypesList]
 * Used in Objects[OutputSpecNode]
 */
export interface SpecNode {
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  branchLevel?: number;
  conditionIds?: string[];
  context?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  formelement?:
    | 'textbox'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'radioText'
    | 'checkboxText';
  grouptitle?: string;
  hdmclass?: string;
  hdmfield?: string;
  hdmfieldvalue?: string;
  hint?: string;
  holdbitmap?: number;
  isdynamic?: string;
  isvalue?: string;
  name?: string;
  nodeId?: string;
  nodeformat?:
    | 'string'
    | 'int'
    | 'float64'
    | 'date'
    | 'datetime'
    | 'time'
    | 'email'
    | 'phone';
  nodetype?: 'string' | 'int' | 'float64' | 'boolean';
  /** "strings" Options for answer, optional */
  options?: string;
  parentIds?: string[];
  path?: string;
  position?: number;
  post?: string;
  /** Points to ParentNode or a Branch */
  pre?: string;
  questionId?: string;
  /** Optional */
  required?: string;
  retval?: string;
  templateId?: number;
  tildaid?: string;
  /** Title to show Above form control */
  title?: string;
  treeId?: string;
  type?: string;
  updatedat?: number;
  /** Optional, */
  validation?: string;
  value?: string;
  variablename?: string;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputStatement]
 */
export interface Statement {
  archivedtimestamp?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  documents?: string[];
  holdbitmap?: number;
  /** Do we need a set of images, is there any order to enforce */
  images?: string[];
  objtype?: string;
  orgid?: string;
  scopeid?: string;
  state?: 'draft' | 'published' | 'archived';
  tildaid?: string;
  title?: string;
  updatedat?: number;
  version?: number;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanVisitActivityUpdate, trialexecCareplanVisitUpdate, trialexecStudyDutyplanDetail, trialexecStudyProtocolAdoptCreate, trialexecStudyProtocolCreate, trialexecStudyProtocolDelete, trialexecStudyProtocolPublishCreate]
 * Module[workflow]:Services[workflowPublishCreate, workflowStudyCreate, workflowStudyDelete]
 * Module[dsl]:Services[v1DslFormCreateCreate, v1DslStudyAnythingProtocolDelete, v1DslStudyProtocolCreate, v1DslStudyProtocolPublishCreate, v1DslWorkflowCreateCreate, v1DslWorkflowPublishCreate]
 */
export interface StatusResponseObj {
  count?: number;
  message?: string;
  object?: object;
  status?: number;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecCareplanActorDetail, trialexecCareplanVisitActorsDetail]
 * Used in Objects[OPVisitSummary, OutputVisitSummary, OutputVisitSummaryV2, StudySiteSidePanel, ListActorsOutput]
 */
export interface StudyActorResponse {
  applyToStudyRoleFlag?: string;
  capabilities?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  displayRoles?: string[];
  dutiesCount?: number;
  endDate?: string;
  holdbitmap?: number;
  id?: string;
  isBlinded?: boolean | null;
  lastLogin?: string;
  outputDuties?: StudySiteDuty[];
  profilePicId?: string;
  role?: string;
  roleSitesByTag?: TagRoles[];
  roles?: string[];
  scope?: string;
  startDate?: string;
  state?: 'Active' | 'Invited' | 'Inactive';
  tildaid?: string;
  updatedat?: number;
  userContact?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userTitle?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecStudyActorSidePanelDetail, trialexecStudyActorDetail]
 * Used in Objects[OutputActorSidePanel, ListActorsOutput2]
 */
export interface StudyActorResponse2 {
  applyToStudyRoleFlag?: string;
  capabilities?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  displayRoles?: string[];
  dutiesCount?: number;
  endDate?: string;
  holdbitmap?: number;
  id?: string;
  isBlinded?: boolean | null;
  lastLogin?: string;
  profilePicId?: string;
  role?: string;
  /** roles across study */
  roleResponse?: RoleResponse[];
  roles?: string[];
  scope?: string;
  /** roles and duties per site */
  siteDetails?: SiteDetails[];
  startDate?: string;
  state?: 'Active' | 'Invited' | 'Inactive';
  tildaid?: string;
  updatedat?: number;
  userContact?: string;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userTitle?: string;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyActorDutyDetail]
 * Used in Objects[SiteDetails, StudyActorResponse]
 */
export interface StudySiteDuty {
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  dutyId?: string;
  endApprovalSignComment?: string;
  endApprovalSignDate?: number;
  endApprovalSignId?: string;
  endDate?: string | null;
  holdbitmap?: number;
  number?: number;
  pendingEndDate?: string | null;
  removed?: boolean;
  staffSignComment?: string;
  staffSignDate?: number;
  staffSignId?: string;
  startApprovalSignComment?: string;
  startApprovalSignDate?: number;
  startApprovalSignId?: string;
  startDate?: string | null;
  status?: 'Pending' | 'Approved';
  tildaid?: string;
  title?: string;
  updatedat?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanActorDetail, trialexecCareplanVisitActorsDetail]
 * Used in Objects[StudyActorResponse]
 */
export interface TagRoles {
  roles?: RoleSites[];
  title?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputTaskConfig]
 */
export interface TaskConfig {
  activeAfter?: string;
  archivedtimestamp?: number;
  category?:
    | 'ScheduleVisit'
    | 'RescheduleVisit'
    | 'SetReminder'
    | 'DelegateDataEntry'
    | 'DataSignoffVisit'
    | 'InvestigatorSignoffVisit'
    | 'QASignoffVisit'
    | 'DASignoffVisit'
    | 'MonitorSignoffVisit'
    | 'ReviewQuery'
    | 'PreVisitChecklist'
    | 'PostVisitChecklist'
    | 'RequestProcedure'
    | 'DataSignoffForm'
    | 'ConsentActivity'
    | 'PIFActivity'
    | 'PIFReview'
    | 'HRRFActivity'
    | 'HRRFReview'
    | 'AdverseEventReview'
    | 'ProtocolDeviationReview'
    | 'PatientDiscontinuation'
    | 'DocumentSignoff'
    | 'RequestRecords'
    | 'DocumentQuery'
    | 'CreateRecord'
    | 'DOAStaffSignoff'
    | 'Signoff1572'
    | 'DOAInvestigatorSignoff'
    | 'TraineeSignoff'
    | 'TrainerSignoff'
    | 'Recruitment'
    | 'Other'
    | 'ActivityChecklist'
    | 'ControlChecklist'
    | 'Engagement'
    | 'VisitExpense'
    | 'BudgetInReview'
    | 'BudgetMissing';
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  dueBy?: string;
  holdbitmap?: number;
  name?: string;
  notify?: string;
  notifyType?: string;
  objtype?: string;
  orgid?: string;
  priority?: 'Risk' | 'High' | 'Medium' | 'Low' | 'None';
  repeat?: string;
  repeatEnd?: string;
  repeatTimes?: string;
  scopeid?: string;
  state?: 'draft' | 'published' | 'archived';
  taskType?: string;
  tildaid?: string;
  title?: string;
  updatedat?: number;
  version?: number;
  who?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitTodoCreate, trialexecTaskTodoUpdate]
 * Used in Objects[OutputTodo]
 */
export interface Todo {
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  function?: FunctionDef;
  holdbitmap?: number;
  name?: string;
  nodeId?: string;
  notes?: string;
  parentIds?: string[];
  position?: number;
  post?: string;
  pre?: string;
  preVisitId?: string;
  retval?: string;
  scopeId?: number;
  templateId?: number;
  tildaid?: string;
  title?: string;
  todoSpecNodeChildIds?: string[];
  treeId?: string;
  updatedat?: number;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecCareplanVisitPreVisitTodoCreate, trialexecTaskTodoUpdate]
 * Used in Objects[OutputTodoSpec]
 */
export interface TodoSpecNode {
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  function?: FunctionDef;
  holdbitmap?: number;
  name?: string;
  nodeId?: string;
  notes?: string;
  parentIds?: string[];
  position?: number;
  post?: string;
  pre?: string;
  required?: string;
  retval?: string;
  scopeId?: number;
  templateId?: number;
  tildaid?: string;
  title?: string;
  todoId?: string;
  treeId?: string;
  updatedat?: number;
  version?: string;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputTodoV2]
 */
export interface TodoV2 {
  archivedtimestamp?: number;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  holdbitmap?: number;
  name?: string;
  objtype?: string;
  state?: 'draft' | 'published' | 'archived';
  tildaid?: string;
  title?: string;
  updatedat?: number;
  version?: number;
}

/**
 *
 * Used in Module[trialexec]:Services[trialexecV2GetObjectTypesList]
 * Used in Objects[OutputVariable]
 */
export interface VariableV2 {
  createdat?: number;
  datatype?: 'STRING' | 'FLOAT' | 'BOOLEAN';
  default?: string;
  delpending?: boolean;
  deltimestamp?: number;
  hdmclass?: string;
  hdmfield?: string;
  holdbitmap?: number;
  name?: string;
  path?: string;
  tildaid?: string;
  type?: 'QUESTION' | 'USER DEFINED' | 'SYSTEM DEFINED';
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[trialexec]:Services[trialexecStudyVisitsDetail]
 * Used in Objects[OutputVisitSummary]
 */
export interface Visit {
  activityChildIds?: string[];
  anchorIdentifier?: string;
  blob?: string;
  branchChildIds?: string[];
  branchLevel?: number;
  conditionIds?: string[];
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  durationInMins?: number;
  function?: FunctionDef;
  holdbitmap?: number;
  interval?: string;
  isAnchorVisit?: boolean;
  location?: 'ON_SITE' | 'REMOTE' | 'FLEXIBLE';
  name?: string;
  nodeId?: string;
  notes?: string;
  numOfDaysFromAnchor?: number;
  parentIds?: string[];
  position?: number;
  post?: string;
  postVisitChildIds?: string[];
  pre?: string;
  preVisitChildIds?: string[];
  /** "8:00-12:00,13:00-15:00" */
  preferredTime?: string;
  retval?: string;
  scopeId?: number;
  specNodeChildIds?: string[];
  studyPeriod?:
    | 'Lead-In'
    | 'Screening'
    | 'Double Blind Treatment'
    | 'Single Blind Treatment'
    | 'Treatment'
    | 'Double Blind'
    | 'Double Blind Observation'
    | 'Observation'
    | 'Open Label'
    | 'Safety Follow Up'
    | 'End of Study'
    | 'Unscheduled';
  templateId?: number;
  tildaid?: string;
  title?: string;
  tlName?: string;
  treeId?: string;
  type?: string;
  updatedat?: number;
  variableChildIds?: string[];
  who?: string;
}

/**
 *
 * Service Root object
 * Module[users]:Services[rolesList]
 */
export interface Role {
  /** Whether this role is part of DoA log */
  assignDuty?: boolean;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  /** Description */
  description?: string;
  /** Display name (for UI) */
  displayName?: string;
  /** Whether this role is a non-staff (external) to the organization */
  external?: boolean;
  holdbitmap?: number;
  /** Whether to list/display this role */
  listed?: boolean;
  /** Identifier used in the code */
  name: string;
  /** Whether this role has PII access */
  piiAccess?: boolean;
  /** Tags to be used for filtering */
  tags?: string;
  tildaid?: string;
  updatedat?: number;
}

/**
 *
 * Service Root object
 * Module[workflow]:Services[workflowCreate]
 */
export interface AddParticipantWorkflowRequest {
  eventInfo?: string;
  operation?: string;
  scope?: string;
  scopeObjId?: string;
  studyId?: string;
}

/**
 *
 * Service Root object
 * Module[workflow]:Services[workflowDelete]
 */
export interface DeleteParticipantWorkflowRequest {
  orgAlias?: string;
  scope?: string;
  scopeObjId?: string;
  studyId?: string;
}

/**
 *
 * Service Root object
 * Module[workflow]:Services[workflowList]
 */
export interface OPWorkflow {
  createdBy?: string;
  createdat?: number;
  delpending?: boolean;
  deltimestamp?: number;
  description?: string;
  holdbitmap?: number;
  name?: string;
  publishedCount?: number;
  tildaid?: string;
  updatedat?: number;
}
