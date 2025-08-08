
---
title: "How To - Microsoft Entra ID - Empowering Your Nonprofit Organization"
date: "2025-05-12"
tags: ["Security", "Compliance", "Best Business Practices"]
author: "Christian Sosa"
slug: "how-to-microsoft-entra-id-empowering-nonprofit"
excerpt: "How to leverage Microsoft Entra ID for nonprofit security, compliance, and cost savings."
image: "https://storage001backupfailed.blob.core.windows.net/stor-container-web/BLOG_IMG/Microsoft_Decor_Wall.jpg"
---

![Microsoft Logo In background](https://storage001backupfailed.blob.core.windows.net/stor-container-web/BLOG_IMG/Microsoft_Decor_Wall.jpg)
*Photo by Angel Bena: https://www.pexels.com/photo/a-company-logo-on-a-wall-10142683/*



## Overview

This guide explains how nonprofits can use Microsoft Entra ID to secure staff identities, access discounted Microsoft 365 services, and scale IT operations efficiently. It covers licensing, device requirements, and best practices for setup.

## Prerequisites

- Nonprofit eligibility for Microsoft 365 nonprofit offers
- Admin access to Microsoft 365 tenant
- Windows 10/11 Pro or Enterprise for device join

## Warnings & Gotchas

> ⚠️ Microsoft discontinued the 10 free Business Premium licenses for nonprofits as of May 2025. Discounted rates remain, but plan for some entry cost.

## Steps

1. **Register Your Nonprofit with Microsoft**
   - Visit the [Microsoft Nonprofits Portal](https://nonprofit.microsoft.com/) and follow the steps to validate your nonprofit status. Approval can take a few days.

2. **Purchase or Assign Microsoft 365 Licenses**
   - Once approved, log in to the [Microsoft 365 Admin Center](https://admin.microsoft.com/).
   - Go to **Billing > Purchase services** and select the nonprofit offers (Business Premium, E3/E5, or Entra ID Plan 1).
   - Assign licenses to users under **Users > Active users**.

3. **Prepare Devices for Entra ID Join**
   - Ensure all staff devices run Windows 10/11 Pro or Enterprise. Upgrade from Home if needed (see [how to upgrade](https://support.microsoft.com/en-us/windows/upgrade-windows-home-to-windows-pro-ef34d520-e73f-3198-c525-d1a218cc2818)).
   - Back up important data before making changes.

4. **Join Devices to Microsoft Entra ID**
   - On each device, go to **Settings > Accounts > Access work or school > Connect**.
   - Enter the user’s Microsoft 365 email and follow prompts to join the device to Entra ID.
   - After joining, users will sign in with their Microsoft 365 credentials.

5. **Set Up Multi-Factor Authentication (MFA)**
   - In the [Entra Admin Center](https://entra.microsoft.com/), go to **Protect & Secure > Authentication methods**.
   - Enforce MFA for all users for better security. Users can use the Microsoft Authenticator app or SMS.

6. **Configure Conditional Access Policies**
   - In Entra Admin Center, go to **Conditional Access**.
   - Create policies to require MFA, restrict access by location, or block legacy authentication.
   - See [Microsoft’s guide to Conditional Access](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview).

7. **Set Up Intune for Device Management (Optional but Recommended)**
   - In the [Intune Admin Center](https://intune.microsoft.com/), enroll devices for management.
   - Configure device compliance, app deployment, and security baselines.

8. **Train Staff and Test Access**
   - Provide staff with instructions for logging in, using MFA, and accessing resources.
   - Test device join, MFA, and access to files/apps before full rollout.

9. **Monitor and Maintain**
   - Regularly review sign-in logs and security alerts in Entra Admin Center.
   - Audit user access and device compliance.
   - Update policies as your organization grows or as new threats emerge.

10. **Get Help If Needed**
   - Microsoft provides [nonprofit support](https://nonprofit.microsoft.com/support) and community forums.
   - Backup Failed Foundation can assist with setup, migration, and ongoing management.

## Notes & Troubleshooting

- You can stand up a full identity platform for zero dollars on your first ten seats (if you already have legacy licenses). After that, it's a few dollars per user/month.
- Always test device join and access policies before rolling out to all staff.
- Contact Microsoft or a partner for nonprofit eligibility questions.

## Related Articles

- [How To - Microsoft 365 - Creating New Users For Organization](https://backupfailed.com/blog/how-to-create-new-users-for-organization/)
- [How To - SharePoint - Share Files with external users](https://backupfailed.com/blog/how-to-sharepoint-share-files-from-windows-explorer/)

---

<div style="background-color:rgba(46, 154, 255, 0.8); padding: 1em; margin: 1.5rem auto; border-radius: 25px; text-align: center; max-width: 600px; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(37, 99, 235, 0.9)';" onmouseout="this.style.backgroundColor='rgba(46, 154, 255, 0.8)';">
    <strong><a href="https://backupfailed.com/contact/" style="color: white; text-decoration: none;">Let's make it happen, contact us.</a></strong>
</div>
