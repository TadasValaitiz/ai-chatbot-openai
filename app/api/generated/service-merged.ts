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

import { ApiConfig } from './http-client';
import {
  Advocacy,
  Chartreviews,
  Crlists,
  Documents,
  Dsl,
  EhrRuns,
  Emrs,
  Esign,
  Events,
  Filters,
  Fin,
  Inboxes,
  Leads,
  MedicalGroups,
  Monitor,
  Myprofile,
  Notif,
  Organizations,
  Partners,
  Patients,
  Register,
  Reports,
  Sched,
  Sites,
  Sponsors,
  Studies,
  Studio,
  Tasks,
  Trialexec,
  Users,
  Workflow
} from './services';

export const createMergedApi = (config?: ApiConfig) => {
  return {
    ...new Advocacy(config),
    ...new Chartreviews(config),
    ...new Crlists(config),
    ...new Documents(config),
    ...new EhrRuns(config),
    ...new Emrs(config),
    ...new Esign(config),
    ...new Events(config),
    ...new Filters(config),
    ...new Inboxes(config),
    ...new Leads(config),
    ...new MedicalGroups(config),
    ...new Monitor(config),
    ...new Myprofile(config),
    ...new Organizations(config),
    ...new Partners(config),
    ...new Patients(config),
    ...new Reports(config),
    ...new Sites(config),
    ...new Sponsors(config),
    ...new Studies(config),
    ...new Studio(config),
    ...new Tasks(config),
    ...new Trialexec(config),
    ...new Users(config),
    ...new Workflow(config),
    ...new Register(config),
    ...new Dsl(config),
    ...new Fin(config),
    ...new Notif(config),
    ...new Sched(config)
  };
};
