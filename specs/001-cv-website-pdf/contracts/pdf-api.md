# PDF Generation API Contract

## Endpoint: `GET /api/pdf/[locale]`

Generates a professional PDF version of the CV for the specified locale.

### URL Parameters

| Parameter | Description | Valid Values |
|-----------|-------------|--------------|
| `locale` | The target language for the CV | `pt-br`, `es-ar`, `en-usa` |

### Query Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `filename` | Custom filename for the download | `CV-Jonatas-[locale].pdf` |

### Response

- **Status**: `200 OK`
- **Content-Type**: `application/pdf`
- **Content-Disposition**: `attachment; filename="[filename]"`

### Error Handling

- **400 Bad Request**: Unsupported locale.
- **500 Internal Server Error**: PDF generation engine failure.
