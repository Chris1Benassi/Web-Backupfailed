
---
title: "How To - SharePoint - Share Files with external users"
date: "2025-07-23"
tags: ["SharePoint", "File Sharing", "Security", "Best Practices"]
author: "Backup Failed Foundation"
slug: "How-To-SharePoint-Share-Files-From-Windows-Explorer"
excerpt: "Securely share files from SharePoint using Windows File Explorer, with best practices for external sharing."
image: "https://support.microsoft.com/images/en-us/cce0ec44-0218-4c97-a55e-9aad0be2f129"
---


# How To - SharePoint - Share Files with external users

## Overview

Email isn’t built for large files and sending them externally can lead to issues with size limits. SharePoint is a better option, if you use it right. This guide walks you through securely sharing files from SharePoint through Windows File Explorer. We’ll also explain why some of SharePoint’s default options are a bad idea.

**When to Use This**

- Files are too big for email
- You want to control exactly who can access the files
- You want to track access or revoke sharing later
- You’re working from the synced SharePoint folder in Windows File Explorer

## Why Not Just Use the "Copy Link" Option?

Let’s get one thing out of the way: "Copy Link" in SharePoint is tempting but dangerous when used casually.

By default, it might generate a link that anyone with the link can open, even if they shouldn’t. That means if someone forwards it (or pastes it into a group chat by accident), it’s game over. In addition, most organizations will have policies configured to prevent sharing files without audit trails, depending on the regulations you must abide by sharing sensitive information must be monitored, logged, and available for audits.

Instead, always choose: 🔒 **"People you choose"** — this restricts access to only the specific email addresses you send it to.

## Prerequisites

- The SharePoint site must be synced with OneDrive to your File Explorer
- You must have permissions to share files
- External sharing must be enabled in your organization’s SharePoint settings (check with IT if unsure)

## Steps to Share from File Explorer

1. **Open File Explorer**
   - Navigate to the synced SharePoint folder (you’ll usually see the organization name listed in the navigation pane under “OneDrive – [Company Name]”).
2. **Right-click the File or Folder**
   - Choose "Share" from the context menu.
3. **Click the Arrow Next to 'People in [Your Org] with the link can view'**
   - This is critical. Click this to open link settings.
4. **Choose “People you choose”**
   - This ensures only the specified external email(s) will be able to access it.
   
   ![Link setting in OneDrive with Specific people option highlighted.](https://support.microsoft.com/images/en-us/cce0ec44-0218-4c97-a55e-9aad0be2f129)

   > ⚠️ **DO NOT** pick "Anyone with the link" unless you genuinely want the file public to the internet.

5. **Decide View vs Edit**
   - Toggle off “Allow editing” if they only need to read/download.
   - Leave it on if they’ll be uploading or modifying documents.
6. **Send Link**
   - Enter the recipient’s email(s) and click Send
   - When sharing files or folders, it uses email notifications to inform recipients, and these emails typically come from no-reply@sharepointonline.com. It may be also a good idea to write them an email from your own account telling them to check for an incoming mail as it may sometimes land in Junk.
7. **Optional: Audit or Stop Sharing Later**
   - If you need to revoke access:
     - Go to SharePoint online
     - Right-click the file > Manage Access
     - Remove the external user or the entire sharing link

## Sources

- [Microsoft Docs - Share files securely](https://learn.microsoft.com/en-us/sharepoint/share-sharepoint-files)