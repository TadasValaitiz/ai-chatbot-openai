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
  AddQueryPayload,
  AnnotationUpdate,
  Binder,
  CreateDocAssignmentInputs,
  DoaLogData,
  DocAnnotationCommon,
  DocFieldSpec,
  DocSignerSpec,
  DocTaskInputs,
  DocTaskOutput,
  DocUpdateInputs,
  Document,
  DocumentContents,
  DocumentDetails,
  DocumentScopes,
  DocumentShare,
  DocumentShareInput,
  Folder,
  FolderInput,
  FolderView,
  FoldersAndDocuments,
  Info1572,
  InputDocTypeDetails,
  InputDocumentComment,
  InputDocumentCommentThread,
  ListDocumentResponse,
  OutputDocTypeDetails,
  QueryDetails,
  QuerylibQueryDeletePayload,
  QuerylibQueryReplyPayload,
  QuerylibQueryUpdatePayload,
  RejectComment,
  SignerType,
  SuggestedDocTypeDetails,
  Task,
  UpdateDocAssignmentInputs,
  User
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Documents<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Update signers, fields and logs for instance(document) created from a template
   *
   * @tags Docsvc
   * @name DocumentsAnnotationsUpdate
   * @summary Update instance document
   * @request PUT:/api/documents/{documentID}/annotations
   */
  documentsAnnotationsUpdate = (
    documentId: string,
    data: AnnotationUpdate,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/annotations`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Delete documents permanently from archived state, in bulk; Only supported on archived documents
   *
   * @tags Docsvc
   * @name DocumentsArchivesDelete
   * @summary Delete the archived documents permanently
   * @request DELETE:/api/documents/archives
   * @secure
   */
  documentsArchivesDelete = (data: string[], params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/documents/archives`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create the document assignment: DocumentSignoff
   *
   * @tags Docsvc
   * @name DocumentsAssignmentsCreate
   * @summary Create document assignment(task) for a document
   * @request POST:/api/documents/{documentID}/assignments
   * @secure
   */
  documentsAssignmentsCreate = (
    documentId: string,
    data: CreateDocAssignmentInputs,
    params: RequestParams = {}
  ) =>
    this.request<Task[], void>({
      path: `/api/documents/${documentId}/assignments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update/Close the document assignment: DocumentSignoff
   *
   * @tags Docsvc
   * @name DocumentsAssignmentsUpdate
   * @summary Update document assignment(task) for a document
   * @request PUT:/api/documents/{documentID}/assignments
   * @secure
   */
  documentsAssignmentsUpdate = (
    documentId: string,
    data: UpdateDocAssignmentInputs,
    params: RequestParams = {}
  ) =>
    this.request<Task, void>({
      path: `/api/documents/${documentId}/assignments`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Create a new document binder
   *
   * @tags Docsvc
   * @name DocumentsBindersCreate
   * @summary Create a new document binder
   * @request POST:/api/documents/binders
   * @secure
   */
  documentsBindersCreate = (data: Binder, params: RequestParams = {}) =>
    this.request<Binder, void>({
      path: `/api/documents/binders`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Delete a document binder
   *
   * @tags Docsvc
   * @name DocumentsBindersDelete
   * @summary Delete a document binder
   * @request DELETE:/api/documents/binders/{binderId}
   * @secure
   */
  documentsBindersDelete = (binderId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/documents/binders/${binderId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get list of document binders
   *
   * @tags Docsvc
   * @name DocumentsBindersList
   * @summary Get list of document binders
   * @request GET:/api/documents/binders
   * @secure
   */
  documentsBindersList = (
    query?: {
      /** scope of the binder: Usually 'Organization', 'Study', 'Site, 'User' */
      scope?: string;
      /** tildaid of the scope object */
      scopeId?: string;
      /** tag associated with the binder */
      tag?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<Binder[], void>({
      path: `/api/documents/binders`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Add new comment to a document
   *
   * @tags Docsvc
   * @name DocumentsCommentsCreate
   * @summary Add new comment to a document
   * @request POST:/api/documents/{documentID}/comments
   */
  documentsCommentsCreate = (
    documentId: string,
    data: InputDocumentCommentThread,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/comments`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Add (append) new replay to existing comment-chain
   *
   * @tags Docsvc
   * @name DocumentsCommentsCreate2
   * @summary Add (append) new replay to existing comment-chain
   * @request POST:/api/documents/{documentID}/comments/{commentID}
   * @originalName documentsCommentsCreate
   * @duplicate
   */
  documentsCommentsCreate2 = (
    documentId: string,
    commentId: string,
    data: InputDocumentComment,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/comments/${commentId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Delete existing comment or entire comment-thread of a document
   *
   * @tags Docsvc
   * @name DocumentsCommentsDelete
   * @summary Delete existing comment or entire comment-thread of a document
   * @request DELETE:/api/documents/{documentID}/comments/{commentID}
   */
  documentsCommentsDelete = (
    documentId: string,
    commentId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/comments/${commentId}`,
      method: 'DELETE',
      ...params
    });
  /**
   * @description Update existing comment in a document
   *
   * @tags Docsvc
   * @name DocumentsCommentsUpdate
   * @summary Update existing comment in a document
   * @request PUT:/api/documents/{documentID}/comments/{commentID}
   */
  documentsCommentsUpdate = (
    documentId: string,
    commentId: string,
    data: InputDocumentComment,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/comments/${commentId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create/Upload a new document
   *
   * @tags Docsvc
   * @name DocumentsCreate
   * @summary Create/Upload a new document
   * @request POST:/api/documents
   * @secure
   */
  documentsCreate = (
    data: {
      allowDuplicate?: string;
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
      /** attestation string to be used for certification */
      attestation?: string;
      autoRename?: string;
      /** blinded access of the document */
      blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
      changeType:
        | 'doctype'
        | 'association'
        | 'doctype_and_association'
        | 'annotation_change'
        | 'content_change';
      /** document content type: */
      contentType: string;
      /** id of another document (template) to copy from */
      copyFrom?: string;
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
      folderIds?: string[];
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
      /** filename for the document to be uploaded/modified - Overrides FileName of the content */
      originalFileName?: string;
      /** tildaid of the patient related to the document */
      patientId?: string;
      /** tildaid of the site related to the document */
      siteId?: string;
      /** Whether attestation should be skipped (since it is done inside the document) */
      skipAttestation?: string;
      /** tildaid of the study related to the document */
      studyId?: string;
      /** list of tags to be added */
      tags?: string;
      /** whether this document is a template */
      template: boolean;
      /** generation(version) of template  This can be used with CopyFrom(internal copy) or w/o CopyFrom(the template is being used to update document by UI directly) */
      templateGeneration?: string;
      /** tildaid of the user related to the document */
      userId?: string;
      /** tildaid of the visit related to the document */
      visitId?: string;
      /**
       * File being uploaded
       * @format binary
       */
      file: File;
    },
    params: RequestParams = {}
  ) =>
    this.request<DocumentDetails, void>({
      path: `/api/documents`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params
    });
  /**
   * @description Bulk archive documents
   *
   * @tags Docsvc
   * @name DocumentsDelete
   * @summary Archive documents
   * @request DELETE:/api/documents
   * @secure
   */
  documentsDelete = (data: string[], params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/documents`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Delete a document
   *
   * @tags Docsvc
   * @name DocumentsDelete2
   * @summary Delete a document
   * @request DELETE:/api/documents/{documentID}
   * @originalName documentsDelete
   * @duplicate
   * @secure
   */
  documentsDelete2 = (documentId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get details of a document
   *
   * @tags Docsvc
   * @name DocumentsDetail
   * @summary Get details of a document
   * @request GET:/api/documents/{documentID}
   * @secure
   */
  documentsDetail = (
    documentId: string,
    query?: {
      /** key-value pairs for keywords and colors to be used in a highlighted document */
      query?: object;
    },
    params: RequestParams = {}
  ) =>
    this.request<DocumentDetails, void>({
      path: `/api/documents/${documentId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Esign one or more StudySiteDuty objects belonging to you OR you as a PI
   *
   * @tags Docsvc
   * @name DocumentsDutyEntryUpdate
   * @summary Esign one or more StudySiteDuty objects (which are part of DOA log document)
   * @request PUT:/api/documents/dutyEntry
   * @secure
   */
  documentsDutyEntryUpdate = (
    query: {
      /** comma separated list of StudySiteDuty tildaids */
      dutyEntries: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/dutyEntry`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description eSign a document
   *
   * @tags Docsvc
   * @name DocumentsEsignUpdate
   * @summary eSign a document
   * @request PUT:/api/documents/esign/{documentID}
   * @secure
   */
  documentsEsignUpdate = (
    documentId: string,
    query?: {
      /** Task to be used as a context for this esign */
      taskId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/esign/${documentId}`,
      method: 'PUT',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Add multiple documents to the multiple folder
   *
   * @tags Docsvc
   * @name DocumentsFoldersContentCreate
   * @summary Add multiple documents to the multiple folder
   * @request POST:/api/documents/folders/content
   * @secure
   */
  documentsFoldersContentCreate = (
    data: FoldersAndDocuments,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/folders/content`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Add documents to the folder
   *
   * @tags Docsvc
   * @name DocumentsFoldersContentCreate2
   * @summary Add documents to the folder
   * @request POST:/api/documents/folders/{folderId}/content
   * @originalName documentsFoldersContentCreate
   * @duplicate
   * @secure
   */
  documentsFoldersContentCreate2 = (
    folderId: string,
    data: string[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/folders/${folderId}/content`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Remove documents from the folder
   *
   * @tags Docsvc
   * @name DocumentsFoldersContentDelete
   * @summary Remove documents from the folder
   * @request DELETE:/api/documents/folders/{folderId}/content
   * @secure
   */
  documentsFoldersContentDelete = (
    folderId: string,
    data: string[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/folders/${folderId}/content`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Create Folder
   *
   * @tags Docsvc
   * @name DocumentsFoldersCreate
   * @summary Create Folder
   * @request POST:/api/documents/folders
   * @secure
   */
  documentsFoldersCreate = (data: FolderInput, params: RequestParams = {}) =>
    this.request<Folder, void>({
      path: `/api/documents/folders`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Detach documents(if any) and deletes the Folder
   *
   * @tags Docsvc
   * @name DocumentsFoldersDelete
   * @summary Delete Folder
   * @request DELETE:/api/documents/folders/{folderId}
   * @secure
   */
  documentsFoldersDelete = (folderId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/documents/folders/${folderId}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get folder view along with counters and contents
   *
   * @tags Docsvc
   * @name DocumentsFoldersDetail
   * @summary Get folder view
   * @request GET:/api/documents/folders/{folderId}
   * @secure
   */
  documentsFoldersDetail = (folderId: string, params: RequestParams = {}) =>
    this.request<FolderView, void>({
      path: `/api/documents/folders/${folderId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Duplicates the folder in the same directory with a suffix " Copy"
   *
   * @tags Docsvc
   * @name DocumentsFoldersDuplicateCreate
   * @summary Duplicate Folder
   * @request POST:/api/documents/folders/{folderId}/duplicate
   * @secure
   */
  documentsFoldersDuplicateCreate = (
    folderId: string,
    params: RequestParams = {}
  ) =>
    this.request<Folder, void>({
      path: `/api/documents/folders/${folderId}/duplicate`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List folders along with document counters: both Tilda-Folders and My-Folders
   *
   * @tags Docsvc
   * @name DocumentsFoldersList
   * @summary List all folders
   * @request GET:/api/documents/folders
   * @secure
   */
  documentsFoldersList = (
    query?: {
      /** Get particular folders only: comma seperated list of root folders. Enum: `Regulatory, Site, Patient, User, Other, eTMF` */
      folders?: string;
      /** Filter documents for given Reviewer (user tildaid) */
      reviewedBy?: string;
      /** Filter documents Assigned To (user tildaid) */
      assignedTo?: string;
      /** Filter documents Owned/Uploaded By (user tildaid) */
      ownedBy?: string;
      /** Filter documents by: comma separated list of users */
      user?: string;
      /** Filter documents by: comma separated list of studies */
      study?: string;
      /** Filter documents by: Related to a Site */
      site?: string;
      /** Filter documents by: Related to a Visit */
      visit?: string;
      /** Filter documents by: comma separated list of patients */
      patient?: string;
      /** Filter documents by: comma separated list of folders */
      folderId?: string;
      /** Filter documents of a certain type */
      docType?: string;
      /** List folders of a certain type; Enums: [Basic, Filter] */
      folderType?: string;
      /** Filter documents with given status */
      status?: string;
      /** Filter documents with archived flag */
      archived?: boolean;
      /** List documents with filename search */
      searchStr?: string;
      /** List documents containing the keyword */
      keyword?: string;
      /** List documents uploaded after given timestamp */
      uploadedAfter?: string;
      /** Whether to include counters for folder listing */
      counters?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<FolderView[], void>({
      path: `/api/documents/folders`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update Folder(Atm, Name and ParentFolder are editable)
   *
   * @tags Docsvc
   * @name DocumentsFoldersUpdate
   * @summary Update Folder
   * @request PUT:/api/documents/folders/{folderId}
   * @secure
   */
  documentsFoldersUpdate = (
    folderId: string,
    data: FolderInput,
    params: RequestParams = {}
  ) =>
    this.request<Folder, void>({
      path: `/api/documents/folders/${folderId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List documents with given criteria
   *
   * @tags Docsvc
   * @name DocumentsList
   * @summary List documents with given criteria
   * @request GET:/api/documents
   * @secure
   */
  documentsList = (
    query: {
      /** Filter documents for given Reviewer (user tildaid) */
      reviewedBy?: string;
      /** Filter documents Assigned To (user tildaid) */
      assignedTo?: string;
      /** Filter documents Owned/Uploaded By (user tildaid) */
      ownedBy?: string;
      /** Filter documents by: comma separated list of users */
      user?: string;
      /** Filter documents by: comma separated list of studies */
      study?: string;
      /** Filter documents by: Related to a Site */
      site?: string;
      /** Filter documents by: Related to a Visit */
      visit?: string;
      /** Filter documents by: comma separated list of patients */
      patient?: string;
      /** Filter documents by: comma separated list of tildaids of folders */
      folderId?: string;
      /** Filter documents by: type of the folder */
      folderType?: string;
      /** Filter documents by: comma separated list of 'Basic' root folders(Regulatory,Site,User,Patient) */
      folders?: string;
      /** Filter documents of a certain type */
      docType?: string;
      /** Filter documents with given status */
      status?: string;
      /** Filter documents with archived flag */
      archived?: boolean;
      /** Sort document-list using one of the fields ('fileName','doc.fileName','site','study','reviewDate','reviewer','assignee'). By default sort by descending value of creation timestamp */
      sort?: string;
      /** Sort Descending (true) or Ascending (false) */
      desc?: boolean;
      /** Number of documents in the list */
      limit: number;
      /** Starting document number in the list */
      skip: number;
      /** List documents with filename search */
      searchStr?: string;
      /** List documents containing the keyword */
      keyword?: string;
      /** List documents uploaded after given timestamp */
      uploadedAfter?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ListDocumentResponse, void>({
      path: `/api/documents`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Create/Upload a new document
   *
   * @tags Docsvc
   * @name DocumentsLiveCreate
   * @summary Create/Upload a new document
   * @request POST:/api/documents/live
   * @secure
   */
  documentsLiveCreate = (
    data: {
      allowDuplicate?: string;
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
      /** attestation string to be used for certification */
      attestation?: string;
      autoRename?: string;
      /** blinded access of the document */
      blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
      changeType:
        | 'doctype'
        | 'association'
        | 'doctype_and_association'
        | 'annotation_change'
        | 'content_change';
      /** document content type: */
      contentType: string;
      /** id of another document (template) to copy from */
      copyFrom?: string;
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
      folderIds?: string[];
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
      /** filename for the document to be uploaded/modified - Overrides FileName of the content */
      originalFileName?: string;
      /** tildaid of the patient related to the document */
      patientId?: string;
      /** tildaid of the site related to the document */
      siteId?: string;
      /** Whether attestation should be skipped (since it is done inside the document) */
      skipAttestation?: string;
      /** tildaid of the study related to the document */
      studyId?: string;
      /** list of tags to be added */
      tags?: string;
      /** whether this document is a template */
      template: boolean;
      /** generation(version) of template  This can be used with CopyFrom(internal copy) or w/o CopyFrom(the template is being used to update document by UI directly) */
      templateGeneration?: string;
      /** tildaid of the user related to the document */
      userId?: string;
      /** tildaid of the visit related to the document */
      visitId?: string;
      /**
       * File being uploaded
       * @format binary
       */
      file: File;
    },
    params: RequestParams = {}
  ) =>
    this.request<DocumentDetails, void>({
      path: `/api/documents/live`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params
    });
  /**
   * @description Get suggested document types for set of documents
   *
   * @tags Docsvc
   * @name DocumentsMlTypesList
   * @summary Get suggested document types for set of documents
   * @request GET:/api/documents/mlTypes
   * @secure
   */
  documentsMlTypesList = (
    query: {
      /** comma separated list of documet ids */
      docIds: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<SuggestedDocTypeDetails[], void>({
      path: `/api/documents/mlTypes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update metadata for multiple documents
   *
   * @tags Docsvc
   * @name DocumentsPartialUpdate
   * @summary Update metadata for multiple documents
   * @request PATCH:/api/documents
   * @secure
   */
  documentsPartialUpdate = (
    data: DocUpdateInputs[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Add new query to a document
   *
   * @tags Docsvc
   * @name DocumentsQueryCreate
   * @summary Add new query to a document
   * @request POST:/api/documents/{documentID}/query
   */
  documentsQueryCreate = (
    documentId: string,
    data: AddQueryPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/query`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Add (append) new replay to existing query
   *
   * @tags Docsvc
   * @name DocumentsQueryCreate2
   * @summary Add (append) new replay to existing query
   * @request POST:/api/documents/{documentID}/query/{queryID}
   * @originalName documentsQueryCreate
   * @duplicate
   */
  documentsQueryCreate2 = (
    documentId: string,
    queryId: string,
    data: QuerylibQueryReplyPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/query/${queryId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Delete existing comment or entire comment-thread of a document
   *
   * @tags Docsvc
   * @name DocumentsQueryDelete
   * @summary Delete existing comment or entire comment-thread of a document
   * @request DELETE:/api/documents/{documentID}/query/{queryID}
   */
  documentsQueryDelete = (
    documentId: string,
    queryId: string,
    data: QuerylibQueryDeletePayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/query/${queryId}`,
      method: 'DELETE',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get details of a document query
   *
   * @tags Docsvc
   * @name DocumentsQueryDetail
   * @summary Get details of a document query
   * @request GET:/api/documents/{documentID}/query/{queryID}
   */
  documentsQueryDetail = (
    documentId: string,
    queryId: string,
    params: RequestParams = {}
  ) =>
    this.request<QueryDetails, void>({
      path: `/api/documents/${documentId}/query/${queryId}`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Update existing comment in a document
   *
   * @tags Docsvc
   * @name DocumentsQueryUpdate
   * @summary Update existing comment in a document
   * @request PUT:/api/documents/{documentID}/query/{queryID}
   */
  documentsQueryUpdate = (
    documentId: string,
    queryId: string,
    data: QuerylibQueryUpdatePayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/query/${queryId}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Reject a document
   *
   * @tags Docsvc
   * @name DocumentsRejectUpdate
   * @summary Reject a document
   * @request PUT:/api/documents/{documentID}/reject
   */
  documentsRejectUpdate = (
    documentId: string,
    data: RejectComment,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/reject`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description List studies, users and patients which can be used for documents to be created/viewed by current user
   *
   * @tags Docsvc
   * @name DocumentsScopesList
   * @summary List scopes allowed for document management
   * @request GET:/api/documents/scopes
   * @secure
   */
  documentsScopesList = (
    query: {
      /** Study (tildaid) to use as filter/context for scopes */
      study: string;
      /** Site (tildaid) to use as filter/context for scopes */
      site: string;
      /** scope to be returned; supported values - user, study, site, patient, subject */
      scope: string;
      /** search string to limit the list */
      searchStr?: string;
      /** Starting records to be returned */
      skip: number;
      /** Number of records to be returned */
      limit: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<DocumentScopes, void>({
      path: `/api/documents/scopes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Share document with other Org
   *
   * @tags Docsvc
   * @name DocumentsShareCreate
   * @summary Share document with other Org
   * @request POST:/api/documents/{documentID}/share
   * @secure
   */
  documentsShareCreate = (
    documentId: string,
    data: DocumentShareInput,
    params: RequestParams = {}
  ) =>
    this.request<DocumentShare, void>({
      path: `/api/documents/${documentId}/share`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update DocumentShare
   *
   * @tags Docsvc
   * @name DocumentsShareUpdate
   * @summary Update DocumentShare
   * @request PUT:/api/documents/{documentID}/share
   * @secure
   */
  documentsShareUpdate = (
    documentId: string,
    data: DocumentShareInput,
    params: RequestParams = {}
  ) =>
    this.request<DocumentShare, void>({
      path: `/api/documents/${documentId}/share`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Update tags of a document
   *
   * @tags Docsvc
   * @name DocumentsTagUpdate
   * @summary Update tags of a document
   * @request PUT:/api/documents/{documentID}/tag
   */
  documentsTagUpdate = (
    documentId: string,
    query: {
      /** comma separated list of tags */
      tags: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/tag`,
      method: 'PUT',
      query: query,
      ...params
    });
  /**
   * @description Create task for documents: RequestRecords or DocumentSignoff
   *
   * @tags Docsvc
   * @name DocumentsTasksCreate
   * @summary Create task for documents
   * @request POST:/api/documents/tasks
   * @secure
   */
  documentsTasksCreate = (data: DocTaskInputs, params: RequestParams = {}) =>
    this.request<Task, void>({
      path: `/api/documents/tasks`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Get details for a document task: RequestRecords, DocumentSignoff, DocumentQuery
   *
   * @tags Docsvc
   * @name DocumentsTasksDetail
   * @summary Get details for a document task
   * @request GET:/api/documents/tasks/{taskID}
   * @secure
   */
  documentsTasksDetail = (taskId: string, params: RequestParams = {}) =>
    this.request<DocTaskOutput, void>({
      path: `/api/documents/tasks/${taskId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update a document task. The only applicable update is to mark the task complete
   *
   * @tags Docsvc
   * @name DocumentsTasksUpdate
   * @summary Update a document task
   * @request PUT:/api/documents/tasks/{taskID}
   * @secure
   */
  documentsTasksUpdate = (taskId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/documents/tasks/${taskId}`,
      method: 'PUT',
      secure: true,
      ...params
    });
  /**
   * @description Remove a field from an existing annotation
   *
   * @tags Docsvc
   * @name DocumentsTemplateFieldsDelete
   * @summary Remove a field from an annotation
   * @request DELETE:/api/documents/{documentID}/template/fields/{fieldId}
   */
  documentsTemplateFieldsDelete = (
    documentId: string,
    fieldId: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/template/fields/${fieldId}`,
      method: 'DELETE',
      ...params
    });
  /**
   * @description Add or update fields of an existing annotation
   *
   * @tags Docsvc
   * @name DocumentsTemplateFieldsUpdate
   * @summary Add or update fields of an annotation
   * @request PUT:/api/documents/{documentID}/template/fields
   */
  documentsTemplateFieldsUpdate = (
    documentId: string,
    data: DocFieldSpec[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/template/fields`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Remove a signer from an existing annotation
   *
   * @tags Docsvc
   * @name DocumentsTemplateSignersDelete
   * @summary Remove signer from an annotation
   * @request DELETE:/api/documents/{documentID}/template/signers/{signerId}
   */
  documentsTemplateSignersDelete = (
    documentId: string,
    signerId: string,
    query?: {
      /** (Future enhancement) remove signer along with all associated fields */
      force?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/template/signers/${signerId}`,
      method: 'DELETE',
      query: query,
      ...params
    });
  /**
   * @description Get list of possible signer (types) for template
   *
   * @tags Docsvc
   * @name DocumentsTemplateSignersDetail
   * @summary Get list of possible signer (types) for template
   * @request GET:/api/documents/{documentID}/template/signers
   */
  documentsTemplateSignersDetail = (
    documentId: string,
    params: RequestParams = {}
  ) =>
    this.request<SignerType[], void>({
      path: `/api/documents/${documentId}/template/signers`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Add or update signers of a template
   *
   * @tags Docsvc
   * @name DocumentsTemplateSignersUpdate
   * @summary Add or update signers of a template
   * @request PUT:/api/documents/{documentID}/template/signers
   */
  documentsTemplateSignersUpdate = (
    documentId: string,
    data: DocSignerSpec[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/template/signers`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Convert a document to template or update the template info
   *
   * @tags Docsvc
   * @name DocumentsTemplateUpdate
   * @summary Update document template
   * @request PUT:/api/documents/{documentID}/template
   */
  documentsTemplateUpdate = (
    documentId: string,
    data: DocAnnotationCommon,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/documents/${documentId}/template`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Creates document type, which is Organization specific
   *
   * @tags Docsvc
   * @name DocumentsTypesCreate
   * @summary Creates document type
   * @request POST:/api/documents/types
   * @secure
   */
  documentsTypesCreate = (
    data: InputDocTypeDetails,
    params: RequestParams = {}
  ) =>
    this.request<OutputDocTypeDetails, void>({
      path: `/api/documents/types`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description List document types
   *
   * @tags Docsvc
   * @name DocumentsTypesList
   * @summary List document types
   * @request GET:/api/documents/types
   * @secure
   */
  documentsTypesList = (
    query?: {
      /** Filter document types with respect to the object (Type) that it can be associated with */
      associatedWithType?: string;
      /** Tildaid of the associated object(when type=Task) */
      associatedWithId?: string;
      /** Filter document types with respect to the context(Global/Organization) */
      context?: string;
      /** List template types instead of document types */
      template?: boolean;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputDocTypeDetails[], void>({
      path: `/api/documents/types`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Unrchive documents
   *
   * @tags Docsvc
   * @name DocumentsUnarchiveUpdate
   * @summary Unarchive documents
   * @request PUT:/api/documents/unarchive
   * @secure
   */
  documentsUnarchiveUpdate = (data: string[], params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/documents/unarchive`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Update document contents
   *
   * @tags Docsvc
   * @name DocumentsUpdate
   * @summary Update document contents
   * @request PUT:/api/documents/{documentID}
   * @secure
   */
  documentsUpdate = (
    documentId: string,
    data: {
      allowDuplicate?: string;
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
      /** attestation string to be used for certification */
      attestation?: string;
      autoRename?: string;
      /** blinded access of the document */
      blindedAccess?: 'Blinded' | 'BlindedOnly' | 'UnBlinded';
      changeType:
        | 'doctype'
        | 'association'
        | 'doctype_and_association'
        | 'annotation_change'
        | 'content_change';
      /** document content type: */
      contentType: string;
      /** id of another document (template) to copy from */
      copyFrom?: string;
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
      folderIds?: string[];
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
      /** filename for the document to be uploaded/modified - Overrides FileName of the content */
      originalFileName?: string;
      /** tildaid of the patient related to the document */
      patientId?: string;
      /** tildaid of the site related to the document */
      siteId?: string;
      /** Whether attestation should be skipped (since it is done inside the document) */
      skipAttestation?: string;
      /** tildaid of the study related to the document */
      studyId?: string;
      /** list of tags to be added */
      tags?: string;
      /** whether this document is a template */
      template: boolean;
      /** generation(version) of template  This can be used with CopyFrom(internal copy) or w/o CopyFrom(the template is being used to update document by UI directly) */
      templateGeneration?: string;
      /** tildaid of the user related to the document */
      userId?: string;
      /** tildaid of the visit related to the document */
      visitId?: string;
      /**
       * File being uploaded
       * @format binary
       */
      file: File;
    },
    params: RequestParams = {}
  ) =>
    this.request<Document, void>({
      path: `/api/documents/${documentId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params
    });
  /**
   * @description Get list of users who can use given document (for review, etc.)
   *
   * @tags Docsvc
   * @name DocumentsUsersDetail
   * @summary Get list of potential users of a document
   * @request GET:/api/documents/{documentID}/users
   */
  documentsUsersDetail = (
    documentId: string,
    query?: {
      /** Role of the user */
      role?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<User[], void>({
      path: `/api/documents/${documentId}/users`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Get contents of a document with specific version
   *
   * @tags Docsvc
   * @name DocumentsVersionDetail
   * @summary Get contents of a document with specific version
   * @request GET:/api/documents/{documentID}/version/{generationId}
   * @secure
   */
  documentsVersionDetail = (
    documentId: string,
    generationId: string,
    params: RequestParams = {}
  ) =>
    this.request<DocumentContents, void>({
      path: `/api/documents/${documentId}/version/${generationId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description No real API, created only for swagger definition
   *
   * @tags Docsvc
   * @name DocTypes1572List
   * @summary No real API, created only for swagger definition
   * @request GET:/api/docTypes/1572
   * @secure
   */
  docTypes1572List = (data?: Info1572, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/docTypes/1572`,
      method: 'GET',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description No real API, created only for swagger definition
   *
   * @tags Docsvc
   * @name DocTypesDoaList
   * @summary No real API, created only for swagger definition
   * @request GET:/api/docTypes/doa
   * @secure
   */
  docTypesDoaList = (data?: DoaLogData, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/docTypes/doa`,
      method: 'GET',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
}
