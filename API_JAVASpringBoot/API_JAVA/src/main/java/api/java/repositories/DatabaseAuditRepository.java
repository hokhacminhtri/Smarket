package api.java.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import api.java.entities.DatabaseAudit;

@Repository
public interface DatabaseAuditRepository extends JpaRepository<DatabaseAudit, Integer> {
}
