import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminOptions } from '../models/admin-options.model';
import { AdminPlans } from '../models/admin-plans.model';
import { Claim } from '../models/claim-approval.model';
import { NewApproval } from '../models/new-approval.model';
import { Admin } from '../models/admin-model';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private policiesIssuedEndpoint = environment.policiesIssuedEndpoint;
  private newApprovalEndpoint = environment.newApprovalEndpoint;
  private claimsApprovalEndpoint = environment.claimsApprovalEndpoint;
  private adminPlansEndpoint = environment.adminPlansEndpoint;
  private adminOptionsEndpoint = environment.adminOptionsEndpoint;
  private totalPremiumAmountEndpoint = environment.totalPremiumAmountEndpoint;
  private vehicleSourcesEndpoint = environment.vehicleSourcesEndpoint;
  private proposalStatusEndpoint = environment.proposalStatusEndpoint;
  private adminEndpoint = environment.adminEndpoint;

  constructor(private HttpClient: HttpClient) { }

  /* Dashboard */
  /* Policies Issued */
  getTotalPoliciesIssued(): Observable<any> {
    return this.HttpClient.get(this.policiesIssuedEndpoint);
  }

  /* Total Premium */
  getTotalActivePremium(): Observable<number> {
    return this.HttpClient.get<number>(this.totalPremiumAmountEndpoint);
  }

  /* Vehicle Sources */
  getVehicleSources(): Observable<any[]> {
    return this.HttpClient.get<any[]>(this.vehicleSourcesEndpoint);
  }

  /* Proposal Status */
  getProposalStatusCounts(): Observable<any[]> {
    return this.HttpClient.get<any[]>(this.proposalStatusEndpoint);
  }


  /* New Approval */
  getNewApproval(): Observable<NewApproval[]> {
    return this.HttpClient.get<NewApproval[]>(this.newApprovalEndpoint);
  }


  /* Claims Approval */
  getClaims(): Observable<Claim[]> {
    return this.HttpClient.get<Claim[]>(this.claimsApprovalEndpoint);
  }

  /* Add Plan */
  addPlan(adminPlan: AdminPlans): Observable<AdminPlans> {
    return this.HttpClient.post<AdminPlans>(`${this.adminPlansEndpoint}`, adminPlan);
  }

  /* Add Option */
  addOption(adminOption: AdminOptions): Observable<AdminOptions> {
    return this.HttpClient.post<AdminOptions>(`${this.adminOptionsEndpoint}`, adminOption);
  }

  // Get all admins
  getAllAdmins(): Observable<Admin[]> {
    return this.HttpClient.get<Admin[]>(this.adminEndpoint);
  }

  // Get an admin by ID
  getAdminById(id: number): Observable<Admin> {
    return this.HttpClient.get<Admin>(`${this.adminEndpoint}/${id}`);
  }

  // Update an admin
  updateAdmin(id: number, admin: Admin): Observable<void> {
    return this.HttpClient.put<void>(`${this.adminEndpoint}/${id}`, admin);
  }


  // Delete an admin
  deleteAdmin(id: number): Observable<void> {
    return this.HttpClient.delete<void>(`${this.adminEndpoint}/${id}`);
  }

  // Add a new admin (No userID as it will be generated by backend)
  addAdmin(admin: Omit<Admin, 'userID'>): Observable<Admin> {
    return this.HttpClient.post<Admin>(this.adminEndpoint, admin);
  }
}
