# Configuration EmailJS pour le Formulaire de Contact

## Étapes à suivre:

### 1. Créer un compte EmailJS
- Allez sur https://www.emailjs.com/
- Créez un compte gratuit
- Confirmez votre email

### 2. Configurer le Service Email
- Connectez-vous à EmailJS
- Allez dans "Email Services" (Services de courrier électronique)
- Cliquez sur "Add Service" (Ajouter un service)
- Sélectionnez le fournisseur d'email que vous voulez utiliser (Gmail, Outlook, etc.)
- Suivez les étapes de configuration

### 3. Créer un Template d'Email
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Configurez le template avec les variables suivantes:
  - `{{from_name}}` - Nom du client
  - `{{from_email}}` - Email du client
  - `{{service}}` - Service demandé
  - `{{message}}` - Message du client
  
Exemple de contenu de template:
```
Nouveau message de contact:

Nom: {{from_name}}
Email: {{from_email}}
Service: {{service}}

Message:
{{message}}
```

- Définissez "To Email" à: `support@izrf.fr`
- Copiez le Template ID

### 4. Obtenir vos clés
- Allez dans "Account"
- Copiez votre **Public Key** (Clé publique)
- Copiez votre **Service ID**
- Copiez votre **Template ID**

### 5. Mettre à jour Contact.tsx
Remplacez ces variables dans `src/components/Contact.tsx`:

```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Mettez votre clé publique

await emailjs.send(
  'YOUR_SERVICE_ID',     // Mettez votre Service ID
  'YOUR_TEMPLATE_ID',    // Mettez votre Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    service: formData.service,
    message: formData.message,
    to_email: 'support@izrf.fr',
  }
);
```

### 6. Tester le formulaire
- Ouvrez votre portfolio
- Allez à la section "Contactez-nous"
- Remplissez le formulaire
- Cliquez sur "Envoyer le message"
- Vérifiez que vous recevez l'email à `support@izrf.fr`

## Plan Gratuit EmailJS
- 200 emails par mois
- Idéal pour un petit portfolio
- Pas de carte de crédit requise

## Dépannage
Si vous ne recevez pas d'emails:
1. Vérifiez que votre clé publique est correcte
2. Vérifiez que votre Service ID et Template ID sont corrects
3. Vérifiez dans la console du navigateur pour les erreurs
4. Allez sur https://dashboard.emailjs.com/admin/logs pour voir les logs
