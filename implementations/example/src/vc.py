from vcdm.models import Credential, Presentation
from fastapi import HTTPException
import jwt
import base64
import json


def issue_credential(credential, options):
    try:
        Credential.model_validate(credential)
    except ValueError:
        raise HTTPException(status_code=400, detail="Validation error.")
    
    jwt_vc = jwt.encode(credential, "secret", algorithm="HS256")
    vc = base64.urlsafe_b64decode(jwt_vc.split('.')[1]+'===').decode()
    return json.loads(vc)

def verify_credential(vc, options):
    try:
        Credential.model_validate(vc)
    except ValueError:
        raise HTTPException(status_code=400, detail="Validation error.")
    verification = {
        'verified': True
    }
    return verification

def verify_presentation(vp, options):
    try:
        Presentation.model_validate(vp)
    except ValueError:
        raise HTTPException(status_code=400, detail="Validation error.")
    
    verification = {
        'verified': True
    }
    return verification